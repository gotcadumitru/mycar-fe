import { createSlice } from '@reduxjs/toolkit'
import type { FuelSliceState } from '../types/fuelTypes'
import { fetchAllTypesOfFuelThunk } from './fuelThunks'

export const initialState: FuelSliceState = {
  typesOfFuel: [],
}

export const fuelSlice = createSlice({
  name: 'fuel',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchAllTypesOfFuelThunk.fulfilled, (state, action) => {
      state.typesOfFuel = action.payload
    }),
})
export const { actions: fuelActions } = fuelSlice
export const { reducer: fuelReducer } = fuelSlice
