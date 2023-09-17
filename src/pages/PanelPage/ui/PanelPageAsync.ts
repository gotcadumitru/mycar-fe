import lazyWithPreload from 'shared/lib/utils/lazyWithPreload'

export const PanelPageAsync = lazyWithPreload(() => import('./PanelPage'))
