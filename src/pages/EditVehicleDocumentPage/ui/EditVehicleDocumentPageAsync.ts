import lazyWithPreload from 'shared/lib/utils/lazyWithPreload'

export const EditVehicleDocumentPageAsync = lazyWithPreload(
  () => import('./EditVehicleDocumentPage'),
)
