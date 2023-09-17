import { createSlice } from '@reduxjs/toolkit'
import { arrayUnion } from 'shared/lib/utils/arrayUnion'
import type { VehicleDocumentSliceState } from '../types/vehicleDocumentTypes'
import {
  createNewVehicleDocumentForVehicleId,
  editVehicleDocument,
  fetchAllVehiclesDocumentsByVehicleIdThunk,
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
      .addCase(fetchAllVehiclesDocumentsByVehicleIdThunk.fulfilled, (state, action) => {
        state.vehiclesDocuments = arrayUnion(
          state.vehiclesDocuments,
          action.payload,
          (d1, d2) => d1.uid === d2.uid,
        )
      })
      .addCase(createNewVehicleDocumentForVehicleId.fulfilled, (state, action) => {
        state.vehiclesDocuments.push(action.payload)
      })
      .addCase(editVehicleDocument.fulfilled, (state, action) => {
        const changedVehicleDocument = action.payload
        state.vehiclesDocuments = state.vehiclesDocuments.map((vehicleDocument) =>
          vehicleDocument.uid === changedVehicleDocument.uid
            ? changedVehicleDocument
            : vehicleDocument,
        )
      }),
})
export const { actions: vehicleDocumentActions } = vehicleDocumentSlice
export const { reducer: vehicleDocumentReducer } = vehicleDocumentSlice
