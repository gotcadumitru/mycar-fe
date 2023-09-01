import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { FetchStatus } from 'shared/api'
import { VehicleBrandActions } from '../consts/vehicleBrandConsts'
import type { VehicleTypeWithBrand } from '../types/vehicleBrandTypes'

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
    const vehicleBrandsJsonResponse = await import(
      `../consts/json/vehicleBrands_${vehicleTypeId}.json`
    )
    return {
      brands: vehicleBrandsJsonResponse.default,
      id: vehicleTypeId,
    }
  },
)
