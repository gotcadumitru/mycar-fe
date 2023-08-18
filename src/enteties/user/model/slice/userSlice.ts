import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { salesforceRemoteActions } from 'shared/api'
import { mapUserMinFromSalesforce } from '../../utils/mappers/userMappers'
import { UserActions } from '../consts/userConsts'
import type { UserFromSalesforce, UserSliceState } from '../types/user.types'

export const fetchAllUsersFromSalesforceThunk = createAsyncThunk<
  UserFromSalesforce[],
  void,
  ThunkConfig<string>
>(UserActions.FETCH_ALL_USERS, async () => {
  const userFromSalesforceRequests = await salesforceRemoteActions.getAllUsers()
  return userFromSalesforceRequests.map(mapUserMinFromSalesforce)
})

// Please don't delete this
// export const fetchAuthUsersThunk = createAsyncThunk<UserFromSalesforce, void, ThunkConfig<string>>(
//   UserActions.FETCH_AUTH_USER,
//   async (_, thunkApi) => {
//     try {
//       const response = await thunkApi.extra.sapienAPI.get<UserFromSalesforce>('/v1/user/me')
//       return response.data
//     } catch (err) {
//       if (axios.isAxiosError(err) && err?.response?.status === 403) {
//         window.location.reload()
//       }
//       return thunkApi.rejectWithValue('Error')
//     }
//   },
// )

export const initialState: UserSliceState = {
  allUsersFromSalesforce: [],
  authUser: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchAllUsersFromSalesforceThunk.fulfilled, (state, action) => {
      state.allUsersFromSalesforce = action.payload
    }),
  //
  // .addCase(fetchAuthUsersThunk.fulfilled, (state, action) => {
  //   state.authUser = action.payload
  // }),
})
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
