import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { OwnershipActions } from '../consts/ownershipConsts'
import type { OwnershipType } from '../types/ownershipTypes'

export const fetchAllOwnershipTypesThunk = createAsyncThunk<
  OwnershipType[],
  void,
  ThunkConfig<string>
>(OwnershipActions.FETCH_ALL_OWNERSHIP_TYPES, async (_, thunkApi) => {
  const response = await thunkApi.extra.carAPI.get<OwnershipType[]>('/ownershipTypes')
  return response.data
})
