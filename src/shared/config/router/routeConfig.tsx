import Layout from 'app/layout/Layout/Layout'
import { SignIn } from 'features/auth'
import { ForgotPassword } from 'features/auth/ForgotPassword/ui/ForgotPassword'
import { ResetPassword } from 'features/auth/ResetPassword/ui/ResetPassword'
import { SignUp } from 'features/auth/SignUp/ui/SignUp'
import NewVehiclePage, { NewVehiclePageSkeleton } from 'pages/AddVehiclePage'
import AuthPage from 'pages/AuthPage'
import GaragePage, { GaragePageSkeleton } from 'pages/GaragePage'
import MenuPage from 'pages/MenuPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import PanelPage, { PanelPageSkeleton } from 'pages/PanelPage'
import VehiclePage from 'pages/VehiclePage'
import { Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import type { AppRoutesProps } from 'shared/types/router'
import Footer from 'widgets/Footer'
import Header from 'widgets/Header'
import { AppRoutes, RoutePaths } from './RoutePaths'

export const routeConfig: Partial<Record<AppRoutes, AppRoutesProps>> = {
  [AppRoutes.ROOT]: {
    isForAuthOnly: true,
    path: RoutePaths.root,
    element: <Navigate to={RoutePaths.panel} />,
  },
  [AppRoutes.PANEL]: {
    isForAuthOnly: true,
    path: RoutePaths.panel,
    element: (
      <>
        <Header />
        <Layout>
          <Suspense fallback={<PanelPageSkeleton />}>
            <PanelPage />
          </Suspense>
        </Layout>
        <Footer />
      </>
    ),
  },
  [AppRoutes.GARAGE]: {
    isForAuthOnly: true,
    path: RoutePaths.garage,
    element: (
      <>
        <Layout>
          <Suspense fallback={<GaragePageSkeleton />}>
            <GaragePage />
          </Suspense>
        </Layout>
        <Footer />
      </>
    ),
  },
  [AppRoutes.MENU]: {
    isForAuthOnly: true,
    path: RoutePaths.menu,
    element: (
      <>
        <Header />
        <Layout>
          <Suspense fallback='menu page skeleton'>
            <MenuPage />
          </Suspense>
        </Layout>
        <Footer />
      </>
    ),
  },
  [AppRoutes.ALERTS]: {
    isForAuthOnly: true,
    path: RoutePaths.alerts,
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
  [AppRoutes.NEW_VEHICLE]: {
    isForAuthOnly: true,
    path: RoutePaths.new_vehicle,
    element: (
      <>
        <Header isWithGoBackIcon title='Vehicul nou' />
        <Layout>
          <Suspense fallback={<NewVehiclePageSkeleton />}>
            <NewVehiclePage />
          </Suspense>
        </Layout>
      </>
    ),
  },
  [AppRoutes.VEHICLE]: {
    isForAuthOnly: true,
    path: `${RoutePaths.vehicle}/:id`,
    element: (
      <>
        <Header isWithGoBackIcon />
        <Layout>
          <Suspense fallback='loading'>
            <VehiclePage />
          </Suspense>
        </Layout>
      </>
    ),
  },
  [AppRoutes.SIGN_IN]: {
    isForAuthOnly: false,
    path: `${RoutePaths.sign_in}`,
    element: (
      <AuthPage>
        <SignIn />
      </AuthPage>
    ),
  },
  [AppRoutes.SIGN_UP]: {
    isForAuthOnly: false,
    path: `${RoutePaths.sign_up}`,
    element: (
      <AuthPage>
        <SignUp />
      </AuthPage>
    ),
  },
  [AppRoutes.FORGOT_PASSWORD]: {
    isForAuthOnly: false,
    path: `${RoutePaths.forgot_password}`,
    element: (
      <AuthPage>
        <ForgotPassword />
      </AuthPage>
    ),
  },
  [AppRoutes.RESET_PASSWORD]: {
    isForAuthOnly: false,
    path: `${RoutePaths.reset_password}`,
    element: (
      <AuthPage>
        <ResetPassword />
      </AuthPage>
    ),
  },
  [AppRoutes.NOT_FOUND]: {
    isForAuthOnly: false,
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
