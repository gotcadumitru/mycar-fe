import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { ThunkValue } from 'app/providers/StoreProvider'
import { FetchStatus } from 'shared/api'
import { vehicleDocumentDataService } from 'shared/api/firebase'
import { REQUEST_MESSAGES } from 'shared/defaults/text'
import { vehicleDocumentFormDataToCreateBody } from '../../utils/vehicleDocumentUtils'
import { VehicleDocumentActions } from '../consts/vehicleDocumentConsts'
import type {
  VehicleDocumentFormDataFullType,
  VehicleDocumentWithFiles,
} from '../types/vehicleDocumentTypes'

export const fetchAllVehiclesDocumentsByVehicleIdThunk = createAsyncThunk<
  VehicleDocumentWithFiles[],
  string[],
  ThunkConfig<string>
>(VehicleDocumentActions.FETCH_ALL_VEHICLE_DOCUMENTS_BY_VEHICLES_IDS, async (vehiclesIds) => {
  return vehicleDocumentDataService.getAllVehicleDocumentsByVehiclesIds(vehiclesIds)
})

export const createNewVehicleDocumentForVehicleId = createAsyncThunk<
  VehicleDocumentWithFiles,
  ThunkValue<{
    vehicleDocumentFormData: VehicleDocumentFormDataFullType
    userId: string
  }>
>(VehicleDocumentActions.CREATE_VEHICLE_DOCUMENT, async ({ userId, vehicleDocumentFormData }) => {
  const vehicleCreateBody = vehicleDocumentFormDataToCreateBody(vehicleDocumentFormData)
  const createdVehicleDocument: VehicleDocumentWithFiles =
    await vehicleDocumentDataService.createDocument(vehicleCreateBody, userId)
  if (!createdVehicleDocument) throw new Error(REQUEST_MESSAGES.SAVE_NEW_VEHICLE[FetchStatus.FAIL])
  return createdVehicleDocument
})

export const editVehicleDocument = createAsyncThunk<
  VehicleDocumentWithFiles,
  ThunkValue<{
    vehicleDocumentFormData: VehicleDocumentFormDataFullType
    userId: string
    vehicleDocumentId: string
  }>
>(
  VehicleDocumentActions.EDIT_VEHICLE_DOCUMENT,
  async ({ userId, vehicleDocumentId, vehicleDocumentFormData }) => {
    const vehicleCreateBody = vehicleDocumentFormDataToCreateBody(vehicleDocumentFormData)
    const changedVehicleDocument: VehicleDocumentWithFiles =
      await vehicleDocumentDataService.editDocument(
        {
          ...vehicleCreateBody,
          uid: vehicleDocumentId,
        },
        userId,
      )
    if (!changedVehicleDocument)
      throw new Error(REQUEST_MESSAGES.EDIT_VEHICLE_DOCUMENT[FetchStatus.FAIL])
    return changedVehicleDocument
  },
)
