import LayoutWithHeaderAndFooter from 'app/layout/LayoutWithHeaderAndFooter/LayoutWithHeaderAndFooter'
import CategoriesPage from 'pages/CategoriesPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { Navigate, RouteProps } from 'react-router-dom'
import { AppRoutes, RoutePaths } from './RoutePaths'

export const routeConfig: Partial<Record<AppRoutes, RouteProps>> = {
  [AppRoutes.ROOT]: {
    path: RoutePaths.root,
    element:  <Navigate to={RoutePaths.panel} />,
  },
  [AppRoutes.PANEL]: {
    path: RoutePaths.panel,
    element: (
      <LayoutWithHeaderAndFooter>
        <CategoriesPage />
      </LayoutWithHeaderAndFooter>
    ),
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: (
      <LayoutWithHeaderAndFooter>
        <NotFoundPage />
      </LayoutWithHeaderAndFooter>
    ),
  },
}
