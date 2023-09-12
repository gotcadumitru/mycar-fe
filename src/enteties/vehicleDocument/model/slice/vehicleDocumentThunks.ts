import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { Timestamp } from 'firebase/firestore'
import createArrayFromTo from 'shared/lib/utils/createArrayFromTo'
import { VehicleDocumentActions, VehicleDocumentType } from '../consts/vehicleDocumentConsts'
import { VehicleDocumentWithFiles } from '../types/vehicleDocumentTypes'

const docs: VehicleDocumentWithFiles[] = createArrayFromTo(0, 100).map((n) => ({
  uid: `1${n}`,
  vehicleId: 'evFqd5cAUCA2r35CLRRz',
  name: `RCA${n}`,
  creationDate: '',
  expirationDate: '',
  notes: `string${n}`,
  type: n > 90 ? VehicleDocumentType.Mechanic : VehicleDocumentType.General,
  files: [],
  createdAt: {
    seconds: n,
    nanoseconds: n,
  } as Timestamp,
  createdBy: 'd',
  modifiedAt: {
    seconds: n,
    nanoseconds: n,
  } as Timestamp,
  modifiedBy: 'd',
  deletedAt: null,
  deletedBy: null,
}))

export const fetchAllVehicleDocumentsThunk = createAsyncThunk<
  VehicleDocumentWithFiles[],
  string,
  ThunkConfig<string>
>(
  VehicleDocumentActions.FETCH_ALL_VEHICLE_DOCUMENTS,
  async (vehicleId) => docs,
  // vehicleDocumentDataService.getAllVehicleDocumentsByVehicleId(vehicleId),
)
