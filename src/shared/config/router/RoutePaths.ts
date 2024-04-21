export enum AppRoutes {
  ROOT = 'root',
  NOT_FOUND = 'not_found',
  PANEL = 'panel',
  GARAGE = 'garage',
  VEHICLE = 'vehicle',
  ALERTS = 'alerts',
  MENU = 'menu',
  NEW_VEHICLE = 'new_vehicle',
  NEW_VEHICLE_DOCUMENT = 'new_vehicle_document',
  EDIT_VEHICLE_DOCUMENT = 'edit_vehicle_document',
  EDIT_VEHICLE = 'edit_vehicle',
  SIGN_IN = 'sign_in',
  SIGN_UP = 'sign_up',
  FORGOT_PASSWORD = 'forgot_password',
  RESET_PASSWORD = 'reset_password',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]: '/',
  [AppRoutes.PANEL]: '/panel',
  [AppRoutes.VEHICLE]: '/vehicle',
  [AppRoutes.GARAGE]: '/garage',
  [AppRoutes.ALERTS]: '/alerts',
  [AppRoutes.MENU]: '/menu',
  [AppRoutes.NEW_VEHICLE]: '/new-vehicle',
  [AppRoutes.EDIT_VEHICLE]: '/edit-vehicle',
  [AppRoutes.NEW_VEHICLE_DOCUMENT]: '/new-vehicle-document',
  [AppRoutes.EDIT_VEHICLE_DOCUMENT]: '/edit-vehicle-document',
  [AppRoutes.SIGN_IN]: '/sign-in',
  [AppRoutes.SIGN_UP]: '/sign-up',
  [AppRoutes.FORGOT_PASSWORD]: '/forgot-password',
  [AppRoutes.RESET_PASSWORD]: '/reset-password',
  [AppRoutes.NOT_FOUND]: '*',
}

export const RoutePathsFn = {
  getRoot: () => '/',
  getEditVehicle: (vehicleId: string) => `${RoutePaths.vehicle}/${vehicleId}`,
  getSignIn: () => '/sign-in',
}
