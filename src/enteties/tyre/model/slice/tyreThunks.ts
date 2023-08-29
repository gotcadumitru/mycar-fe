import { createAsyncThunk } from '@reduxjs/toolkit'
import { kv } from '@vercel/kv'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { FetchStatus } from 'shared/api'
import { TyreActions } from '../consts/tyreConsts'
import type { TyreSizeType, VehicleTypeWithTyreSizes } from '../types/tyreTypes'

export const fetchTyreSizesFroVehicleTypeIdThunk = createAsyncThunk<
  VehicleTypeWithTyreSizes | null,
  number,
  ThunkConfig<string>
>(TyreActions.FETCH_ALL_TYRE_SIZES_FOR_VEHICLE_TYPE_ID, async (vehicleTypeId, thunkApi) => {
  const { requestId, fetchStatus } =
    thunkApi.getState().tyre.tyreSizesWithFetchStatus[vehicleTypeId]
  if (requestId !== thunkApi.requestId && FetchStatus.FAIL !== fetchStatus) return null
  const sizes: TyreSizeType[] = await kv.json.get(`tyreSize_${vehicleTypeId}`)
  return {
    sizes,
    id: vehicleTypeId,
  }
})
