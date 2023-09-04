import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig, ThunkValue } from 'app/providers/StoreProvider'
import { FetchStatus } from 'shared/api'
import { vehicleDataService } from 'shared/api/firebase'
import { REQUEST_MESSAGES } from 'shared/defaults/text'
import { vehicleFormDataToCreateBody } from '../../utils/vehicleUtils'
import { VehicleActions } from '../consts/vehicleConsts'
import type { Vehicle, VehicleFormDataFullType } from '../types/vehicleTypes'

export const fetchAllVehiclesByUserId = createAsyncThunk<Vehicle[], string, ThunkConfig<string>>(
  VehicleActions.FETCH_ALL_VEHICLES_BY_USER_ID,
  async (userId) => vehicleDataService.getAllByUserId(userId),
)

export const createNewVehiclesForUserId = createAsyncThunk<
  Vehicle,
  ThunkValue<{
    vehicleFormData: VehicleFormDataFullType
    userId: string
  }>
>(VehicleActions.CREATE_VEHICLE_FOR_USER_ID, async ({ userId, vehicleFormData }) => {
  const vehicleCreateBody = vehicleFormDataToCreateBody(vehicleFormData, userId)
  const createdVehicle = await vehicleDataService.createDocument(vehicleCreateBody)
  if (!createdVehicle) throw new Error(REQUEST_MESSAGES.SAVE_NEW_VEHICLE[FetchStatus.FAIL])
  return createdVehicle
})
