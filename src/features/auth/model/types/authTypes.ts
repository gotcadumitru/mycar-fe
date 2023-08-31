import type { ForgotPasswordFormFullType } from '../../ForgotPassword/types/forgotPasswordTypes'
import type { ResetPasswordFormFullType } from '../../ResetPassword/types/resetPasswordTypes'
import type { SignInFormFullType } from '../../SignIn/types/singInTypes'
import type { SignUpFormFullType } from '../../SignUp/types/singUpTypes'

export type AuthSliceState = {
  signInForm: SignInFormFullType
  signUpForm: SignUpFormFullType
  resetPasswordForm: ResetPasswordFormFullType
  forgotPasswordForm: ForgotPasswordFormFullType
}
