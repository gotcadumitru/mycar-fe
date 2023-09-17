import { useAuth } from 'app/providers/AuthContextProvider'
import LoginWith from 'features/loginWith'
import { ChangeEvent, FC, useId } from 'react'
import { toast } from 'react-toastify'
import { FirebaseErrorCode } from 'shared/api/firebase'
import { isFirebaseError } from 'shared/api/firebase/firebaseUtils'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { checkIfExistErrors } from 'shared/lib/utils/checkIfExistErrors'
import Button, { ButtonCategoryType, ButtonMargin, ButtonTheme } from 'shared/ui/Button'
import Form from 'shared/ui/Form'
import Input from 'shared/ui/Input'
import { authActions } from '../../lib/slice/authSlice'

interface SignUpProps {
  className?: string
}

export const SignUp: FC<SignUpProps> = ({ className }) => {
  const formFields = useAppSelector((state) => state.auth.signUpForm)
  const dispatch = useAppDispatch()
  const formId = useId()
  const { register } = useAuth()
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const name = event.target.name as keyof typeof formFields

    dispatch(
      authActions.changeSignUpFormAC({
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
    if (isErrors) return dispatch(authActions.changeSignUpFormAC(formFieldsWithErrors))
    try {
      await register(formFields.email.value, formFields.password.value, formFields.fullName.value)
    } catch (err) {
      if (isFirebaseError(err)) {
        if (err.code === FirebaseErrorCode.WEAK_PASSWORD) {
          formFieldsWithErrors.password.errorMessage = err.message
        }
        if (
          [FirebaseErrorCode.EMAIL_ALREADY_IN_USE, FirebaseErrorCode.INVALID_EMAIL].includes(
            err.code as FirebaseErrorCode,
          )
        ) {
          formFieldsWithErrors.email.errorMessage = err.message
        }
        toast.error(err.message)
      }
      dispatch(authActions.changeSignUpFormAC(formFieldsWithErrors))
    }
  }

  return (
    <Form id={formId} onSubmit={onSubmit} className={className}>
      <Input
        valueFullType={formFields.fullName}
        name='fullName'
        onChange={onInputChange}
        label='Numele complet'
      />
      <Input
        valueFullType={formFields.email}
        name='email'
        type='email'
        autoComplete='username'
        onChange={onInputChange}
        label='Adresa de email'
      />
      <Input
        valueFullType={formFields.password}
        name='password'
        type='password'
        autoComplete='new-password'
        onChange={onInputChange}
        label='Gandeste-te la o parola sigura'
      />
      <Input
        valueFullType={formFields.confirmPassword}
        name='confirmPassword'
        type='password'
        autoComplete='new-password'
        onChange={onInputChange}
        label='Confirma parola'
      />
      <Button margin={ButtonMargin.BOTTOM} type='submit'>
        Inregistrare
      </Button>
      <Button
        margin={ButtonMargin.BOTTOM}
        category={ButtonCategoryType.LINK}
        theme={ButtonTheme.OUTLINE_RED}
        to={RoutePaths.sign_in}
      >
        Autentificare
      </Button>
      <LoginWith />
    </Form>
  )
}
