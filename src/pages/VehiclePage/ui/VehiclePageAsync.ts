import lazyWithPreload from 'shared/lib/utils/lazyWithPreload'

export const VehiclePageAsync = lazyWithPreload(() => import('./VehiclePage'))
