import { mockVehicleDocuments } from 'shared/defaults/tests/mockVehicleDocuments'
import { mockVehicles } from 'shared/defaults/tests/mockVehicles'

export const firebaseAuth = null
export const firebaseApp = null
export const firestoreDb = null
export const firebaseAnalytics = null
export const firebaseStorage = null
export const firebaseAppCheck = null
export const vehicleDataService = {
  getAllByUserId: () => mockVehicles,
}
export const vehicleDocumentDataService = {
  getAllVehicleDocumentsByVehiclesIds: () => window.__mocks__.allVehicleDocumentsByVehiclesIds,
}
// @ts-ignore
export { FirebaseErrorCode } from './firebaseConsts'
// @ts-ignore
export type { CollectionBaseType } from './types/firebaseTypes'
