export enum AppRoutes {
  ROOT = 'root',
  NOT_FOUND = 'not_found',
  PANEL = 'panel',
  GARAGE = 'garage',
  ALERTS = 'alerts',
  MENU = 'menu',
  NEW_CAR = 'new_car',
  SIGN_IN = 'sign_in',
  SIGN_UP = 'sign_up',
  FORGOT_PASSWORD = 'forgot_password',
  RESET_PASSWORD = 'reset_password',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]: '/',
  [AppRoutes.PANEL]: '/panel',
  [AppRoutes.GARAGE]: '/garage',
  [AppRoutes.ALERTS]: '/alerts',
  [AppRoutes.MENU]: '/menu',
  [AppRoutes.NEW_CAR]: '/new-car',
  [AppRoutes.SIGN_IN]: '/sign-in',
  [AppRoutes.SIGN_UP]: '/sign-up',
  [AppRoutes.FORGOT_PASSWORD]: '/forgot-password',
  [AppRoutes.RESET_PASSWORD]: '/reset-password',
  [AppRoutes.NOT_FOUND]: '*',
}

export const RoutePathsFroAuthenticatedUsers: string[] = [
  RoutePaths.new_car,
  RoutePaths.alerts,
  RoutePaths.garage,
  RoutePaths.root,
  RoutePaths.menu,
  RoutePaths.panel,
]
