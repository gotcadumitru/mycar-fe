import { createSlice } from '@reduxjs/toolkit'
import type { VehicleDocumentSliceState } from '../types/vehicleDocumentTypes'
import { fetchAllVehicleDocumentsThunk } from './vehicleDocumentThunks'

export const initialState: VehicleDocumentSliceState = {
  vehiclesDocuments: [],
}

export const vehicleDocumentSlice = createSlice({
  name: 'vehicleDocument',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchAllVehicleDocumentsThunk.fulfilled, (state, action) => {
      state.vehiclesDocuments = action.payload
    }),
})
export const { actions: vehicleDocumentActions } = vehicleDocumentSlice
export const { reducer: vehicleDocumentReducer } = vehicleDocumentSlice
