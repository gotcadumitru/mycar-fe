import { createSlice } from '@reduxjs/toolkit'
import type { VehicleSliceState } from '../types/vehicleTypes'
import {
  createNewVehiclesForUserId,
  editVehiclesForUserId,
  fetchAllVehiclesByUserId,
  fetchVehicleById,
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
      })
      .addCase(fetchVehicleById.fulfilled, (state, action) => {
        const vehicleById = action.payload
        const vehicleIndex = state.allVehiclesOfCurrentUser.findIndex(
          (vehicle) => vehicle.uid === vehicleById.uid,
        )
        if (vehicleIndex !== -1) {
          state.allVehiclesOfCurrentUser[vehicleIndex] = vehicleById
        } else {
          state.allVehiclesOfCurrentUser.push(vehicleById)
        }
      }),
})
export const { actions: vehicleActions } = vehicleSlice
export const { reducer: vehicleReducer } = vehicleSlice
