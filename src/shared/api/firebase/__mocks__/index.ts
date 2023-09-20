/* eslint-disable @typescript-eslint/ban-ts-comment,import/extensions,import/no-unresolved,no-underscore-dangle */

export const firebaseAuth = null
export const firebaseApp = null
export const firestoreDb = null
export const firebaseAnalytics = null
export const firebaseStorage = null
export const firebaseAppCheck = null
export const vehicleDataService = {
  // @ts-ignore
  getAllByUserId: () => window.__mocks__.mockVehicles,
}
export const vehicleDocumentDataService = {
  // @ts-ignore
  getAllVehicleDocumentsByVehiclesIds: () => window.__mocks__.allVehicleDocumentsByVehiclesIds,
}
// @ts-ignore
export { FirebaseErrorCode } from './firebaseConsts'
// @ts-ignore
export type { CollectionBaseType } from './types/firebaseTypes'
