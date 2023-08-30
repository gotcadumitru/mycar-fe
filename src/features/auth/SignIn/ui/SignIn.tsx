import { ChangeEvent, FC, useId } from 'react'
import { Link } from 'react-router-dom'
import BsArrowRightShort from 'shared/assets/icons/BsArrowRightShort.svg'
import FaFacebook from 'shared/assets/icons/FaFacebook.svg'
import FcGoogle from 'shared/assets/icons/FcGoogle.svg'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import Form from 'shared/ui/Form'
import Input, { OnChangeMinType } from 'shared/ui/Input'
import { authActions } from '../../lib/slice/authSlice'

interface SignInProps {
  className?: string
}

export const SignIn: FC<SignInProps> = ({ className }) => {
  const formFields = useAppSelector((state) => state.auth.signInForm)
  const dispatch = useAppDispatch()
  const formId = useId()

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | OnChangeMinType,
  ) => {
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
  const onSubmit = () => {}
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
        onChange={onInputChange}
        label='Adresa de email'
      />
      <Input
        valueFullType={formFields.password}
        name='password'
        onChange={onInputChange}
        label='Gandeste-te la o parola sigura'
      />
      <Input
        valueFullType={formFields.confirmPassword}
        name='confirmPassword'
        onChange={onInputChange}
        label='Confirma parola'
      />
      <Button type='submit'>Autentificare</Button>
      <Button
        category={ButtonCategoryType.LINK}
        theme={ButtonTheme.OUTLINE_RED}
        to={RoutePaths.sign_up}
      >
        Creare Cont
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
