import { useAuth } from 'app/providers/AuthContextProvider'
import LoginWith from 'features/loginWith/ui/LoginWith/LoginWith'
import { ChangeEvent, FC, useId } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FirebaseErrorCode } from 'shared/api/firebase'
import { isFirebaseError } from 'shared/api/firebase/firebaseUtils'
import BsArrowRightShort from 'shared/assets/icons/BsArrowRightShort.svg'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { checkIfExistErrors } from 'shared/lib/utils/checkIfExistErrors'
import Button, { ButtonCategoryType, ButtonMargin, ButtonTheme } from 'shared/ui/Button'
import Form from 'shared/ui/Form'
import Input from 'shared/ui/Input'
import { authActions } from '../../lib/slice/authSlice'

interface SignInProps {
  className?: string
}

export const SignIn: FC<SignInProps> = ({ className }) => {
  const formFields = useAppSelector((state) => state.auth.signInForm)
  const { login } = useAuth()
  const dispatch = useAppDispatch()
  const formId = useId()

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const name = event.target.name as keyof typeof formFields

    dispatch(
      authActions.changeSignInFormAC({
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
    if (isErrors) return dispatch(authActions.changeSignInFormAC(formFieldsWithErrors))
    try {
      const loginResponse = await login(formFields.email.value, formFields.password.value)
    } catch (err) {
      if (isFirebaseError(err)) {
        if (err.code === FirebaseErrorCode.WRONG_PASSWORD) {
          formFieldsWithErrors.password.errorMessage = err.message
        }
        if (err.code === FirebaseErrorCode.USER_NOT_FOUND) {
          formFieldsWithErrors.password.errorMessage = err.message
        }
        toast.error(err.message)
      }
      dispatch(authActions.changeSignInFormAC(formFieldsWithErrors))
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
      <Input
        valueFullType={formFields.password}
        name='password'
        type='password'
        autoComplete='current-password'
        onChange={onInputChange}
        label='Parola'
      />
      <Button margin={ButtonMargin.BOTTOM} type='submit'>
        Autentificare
      </Button>
      <Button
        margin={ButtonMargin.BOTTOM}
        category={ButtonCategoryType.LINK}
        theme={ButtonTheme.OUTLINE_RED}
        to={RoutePaths.sign_up}
      >
        Creare Cont
      </Button>
      <LoginWith />
      <Link to={RoutePaths.forgot_password} className='auth-page__forgot'>
        <BsArrowRightShort /> Forgot password
      </Link>
    </Form>
  )
}
