import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { FuelActions } from '../consts/fuelConsts'
import type { FuelType } from '../types/fuelTypes'

export const fetchAllTypesOfFuelThunk = createAsyncThunk<FuelType[], void, ThunkConfig<string>>(
  FuelActions.FETCH_ALL_FUEL_TYPES,
  async () => {
    const fuelTypeJsonResponse = await import('../consts/fuelType.json')
    return fuelTypeJsonResponse.default
  },
)
