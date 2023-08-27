import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { VignetteActions } from '../consts/vignetteConsts'
import type { VignetteCountriesType } from '../types/vignetteTypes'

export const fetchAllVignetteCountriesThunk = createAsyncThunk<
  VignetteCountriesType[],
  void,
  ThunkConfig<string>
>(VignetteActions.FETCH_ALL_VIGNETTE_COUNTRIES, async (_, thunkApi) => {
  const response = await thunkApi.extra.carAPI.get<VignetteCountriesType[]>('/vignetteCountries')
  return response.data
})
