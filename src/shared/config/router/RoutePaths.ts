export enum AppRoutes {
  ROOT = 'root',
  NOT_FOUND = 'not_found',
  CATEGORY = 'category',
  DICTIONARY = 'dictionary',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]: '/',
  [AppRoutes.CATEGORY]: '/category',
  [AppRoutes.DICTIONARY]: '/dictionary',
  [AppRoutes.NOT_FOUND]: '*',
}
