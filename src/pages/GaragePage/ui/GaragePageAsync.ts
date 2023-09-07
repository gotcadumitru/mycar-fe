import lazyWithPreload from 'shared/lib/utils/lazyWithPreload'

export const GaragePageAsync = lazyWithPreload(() => import('./GaragePage'))
