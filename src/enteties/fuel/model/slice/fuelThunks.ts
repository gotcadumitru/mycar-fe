import { createAsyncThunk } from '@reduxjs/toolkit'
import { kv } from '@vercel/kv'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { FuelActions } from '../consts/fuelConsts'
import type { FuelType } from '../types/fuelTypes'

export const fetchAllTypesOfFuelThunk = createAsyncThunk<FuelType[], void, ThunkConfig<string>>(
  FuelActions.FETCH_ALL_FUEL_TYPES,
  async (_, thunkApi) => {
    // const r = await kv.json.set("fuelType", "$", JSON.stringify(response.data))
    const response: FuelType[] = await kv.json.get('fuelType')
    return response
  },
)
