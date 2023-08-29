import { createAsyncThunk } from '@reduxjs/toolkit'
import { kv } from '@vercel/kv'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { FetchStatus } from 'shared/api'
import { VehicleBrandActions } from '../consts/vehicleBrandConsts'
import type { VehicleBrandsType, VehicleTypeWithBrand } from '../types/vehicleBrandTypes'

export const fetchVehicleBrandsFroVehicleTypeIdThunk = createAsyncThunk<
  VehicleTypeWithBrand | null,
  number,
  ThunkConfig<string>
>(
  VehicleBrandActions.FETCH_ALL_VEHICLE_BRANDS_FOR_VEHICLE_TYPE_ID,
  async (vehicleTypeId, thunkApi) => {
    const { requestId, fetchStatus } =
      thunkApi.getState().vehicleBrand.vehicleBrandsWithFetchStatus[vehicleTypeId]
    if (requestId !== thunkApi.requestId && FetchStatus.FAIL !== fetchStatus) return null
    const brands: VehicleBrandsType[] = await kv.json.get(`vehicleBrands_${vehicleTypeId}`)
    return {
      brands,
      id: vehicleTypeId,
    }
  },
)
