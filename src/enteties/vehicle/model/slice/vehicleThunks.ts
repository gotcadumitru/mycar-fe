import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig, ThunkValue } from 'app/providers/StoreProvider'
import { fetchAllVehiclesDocumentsByVehicleIdThunk } from 'enteties/vehicleDocument'
import { FetchStatus } from 'shared/api'
import { vehicleDataService } from 'shared/api/firebase'
import { REQUEST_MESSAGES } from 'shared/defaults/text'
import { vehicleFormDataToCreateBody } from '../../utils/vehicleUtils'
import { VehicleActions } from '../consts/vehicleConsts'
import type { VehicleFormDataFullType, VehicleWithFiles } from '../types/vehicleTypes'

export const fetchAllVehiclesByUserId = createAsyncThunk<
  VehicleWithFiles[],
  string,
  ThunkConfig<string>
>(VehicleActions.FETCH_ALL_VEHICLES_BY_USER_ID, async (userId, { dispatch }) => {
  const allVehiclesOfUserId = await vehicleDataService.getAllByUserId(userId)
  const ids = allVehiclesOfUserId.map((vehicle) => vehicle.uid)
  await dispatch(fetchAllVehiclesDocumentsByVehicleIdThunk(ids))
  return allVehiclesOfUserId
})

export const createNewVehiclesForUserId = createAsyncThunk<
  VehicleWithFiles,
  ThunkValue<{
    vehicleFormData: VehicleFormDataFullType
    userId: string
  }>
>(VehicleActions.CREATE_VEHICLE_FOR_USER_ID, async ({ userId, vehicleFormData }) => {
  const vehicleCreateBody = vehicleFormDataToCreateBody(vehicleFormData, userId)
  const createdVehicle: VehicleWithFiles = await vehicleDataService.createDocument(
    vehicleCreateBody,
    userId,
  )
  if (!createdVehicle) throw new Error(REQUEST_MESSAGES.SAVE_NEW_VEHICLE[FetchStatus.FAIL])
  return createdVehicle
})

export const editVehiclesForUserId = createAsyncThunk<
  VehicleWithFiles,
  ThunkValue<{
    vehicleFormData: VehicleFormDataFullType
    vehicleId: string
    userId: string
  }>
>(VehicleActions.EDIT_VEHICLE, async ({ userId, vehicleId, vehicleFormData }) => {
  const vehicleCreateBody = vehicleFormDataToCreateBody(vehicleFormData, userId)
  const changedVehicle: VehicleWithFiles = await vehicleDataService.editDocument(
    {
      ...vehicleCreateBody,
      uid: vehicleId,
    },
    userId,
  )
  if (!changedVehicle) throw new Error(REQUEST_MESSAGES.EDIT_VEHICLE[FetchStatus.FAIL])
  return changedVehicle
})

export const softDeleteVehicleById = createAsyncThunk<
  string,
  ThunkValue<{
    vehicleId: string
    userId: string
  }>
>(VehicleActions.DELETE_VEHICLE, async ({ vehicleId, userId }) => {
  await vehicleDataService.softDeleteDocument(vehicleId, userId)
  return vehicleId
})
