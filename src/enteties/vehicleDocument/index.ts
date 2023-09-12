export type {
  VehicleDocumentSliceState,
  VehicleDocument,
  VehicleDocumentFormDataFullType,
  VehicleDocumentCreateBody,
  VehicleDocumentWithFiles,
  VehicleDocumentFormDataType,
} from './model/types/vehicleDocumentTypes'
export {
  vehicleDocumentActions,
  vehicleDocumentSlice,
  vehicleDocumentReducer,
} from './model/slice/vehicleDocumentSlice'
export { fetchAllVehicleDocumentsThunk } from 'enteties/vehicleDocument/model/slice/vehicleDocumentThunks'

export {
  VehicleDocumentActions,
  VehicleDocumentType,
  VEHICLE_DOCUMENT_TYPES,
} from './model/consts/vehicleDocumentConsts'
