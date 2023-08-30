import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AuthSliceState } from '../../model/types/authTypes'
import type { SignInFormFullType } from '../../SignIn/types/singInTypes'
import { getSignInFormValues } from '../../SignIn/utils/signInUtils'

export const initialState: AuthSliceState = {
  signInForm: getSignInFormValues({}),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeSignInFormAC(state, action: PayloadAction<SignInFormFullType>) {
      state.signInForm = action.payload
    },
  },
})

export const { actions: authActions } = authSlice
export const { reducer: authReducer } = authSlice
