import lazyWithPreload from 'shared/lib/utils/lazyWithPreload'

export const MenuPageAsync = lazyWithPreload(() => import('./MenuPage'))
