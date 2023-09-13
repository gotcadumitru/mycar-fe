export enum VehicleDocumentActions {
  FETCH_ALL_VEHICLE_DOCUMENTS = 'FETCH_ALL_VEHICLE_DOCUMENTS',
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
