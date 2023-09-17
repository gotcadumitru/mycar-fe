import { useAuth } from 'app/providers/AuthContextProvider'
import { ChangeEvent, FC, useId } from 'react'
import { toast } from 'react-toastify'
import { isFirebaseError } from 'shared/api/firebase/firebaseUtils'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { checkIfExistErrors } from 'shared/lib/utils/checkIfExistErrors'
import Button from 'shared/ui/Button'
import Form from 'shared/ui/Form'
import Input from 'shared/ui/Input'
import { authActions } from '../../lib/slice/authSlice'
import { getForgotPasswordFormValues } from '../utils/forgotPasswordUtils'

interface ForgotPasswordProps {
  className?: string
}

export const ForgotPassword: FC<ForgotPasswordProps> = ({ className }) => {
  const { forgotPassword } = useAuth()
  const formFields = useAppSelector((state) => state.auth.forgotPasswordForm)
  const dispatch = useAppDispatch()
  const formId = useId()

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const name = event.target.name as keyof typeof formFields

    dispatch(
      authActions.changeForgotPasswordFormAC({
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
    if (isErrors) return dispatch(authActions.changeForgotPasswordFormAC(formFieldsWithErrors))
    try {
      await forgotPassword(formFields.email.value)
      dispatch(authActions.changeForgotPasswordFormAC(getForgotPasswordFormValues({})))
      toast.success(
        `Un email cu pasii ce trebuie de urmat a fost trimis la adresa ${formFields.email.value}`,
      )
    } catch (err) {
      if (isFirebaseError(err)) {
        formFieldsWithErrors.email.errorMessage = err.message
        toast.error(err.message)
      }
      dispatch(authActions.changeForgotPasswordFormAC(formFieldsWithErrors))
    }
  }

  return (
    <Form id={formId} onSubmit={onSubmit} className={className}>
      <Input
        valueFullType={formFields.email}
        name='email'
        type='email'
        autoComplete='username'
        onChange={onInputChange}
        label='Adresa de email'
      />
      <Button type='submit'>Reseteaza parola</Button>
    </Form>
  )
}
