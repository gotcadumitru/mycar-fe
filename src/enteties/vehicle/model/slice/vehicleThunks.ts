import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { FetchStatus } from 'shared/api'
import { VehicleActions } from '../consts/vehicleConsts'
import type { VehicleType, VehicleWithDetailsType } from '../types/vehicleTypes'

export const fetchAllVehicleTypesThunk = createAsyncThunk<VehicleType[], void, ThunkConfig<string>>(
  VehicleActions.FETCH_ALL_VEHICLE_TYPES,
  async (_, thunkApi) => {
    const response = await thunkApi.extra.carAPI.get<VehicleType[]>('/vehicleTypes')
    return response.data
  },
)

export const fetchVehicleWithDetailsThunk = createAsyncThunk<
  VehicleWithDetailsType | null,
  number,
  ThunkConfig<string>
>(VehicleActions.FETCH_VEHICLE_WITH_DETAILS, async (vehicleTypeId, thunkApi) => {
  const fetchStatus = thunkApi.getState().vehicle.vehiclesWithDetailsFetchStatus[vehicleTypeId]
  if (fetchStatus === FetchStatus.SUCCESS) return null
  const response = await thunkApi.extra.carAPI.get<VehicleWithDetailsType>(
    `/vehicles/${vehicleTypeId}`,
  )
  return response.data
})
