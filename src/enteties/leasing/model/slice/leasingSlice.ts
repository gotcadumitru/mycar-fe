import { createSlice } from '@reduxjs/toolkit'
import type { LeasingSliceState } from '../types/leasingTypes'
import { fetchAllLeasingCompaniesThunk } from './leasingThunks'

export const initialState: LeasingSliceState = {
  leasingCompanies: [],
}

export const leasingSlice = createSlice({
  name: 'leasing',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchAllLeasingCompaniesThunk.fulfilled, (state, action) => {
      state.leasingCompanies = action.payload
    }),
})
export const { actions: leasingActions } = leasingSlice
export const { reducer: leasingReducer } = leasingSlice
