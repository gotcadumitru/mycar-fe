import Layout from 'app/layout/Layout/Layout'
import NewCarPage from 'pages/AddCarPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import PanelPage from 'pages/PanelPage'
import { Navigate, RouteProps } from 'react-router-dom'
import Footer from 'widgets/Footer'
import Header from 'widgets/Header'
import { AppRoutes, RoutePaths } from './RoutePaths'

export const routeConfig: Partial<Record<AppRoutes, RouteProps>> = {
  [AppRoutes.ROOT]: {
    path: RoutePaths.root,
    element: <Navigate to={RoutePaths.panel} />,
  },
  [AppRoutes.PANEL]: {
    path: RoutePaths.panel,
    element: (
      <>
        <Header />
        <Layout>
          <PanelPage />
        </Layout>
        <Footer />
      </>
    ),
  },
  [AppRoutes.NEW_CAR]: {
    path: `${RoutePaths.new_car}/*`,
    element: (
      <>
        <Header isWithGoBackIcon title="Vehicul nou" />
        <Layout>
          <NewCarPage />
        </Layout>
      </>
    ),
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: (
      <>
        <Header isWithGoBackIcon/>
        <Layout>
          <NotFoundPage />
        </Layout>
        <Footer />
      </>
    ),
  },
}
