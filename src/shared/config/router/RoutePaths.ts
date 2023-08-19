export enum AppRoutes {
  ROOT = 'root',
  NOT_FOUND = 'not_found',
  PANEL = 'panel',
  GARAGE = 'garage',
  ALERTS = 'alerts',
  MENU = 'menu',
  NEW_CAR='new_car'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]: '/',
  [AppRoutes.PANEL]: '/panel',
  [AppRoutes.GARAGE]: '/garage',
  [AppRoutes.ALERTS]: '/alerts',
  [AppRoutes.MENU]: '/menu',
  [AppRoutes.NEW_CAR]: '/new-car',
  [AppRoutes.NOT_FOUND]: '*',
}
