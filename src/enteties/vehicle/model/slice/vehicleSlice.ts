import { createSlice } from '@reduxjs/toolkit'
import type { VehicleSliceState } from '../types/vehicleTypes'
import { fetchAllVehicleTypesThunk } from './vehicleThunks'

export const initialState: VehicleSliceState = {
  vehicleTypes: [],
}

export const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchAllVehicleTypesThunk.fulfilled, (state, action) => {
      state.vehicleTypes = action.payload
    }),
})
export const { actions: vehicleActions } = vehicleSlice
export const { reducer: vehicleReducer } = vehicleSlice
