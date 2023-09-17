import { createSlice } from '@reduxjs/toolkit'
import type { UserSliceState } from '../types/user.types'

export const initialState: UserSliceState = {
  authUser: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
