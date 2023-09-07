import { createSlice } from '@reduxjs/toolkit'
import type { VehicleSliceState } from '../types/vehicleTypes'
import {
  createNewVehiclesForUserId,
  fetchAllVehiclesByUserId,
  fetchVehicleById,
} from './vehicleThunks'

export const initialState: VehicleSliceState = {
  allVehiclesOfCurrentUser: [],
  selectedVehicle: null,
}

export const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {
    resetSelectedCarData: (state) => {
      state.selectedVehicle = null
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllVehiclesByUserId.fulfilled, (state, action) => {
        state.allVehiclesOfCurrentUser = action.payload
      })
      .addCase(createNewVehiclesForUserId.fulfilled, (state, action) => {
        state.allVehiclesOfCurrentUser.push(action.payload)
      })
      .addCase(fetchVehicleById.fulfilled, (state, action) => {
        const vehicleById = action.payload
        const vehicleIndex = state.allVehiclesOfCurrentUser.findIndex(
          (vehicle) => vehicle.uid === vehicleById.uid,
        )
        state.selectedVehicle = vehicleById
        if (vehicleIndex !== -1) {
          state.allVehiclesOfCurrentUser[vehicleIndex] = vehicleById
        } else {
          state.allVehiclesOfCurrentUser.push(action.payload)
        }
      }),
})
export const { actions: vehicleActions } = vehicleSlice
export const { reducer: vehicleReducer } = vehicleSlice
