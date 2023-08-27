import { createSlice } from '@reduxjs/toolkit'
import type { OwnershipSliceState } from '../types/ownershipTypes'
import { fetchAllOwnershipTypesThunk } from './ownershipThunks'

export const initialState: OwnershipSliceState = {
  ownershipTypes: [],
}

export const ownershipSlice = createSlice({
  name: 'ownership',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchAllOwnershipTypesThunk.fulfilled, (state, action) => {
      state.ownershipTypes = action.payload
    }),
})
export const { actions: ownershipActions } = ownershipSlice
export const { reducer: ownershipReducer } = ownershipSlice
