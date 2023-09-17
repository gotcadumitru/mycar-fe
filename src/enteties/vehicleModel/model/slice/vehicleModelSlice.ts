import { createSlice } from '@reduxjs/toolkit'
import { getFetchStatus } from 'app/providers/StoreProvider/slices/ui'
import { FetchStatus } from 'shared/api'
import type { VehicleModelSliceState } from '../types/vehicleModelTypes'
import { getIdFromVehicleTypeAndModel } from '../utils/getIdFromVehicleTypeAndModel'
import { fetchVehicleModelsFroVehicleTypeIdAndBrandIdThunk } from './vehicleModelThunks'

export const initialState: VehicleModelSliceState = {
  vehicleModels: [],
  vehicleModelsWithFetchStatus: {},
}

export const vehicleModelSlice = createSlice({
  name: 'vehicleModel',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchVehicleModelsFroVehicleTypeIdAndBrandIdThunk.pending, (state, action) => {
        const ids = action.meta.arg
        if (
          [FetchStatus.FAIL, FetchStatus.NULL].includes(
            getFetchStatus(
              state.vehicleModelsWithFetchStatus[getIdFromVehicleTypeAndModel(ids)]?.fetchStatus,
            ),
          )
        ) {
          state.vehicleModelsWithFetchStatus[getIdFromVehicleTypeAndModel(ids)] = {
            fetchStatus: FetchStatus.IN_PROGRESS,
            requestId: action.meta.requestId,
          }
        }
      })
      .addCase(fetchVehicleModelsFroVehicleTypeIdAndBrandIdThunk.fulfilled, (state, action) => {
        const vehicleModels = action.payload
        if (!vehicleModels) return state
        const ids = action.meta.arg
        state.vehicleModels.push(vehicleModels)
        state.vehicleModelsWithFetchStatus[getIdFromVehicleTypeAndModel(ids)] = {
          fetchStatus: FetchStatus.SUCCESS,
          requestId: action.meta.requestId,
        }
      })
      .addCase(fetchVehicleModelsFroVehicleTypeIdAndBrandIdThunk.rejected, (state, action) => {
        const ids = action.meta.arg
        state.vehicleModelsWithFetchStatus[getIdFromVehicleTypeAndModel(ids)] = {
          fetchStatus: FetchStatus.FAIL,
          requestId: action.meta.requestId,
        }
      }),
})
export const { actions: vehicleModelActions } = vehicleModelSlice
export const { reducer: vehicleModelReducer } = vehicleModelSlice
