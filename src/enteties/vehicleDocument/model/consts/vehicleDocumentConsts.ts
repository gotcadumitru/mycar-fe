export enum VehicleDocumentActions {
  FETCH_ALL_VEHICLE_DOCUMENTS = 'FETCH_ALL_VEHICLE_DOCUMENTS',
}

export enum VehicleDocumentType {
  General = 'General',
  Mechanic = 'Mecanica',
  Authorisations = 'Autorizatii',
  Insurance = 'Asigurari',
}

export const VEHICLE_DOCUMENT_TYPES = [
  { id: VehicleDocumentType.General, name: VehicleDocumentType.General },
  { id: VehicleDocumentType.Mechanic, name: VehicleDocumentType.Mechanic },
  { id: VehicleDocumentType.Authorisations, name: VehicleDocumentType.Authorisations },
  { id: VehicleDocumentType.Insurance, name: VehicleDocumentType.Insurance },
]
