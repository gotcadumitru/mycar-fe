import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { VehicleTypeActions } from '../consts/vehicleTypeConsts'
import type { VehicleType } from '../types/vehicleTypeTypes'

export const fetchAllVehicleTypesThunk = createAsyncThunk<VehicleType[], void, ThunkConfig<string>>(
  VehicleTypeActions.FETCH_ALL_VEHICLE_TYPES,
  async () => {
    const vehicleTypesJsonResponse = await import('../consts/vehicleTypes.json')
    return vehicleTypesJsonResponse.default
  },
)
