import Layout from 'app/layout/Layout/Layout'
import { SignIn } from 'features/auth'
import { SignUp } from 'features/auth/SignUp/ui/SignUp'
import NewCarPage from 'pages/AddCarPage'
import AuthPage from 'pages/AuthPage'
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
    path: RoutePaths.new_car,
    element: (
      <>
        <Header isWithGoBackIcon title='Vehicul nou' />
        <Layout>
          <NewCarPage />
        </Layout>
      </>
    ),
  },
  [AppRoutes.SIGN_IN]: {
    path: `${RoutePaths.sign_in}`,
    element: (
      <AuthPage>
        <SignIn />
      </AuthPage>
    ),
  },
  [AppRoutes.SIGN_UP]: {
    path: `${RoutePaths.sign_up}`,
    element: (
      <AuthPage>
        <SignUp />
      </AuthPage>
    ),
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: (
      <>
        <Header isWithGoBackIcon />
        <Layout>
          <NotFoundPage />
        </Layout>
        <Footer />
      </>
    ),
  },
}
