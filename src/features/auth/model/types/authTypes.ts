import type { SignInFormFullType } from '../../SignIn/types/singInTypes'
import type { SignUpFormFullType } from '../../SignUp/types/singUpTypes'

export type AuthSliceState = {
  signInForm: SignInFormFullType
  signUpForm: SignUpFormFullType
}
