import { createSlice } from '@reduxjs/toolkit'
import type { VignetteSliceState } from '../types/vignetteTypes'
import { fetchAllVignetteCountriesThunk } from './vignetteThunks'

export const initialState: VignetteSliceState = {
  vignetteCountries: [],
}

export const vignetteSlice = createSlice({
  name: 'vignette',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchAllVignetteCountriesThunk.fulfilled, (state, action) => {
      state.vignetteCountries = action.payload
    }),
})
export const { actions: vignetteActions } = vignetteSlice
export const { reducer: vignetteReducer } = vignetteSlice
