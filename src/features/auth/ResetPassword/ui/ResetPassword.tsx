import { useAuth } from 'app/providers/AuthContextProvider'
import { ChangeEvent, FC, useId } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { isFirebaseError } from 'shared/api/firebase/firebaseUtils'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { checkIfExistErrors } from 'shared/lib/utils/checkIfExistErrors'
import Button from 'shared/ui/Button'
import Form from 'shared/ui/Form'
import Input from 'shared/ui/Input'
import { authActions } from '../../lib/slice/authSlice'

interface ResetPasswordProps {
  className?: string
}

// not used
export const ResetPassword: FC<ResetPasswordProps> = ({ className }) => {
  const [searchParams] = useSearchParams()
  const formFields = useAppSelector((state) => state.auth.resetPasswordForm)
  const { resetPassword } = useAuth()
  const dispatch = useAppDispatch()
  const formId = useId()

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const name = event.target.name as keyof typeof formFields

    dispatch(
      authActions.changeResetPasswordFormAC({
        ...formFields,
        [name]: {
          ...formFields[name],
          value,
          errorMessage: '',
        },
      }),
    )
  }
  const onSubmit = async () => {
    const { formFieldsWithErrors, isErrors } = checkIfExistErrors(formFields)
    if (isErrors) return dispatch(authActions.changeResetPasswordFormAC(formFieldsWithErrors))
    try {
      const oobCode = searchParams.get('oobCode')!
      await resetPassword(oobCode, formFields.password.value)
    } catch (err) {
      if (isFirebaseError(err)) {
        formFieldsWithErrors.password.errorMessage = err.message
        toast.error(err.message)
      }
      dispatch(authActions.changeResetPasswordFormAC(formFieldsWithErrors))
    }
  }

  return (
    <Form id={formId} onSubmit={onSubmit} className={className}>
      <Input
        valueFullType={formFields.password}
        name='password'
        type='password'
        autoComplete='new-password'
        onChange={onInputChange}
        label='Parola noua'
      />
      <Button type='submit'>Reseteaza parola</Button>
    </Form>
  )
}
