import { createAsyncThunk } from '@reduxjs/toolkit'
import { kv } from '@vercel/kv'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { OwnershipActions } from '../consts/ownershipConsts'
import type { OwnershipType } from '../types/ownershipTypes'

export const fetchAllOwnershipTypesThunk = createAsyncThunk<
  OwnershipType[],
  void,
  ThunkConfig<string>
>(OwnershipActions.FETCH_ALL_OWNERSHIP_TYPES, async (_, thunkApi) => {
  // const r = await kv.json.set("ownershipTypes", "$", JSON.stringify(response.data))
  const response: OwnershipType[] = await kv.json.get('ownershipTypes')
  return response
})
