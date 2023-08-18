import CategoriesPage from 'pages/CategoriesPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { Navigate, RouteProps } from 'react-router-dom'
import { AppRoutes, RoutePaths } from './RoutePaths'

export const routeConfig: Partial<Record<AppRoutes, RouteProps>> = {
  [AppRoutes.ROOT]: {
    path: RoutePaths.root,
    element: <Navigate to={RoutePaths.category} />,
  },
  [AppRoutes.CATEGORY]: {
    path: RoutePaths.category,
    element: <CategoriesPage />,
  },
  // Please do not delete
  // [AppRoutes.DICTIONARY]: {
  //   path: RoutePaths.dictionary,
  //   element: <DictionariesPage />,
  // },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
}
