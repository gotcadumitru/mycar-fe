import { createDraftSafeSelector } from '@reduxjs/toolkit'
import type { StateSchema } from 'app/providers/StoreProvider'

export const selectVehicleDocumentsByVehicleId = createDraftSafeSelector(
  [
    (store: StateSchema) => store.vehicleDocument.vehiclesDocuments,
    (state: StateSchema, vehicleId: string) => vehicleId,
  ],
  (vehicleDocuments, vehicleId) => {
    console.log(vehicleDocuments)
    return vehicleDocuments.filter((vehicleDocument) => vehicleDocument.vehicleId === vehicleId)
  },
)

export const selectVehicleDocumentsByDocumentId = createDraftSafeSelector(
  [
    (store: StateSchema) => store.vehicleDocument.vehiclesDocuments,
    (state: StateSchema, vehicleDocumentId: string) => vehicleDocumentId,
  ],
  (vehicleDocuments, vehicleDocumentId) =>
    vehicleDocuments.find((vehicleDocument) => vehicleDocument.vehicleId === vehicleDocumentId),
)
