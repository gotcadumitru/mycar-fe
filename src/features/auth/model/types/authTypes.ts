import type { ForgotPasswordFormFullType } from '../../ForgotPassword/types/forgotPasswordTypes'
import type { ResetPasswordFormFullType } from '../../ResetPassword/types/resetPasswordTypes'
import type { SignInFormFullType } from '../../SignIn/types/signInTypes'
import type { SignUpFormFullType } from '../../SignUp/types/signUpTypes'

export type AuthSliceState = {
  signInForm: SignInFormFullType
  signUpForm: SignUpFormFullType
  resetPasswordForm: ResetPasswordFormFullType
  forgotPasswordForm: ForgotPasswordFormFullType
}
