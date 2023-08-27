import { createSlice } from '@reduxjs/toolkit'
import { FetchStatus } from 'shared/api'
import type { VehicleSliceState } from '../types/vehicleTypes'
import { fetchAllVehicleTypesThunk, fetchVehicleWithDetailsThunk } from './vehicleThunks'

export const initialState: VehicleSliceState = {
  vehicleTypes: [],
  vehiclesWithDetails: [],
  vehiclesWithDetailsFetchStatus: {},
}

export const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllVehicleTypesThunk.fulfilled, (state, action) => {
        state.vehicleTypes = action.payload
      })
      .addCase(fetchVehicleWithDetailsThunk.pending, (state, action) => {
        state.vehiclesWithDetailsFetchStatus[action.meta.arg] = FetchStatus.IN_PROGRESS
      })
      .addCase(fetchVehicleWithDetailsThunk.fulfilled, (state, action) => {
        const vehicleWithDetails = action.payload
        if (!vehicleWithDetails) return state
        state.vehiclesWithDetails.push(vehicleWithDetails)
        state.vehiclesWithDetailsFetchStatus[action.meta.arg] = FetchStatus.SUCCESS
      })
      .addCase(fetchVehicleWithDetailsThunk.rejected, (state, action) => {
        state.vehiclesWithDetailsFetchStatus[action.meta.arg] = FetchStatus.FAIL
      }),
})
export const { actions: vehicleActions } = vehicleSlice
export const { reducer: vehicleReducer } = vehicleSlice
