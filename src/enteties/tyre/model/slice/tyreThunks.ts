import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { FetchStatus } from 'shared/api'
import { TyreActions } from '../consts/tyreConsts'
import type { VehicleTypeWithTyreSizes } from '../types/tyreTypes'

export const fetchTyreSizesFroVehicleTypeIdThunk = createAsyncThunk<
  VehicleTypeWithTyreSizes | null,
  number,
  ThunkConfig<string>
>(TyreActions.FETCH_ALL_TYRE_SIZES_FOR_VEHICLE_TYPE_ID, async (vehicleTypeId, thunkApi) => {
  const { requestId, fetchStatus } =
    thunkApi.getState().tyre.tyreSizesWithFetchStatus[vehicleTypeId]
  if (requestId !== thunkApi.requestId && FetchStatus.FAIL !== fetchStatus) return null
  const vehicleTypesJsonResponse = await import(`../consts/json/tyreSize_${vehicleTypeId}.json`)
  return {
    sizes: vehicleTypesJsonResponse.default,
    id: vehicleTypeId,
  }
})
