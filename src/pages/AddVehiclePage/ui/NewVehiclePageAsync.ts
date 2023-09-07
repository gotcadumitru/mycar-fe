import lazyWithPreload from 'shared/lib/utils/lazyWithPreload'

export const NewVehiclePageAsync = lazyWithPreload(() => import('./NewVehiclePage'))
