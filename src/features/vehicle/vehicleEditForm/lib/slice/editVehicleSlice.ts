import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getVehicleFormValues, VehicleFormDataFullType } from 'enteties/vehicle'
import type { EditVehicleSliceState } from '../../model/types/editVehicleTypes'

export const initialState: EditVehicleSliceState = {
  formFields: getVehicleFormValues({}),
}

export const editVehicleSlice = createSlice({
  name: 'editVehicle',
  initialState,
  reducers: {
    changeVehicleDataAC(state, action: PayloadAction<VehicleFormDataFullType>) {
      state.formFields = action.payload
    },
    resetVehicleDataAC(state) {
      state.formFields = getVehicleFormValues({})
    },
  },
})

export const { actions: editVehicleActions } = editVehicleSlice
export const { reducer: editVehicleReducer } = editVehicleSlice
