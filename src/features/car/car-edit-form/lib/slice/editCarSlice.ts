import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCarFormValues } from 'enteties/car'
import type { EditCarSliceState } from '../../model/types/editCar.types'

export const initialState: EditCarSliceState = {
  newCarFormData: getCarFormValues({}),
}

export const editCarSlice = createSlice({
  name: 'editCar',
  initialState,
  reducers: {
    changeCarDataAC(state, action: PayloadAction<ReturnType<typeof getCarFormValues>>) {
      state.newCarFormData = action.payload
    },
    resetCarDataAC(state) {
      state.newCarFormData = getCarFormValues({})
    },
  },
})

export const { actions: editCarActions } = editCarSlice
export const { reducer: editCarReducer } = editCarSlice
