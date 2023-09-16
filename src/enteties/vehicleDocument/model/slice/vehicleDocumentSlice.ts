import { createSlice } from '@reduxjs/toolkit'
import type { VehicleDocumentSliceState } from '../types/vehicleDocumentTypes'
import {
  createNewVehicleDocumentForVehicleId,
  fetchAllVehicleDocumentsByVehicleIdThunk,
  fetchVehicleDocumentById,
} from './vehicleDocumentThunks'

export const initialState: VehicleDocumentSliceState = {
  vehiclesDocuments: [],
}

export const vehicleDocumentSlice = createSlice({
  name: 'vehicleDocument',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllVehicleDocumentsByVehicleIdThunk.fulfilled, (state, action) => {
        state.vehiclesDocuments = action.payload
      })
      .addCase(createNewVehicleDocumentForVehicleId.fulfilled, (state, action) => {
        state.vehiclesDocuments.push(action.payload)
      })
      .addCase(fetchVehicleDocumentById.fulfilled, (state, action) => {
        const vehicleDocumentById = action.payload
        const vehicleDocumentIndex = state.vehiclesDocuments.findIndex(
          (vehicleDocument) => vehicleDocument.uid === vehicleDocumentById.uid,
        )
        if (vehicleDocumentIndex !== -1) {
          state.vehiclesDocuments[vehicleDocumentIndex] = vehicleDocumentById
        } else {
          state.vehiclesDocuments.push(vehicleDocumentById)
        }
      }),
})
export const { actions: vehicleDocumentActions } = vehicleDocumentSlice
export const { reducer: vehicleDocumentReducer } = vehicleDocumentSlice
