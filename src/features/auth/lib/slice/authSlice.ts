import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { ForgotPasswordFormFullType } from '../../ForgotPassword/types/forgotPasswordTypes'
import { getForgotPasswordFormValues } from '../../ForgotPassword/utils/forgotPasswordUtils'
import type { AuthSliceState } from '../../model/types/authTypes'
import type { ResetPasswordFormFullType } from '../../ResetPassword/types/resetPasswordTypes'
import { getResetPasswordFormValues } from '../../ResetPassword/utils/resetPasswordUtils'
import type { SignInFormFullType } from '../../SignIn/types/singInTypes'
import { getSignInFormValues } from '../../SignIn/utils/signInUtils'
import type { SignUpFormFullType } from '../../SignUp/types/singUpTypes'
import { getSignUpFormValues } from '../../SignUp/utils/signUpUtils'

export const initialState: AuthSliceState = {
  signInForm: getSignInFormValues({}),
  signUpForm: getSignUpFormValues({}),
  resetPasswordForm: getResetPasswordFormValues({}),
  forgotPasswordForm: getForgotPasswordFormValues({}),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeSignInFormAC(state, action: PayloadAction<SignInFormFullType>) {
      state.signInForm = action.payload
    },
    changeSignUpFormAC(state, action: PayloadAction<SignUpFormFullType>) {
      state.signUpForm = action.payload
    },
    changeResetPasswordFormAC(state, action: PayloadAction<ResetPasswordFormFullType>) {
      state.resetPasswordForm = action.payload
    },
    changeForgotPasswordFormAC(state, action: PayloadAction<ForgotPasswordFormFullType>) {
      state.forgotPasswordForm = action.payload
    },
  },
})

export const { actions: authActions } = authSlice
export const { reducer: authReducer } = authSlice
