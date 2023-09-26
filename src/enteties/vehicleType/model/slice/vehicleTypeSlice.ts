import { createSlice } from '@reduxjs/toolkit'
import type { VehicleTypeSliceState } from '../types/vehicleTypeTypes'
import { fetchAllVehicleTypesThunk } from './vehicleTypeThunks'

export const initialState: VehicleTypeSliceState = {
  vehicleTypes: [],
}

export const vehicleTypeSlice = createSlice({
  name: 'vehicleType',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchAllVehicleTypesThunk.fulfilled, (state, action) => {
      state.vehicleTypes = action.payload
    }),
})
export const { actions: vehicleTypeActions } = vehicleTypeSlice
export const { reducer: vehicleTypeReducer } = vehicleTypeSlice
