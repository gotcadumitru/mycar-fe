import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { FetchStatus } from 'shared/api'
import { VehicleModelActions } from '../consts/vehicleModelConsts'
import type { VehicleTypeAndBrandWithModel } from '../types/vehicleModelTypes'
import { FetchVehicleModelParams } from '../types/vehicleModelTypes'
import { getIdFromVehicleTypeAndModel } from '../utils/getIdFromVehicleTypeAndModel'

export const fetchVehicleModelsFroVehicleTypeIdAndBrandIdThunk = createAsyncThunk<
  VehicleTypeAndBrandWithModel | null,
  FetchVehicleModelParams,
  ThunkConfig<string>
>(
  VehicleModelActions.FETCH_ALL_VEHICLE_MODELS_FOR_VEHICLE_TYPE_ID_AND_BRAND_ID,
  async (ids, thunkApi) => {
    const { requestId, fetchStatus } =
      thunkApi.getState().vehicleModel.vehicleModelsWithFetchStatus[
        getIdFromVehicleTypeAndModel(ids)
      ]
    if (requestId !== thunkApi.requestId && FetchStatus.FAIL !== fetchStatus) return null
    const vehicleModelsJsonResponse = await import(
      `../consts/json/vehicleBrands_${ids.vehicleTypeId}_model_${ids.vehicleBrandId}.json`
    )
    return {
      models: vehicleModelsJsonResponse.default,
      ...ids,
    }
  },
)
