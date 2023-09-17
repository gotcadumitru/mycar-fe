import { createSlice } from '@reduxjs/toolkit'
import { getFetchStatus } from 'app/providers/StoreProvider/slices/ui'
import { FetchStatus } from 'shared/api'
import type { TyreSliceState } from '../types/tyreTypes'
import { fetchTyreSizesFroVehicleTypeIdThunk } from './tyreThunks'

export const initialState: TyreSliceState = {
  tyreSizes: [],
  tyreSizesWithFetchStatus: {},
}

export const tyreSlice = createSlice({
  name: 'tyre',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTyreSizesFroVehicleTypeIdThunk.pending, (state, action) => {
        const vehicleTypeId = action.meta.arg
        if (
          [FetchStatus.FAIL, FetchStatus.NULL].includes(
            getFetchStatus(state.tyreSizesWithFetchStatus[vehicleTypeId]?.fetchStatus),
          )
        ) {
          state.tyreSizesWithFetchStatus[vehicleTypeId] = {
            fetchStatus: FetchStatus.IN_PROGRESS,
            requestId: action.meta.requestId,
          }
        }
      })
      .addCase(fetchTyreSizesFroVehicleTypeIdThunk.fulfilled, (state, action) => {
        const tyreSizes = action.payload
        if (!tyreSizes) return state
        const vehicleTypeId = action.meta.arg
        state.tyreSizes.push(tyreSizes)
        state.tyreSizesWithFetchStatus[vehicleTypeId] = {
          fetchStatus: FetchStatus.SUCCESS,
          requestId: action.meta.requestId,
        }
      })
      .addCase(fetchTyreSizesFroVehicleTypeIdThunk.rejected, (state, action) => {
        const vehicleTypeId = action.meta.arg
        state.tyreSizesWithFetchStatus[vehicleTypeId] = {
          fetchStatus: FetchStatus.FAIL,
          requestId: action.meta.requestId,
        }
      }),
})
export const { actions: tyreActions } = tyreSlice
export const { reducer: tyreReducer } = tyreSlice
