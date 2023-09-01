import { createSlice } from '@reduxjs/toolkit'
import { getFetchStatus } from 'app/providers/StoreProvider/slices/ui'
import { FetchStatus } from 'shared/api'
import type { VehicleBrandSliceState } from '../types/vehicleBrandTypes'
import { fetchVehicleBrandsFroVehicleTypeIdThunk } from './vehicleBrandThunks'

export const initialState: VehicleBrandSliceState = {
    vehicleBrands: [],
    vehicleBrandsWithFetchStatus: {},
}

export const vehicleBrandSlice = createSlice({
    name: 'vehicleBrand',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchVehicleBrandsFroVehicleTypeIdThunk.pending, (state, action) => {
                const vehicleTypeId = action.meta.arg
                if (
                    [FetchStatus.FAIL, FetchStatus.NULL].includes(
                        getFetchStatus(state.vehicleBrandsWithFetchStatus[vehicleTypeId]?.fetchStatus),
                    )
                ) {
                    state.vehicleBrandsWithFetchStatus[vehicleTypeId] = {
                        fetchStatus: FetchStatus.IN_PROGRESS,
                        requestId: action.meta.requestId,
                    }
                }
            })
            .addCase(fetchVehicleBrandsFroVehicleTypeIdThunk.fulfilled, (state, action) => {
                const vehicleBrands = action.payload
                if (!vehicleBrands) return state
                const vehicleTypeId = action.meta.arg
                state.vehicleBrands.push(vehicleBrands)
                state.vehicleBrandsWithFetchStatus[vehicleTypeId] = {
                    fetchStatus: FetchStatus.SUCCESS,
                    requestId: action.meta.requestId,
                }
            })
            .addCase(fetchVehicleBrandsFroVehicleTypeIdThunk.rejected, (state, action) => {
                const vehicleTypeId = action.meta.arg
                state.vehicleBrandsWithFetchStatus[vehicleTypeId] = {
                    fetchStatus: FetchStatus.FAIL,
                    requestId: action.meta.requestId,
                }
            }),
})
export const { actions: vehicleBrandActions } = vehicleBrandSlice
export const { reducer: vehicleBrandReducer } = vehicleBrandSlice
