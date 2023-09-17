import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  getVehicleDocumentFormValues,
  VehicleDocumentFormDataFullType,
} from 'enteties/vehicleDocument'
import type { VehicleDocumentEditSliceState } from '../../model/types/vehicleDocumentEditTypes'

export const initialState: VehicleDocumentEditSliceState = {
  formFields: getVehicleDocumentFormValues({}),
}

export const vehicleDocumentEditSlice = createSlice({
  name: 'vehicleDocumentEdit',
  initialState,
  reducers: {
    changeVehicleDocumentDataAC(state, action: PayloadAction<VehicleDocumentFormDataFullType>) {
      state.formFields = action.payload
    },
    resetVehicleDocumentDataAC(state) {
      state.formFields = getVehicleDocumentFormValues({})
    },
  },
})

export const { actions: vehicleDocumentEditActions } = vehicleDocumentEditSlice
export const { reducer: vehicleDocumentEditReducer } = vehicleDocumentEditSlice
