import { createSlice } from '@reduxjs/toolkit'
import type { CarSliceState } from 'src/enteties/car/model/types/car.types'
import { fetchAllCars } from './carThunks'

export const initialState: CarSliceState = {
  allCars: [],
  selectedCar: null,
}

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    resetSelectedCarData: (state) => {
      state.selectedCar = null
    },
  },
  extraReducers: (builder) =>
    builder.addCase(fetchAllCars.fulfilled, (state, action) => {
      state.allCars = action.payload
    }),
})
export const { actions: carActions } = carSlice
export const { reducer: carReducer } = carSlice
