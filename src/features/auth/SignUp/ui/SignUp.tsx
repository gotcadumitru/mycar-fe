import { useAuth } from 'app/providers/AuthContextProvider'
import firebase from 'firebase/compat'
import { ChangeEvent, FC, useId } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FirebaseErrorCode } from 'shared/api/firebase'
import { isFirebaseError } from 'shared/api/firebase/firebaseUtils'
import BsArrowRightShort from 'shared/assets/icons/BsArrowRightShort.svg'
import FaFacebook from 'shared/assets/icons/FaFacebook.svg'
import FcGoogle from 'shared/assets/icons/FcGoogle.svg'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { checkIfExistErrors } from 'shared/lib/utils/checkIfExistErrors'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import Form from 'shared/ui/Form'
import Input, { OnChangeMinType } from 'shared/ui/Input'
import { authActions } from '../../lib/slice/authSlice'

interface SignUpProps {
  className?: string
}

export const SignUp: FC<SignUpProps> = ({ className }) => {
  const formFields = useAppSelector((state) => state.auth.signUpForm)
  const dispatch = useAppDispatch()
  const formId = useId()
  const { register, login } = useAuth()
  const onInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | OnChangeMinType,
  ) => {
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
      const registerResponse = await register(formFields.email.value, formFields.password.value)
      const loginResponse = await login(formFields.email.value, formFields.password.value)
    } catch (err) {
      if (isFirebaseError(err)) {
        if (err.code === FirebaseErrorCode.WEAK_PASSWORD) {
          formFieldsWithErrors.password.errorMessage = err.message
        }
        if (err.code === FirebaseErrorCode.EMAIL_ALREADY_IN_USE) {
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
        valueFullType={formFields.firstName}
        name='firstName'
        onChange={onInputChange}
        label='Numele'
      />
      <Input
        valueFullType={formFields.lastName}
        name='lastName'
        onChange={onInputChange}
        label='Prenumele'
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
      <Button type='submit'>Inregistrare</Button>
      <Button
        category={ButtonCategoryType.LINK}
        theme={ButtonTheme.OUTLINE_RED}
        to={RoutePaths.sign_in}
      >
        Autentificare
      </Button>
      <Button
        theme={ButtonTheme.OUTLINE_BLUE}
        icon={<FaFacebook className='auth-page__facebook' />}
      >
        Login with
      </Button>
      <Button theme={ButtonTheme.OUTLINE_RED} icon={<FcGoogle className='auth-page__google' />}>
        Login with
      </Button>
      <Link to='/auth/forgot' className='auth-page__forgot'>
        <BsArrowRightShort /> Forgot password
      </Link>
    </Form>
  )
}
