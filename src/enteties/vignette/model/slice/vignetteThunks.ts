import { createAsyncThunk } from '@reduxjs/toolkit'
import { kv } from '@vercel/kv'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { VignetteActions } from '../consts/vignetteConsts'
import type { VignetteCountriesType } from '../types/vignetteTypes'

export const fetchAllVignetteCountriesThunk = createAsyncThunk<
  VignetteCountriesType[],
  void,
  ThunkConfig<string>
>(VignetteActions.FETCH_ALL_VIGNETTE_COUNTRIES, async (_, thunkApi) => {
  // const r = await kv.json.set('vignetteCountries', '$', JSON.stringify(response.data))
  const response: VignetteCountriesType[] = await kv.json.get('vignetteCountries')
  return response
})
