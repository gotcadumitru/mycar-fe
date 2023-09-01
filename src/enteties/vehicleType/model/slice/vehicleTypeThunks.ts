import { createAsyncThunk } from '@reduxjs/toolkit'
import { kv } from '@vercel/kv'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { VehicleTypeActions } from '../consts/vehicleTypeConsts'
import type { VehicleType } from '../types/vehicleTypeTypes'

export const fetchAllVehicleTypesThunk = createAsyncThunk<VehicleType[], void, ThunkConfig<string>>(
  VehicleTypeActions.FETCH_ALL_VEHICLE_TYPES,
  async () => {
    // const r = await kv.json.set('vehicleTypes', '$', JSON.stringify(response.data))
    const response: VehicleType[] = await kv.json.get('vehicleTypes')
    return response
  },
)
