import { createSlice } from '@reduxjs/toolkit'
import type { VehicleSliceState } from '../types/vehicleTypes'
import {
  createNewVehiclesForUserId,
  editVehiclesForUserId,
  fetchAllVehiclesByUserId,
  softDeleteVehicleById,
} from './vehicleThunks'

export const initialState: VehicleSliceState = {
  allVehiclesOfCurrentUser: [],
}

export const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllVehiclesByUserId.fulfilled, (state, action) => {
        state.allVehiclesOfCurrentUser = action.payload
      })
      .addCase(createNewVehiclesForUserId.fulfilled, (state, action) => {
        state.allVehiclesOfCurrentUser.push(action.payload)
      })
      .addCase(softDeleteVehicleById.fulfilled, (state, action) => {
        state.allVehiclesOfCurrentUser = state.allVehiclesOfCurrentUser.filter(
          (vehicle) => vehicle.uid !== action.payload,
        )
      })
      .addCase(editVehiclesForUserId.fulfilled, (state, action) => {
        const changedVehicle = action.payload
        state.allVehiclesOfCurrentUser = state.allVehiclesOfCurrentUser.map((vehicle) =>
          vehicle.uid === changedVehicle.uid ? changedVehicle : vehicle,
        )
      }),
})
export const { actions: vehicleActions } = vehicleSlice
export const { reducer: vehicleReducer } = vehicleSlice
