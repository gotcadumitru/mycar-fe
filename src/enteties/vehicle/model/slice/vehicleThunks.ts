import { createAsyncThunk } from '@reduxjs/toolkit'
import { kv } from '@vercel/kv'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { VehicleActions } from '../consts/vehicleConsts'
import type { VehicleType } from '../types/vehicleTypes'

export const fetchAllVehicleTypesThunk = createAsyncThunk<VehicleType[], void, ThunkConfig<string>>(
  VehicleActions.FETCH_ALL_VEHICLE_TYPES,
  async () => {
    // const r = await kv.json.set('vehicleTypes', '$', JSON.stringify(response.data))
    const response: VehicleType[] = await kv.json.get('vehicleTypes')
    return response
  },
)
