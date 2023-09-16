export enum VehicleDocumentActions {
  FETCH_ALL_VEHICLE_DOCUMENTS_BY_VEHICLE_ID = 'FETCH_ALL_VEHICLE_DOCUMENTS_BY_VEHICLE_ID',
  FETCH_VEHICLE_DOCUMENT_BY_ID = 'FETCH_VEHICLE_DOCUMENT_BY_ID',
  CREATE_VEHICLE_DOCUMENT = 'CREATE_VEHICLE_DOCUMENT',
  EDIT_VEHICLE_DOCUMENT = 'EDIT_VEHICLE_DOCUMENT',
}

export enum VehicleDocumentType {
  General = 'General',
  Mechanic = 'Mecanica',
  Authorisations = 'Autorizatii',
  Insurance = 'Asigurari',
}

export const VEHICLE_DOCUMENT_TYPES = Object.keys(VehicleDocumentType).map((key) => ({
  value: VehicleDocumentType[key as keyof typeof VehicleDocumentType],
  label: VehicleDocumentType[key as keyof typeof VehicleDocumentType],
}))
