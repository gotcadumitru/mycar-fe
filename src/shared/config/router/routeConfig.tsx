import Layout from 'app/layout/Layout/Layout'
import { ForgotPassword, ResetPassword, SignIn, SignUp } from 'features/auth'
import AddVehicleDocumentPageAsync, {
  AddVehicleDocumentPageSkeleton,
} from 'pages/AddVehicleDocumentPage'
import NewVehiclePage, { NewVehiclePageSkeleton } from 'pages/AddVehiclePage'
import AuthPage from 'pages/AuthPage'
import EditVehicleDocumentPageAsync, {
  EditVehicleDocumentPageSkeleton,
} from 'pages/EditVehicleDocumentPage'
import { EditVehiclePageSkeleton } from 'pages/EditVehiclePage'
import EditVehiclePage from 'pages/EditVehiclePage/ui/EditVehiclePage'
import GaragePage, { GaragePageSkeleton } from 'pages/GaragePage'
import MenuPage from 'pages/MenuPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import PanelPage, { PanelPageSkeleton } from 'pages/PanelPage'
import VehiclePage, { VehiclePageSkeleton } from 'pages/VehiclePage'
import { Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import type { AppRoutesProps } from 'shared/types/router'
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
      </>
    ),
  },
  [AppRoutes.GARAGE]: {
    isForAuthOnly: true,
    path: RoutePaths.garage,
    element: (
      <>
        <Header isWithGoBackIcon />

        <Layout>
          <Suspense fallback={<GaragePageSkeleton />}>
            <GaragePage />
          </Suspense>
        </Layout>
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
          <Suspense fallback={<VehiclePageSkeleton />}>
            <VehiclePage />
          </Suspense>
        </Layout>
      </>
    ),
  },
  [AppRoutes.EDIT_VEHICLE]: {
    isForAuthOnly: true,
    path: `${RoutePaths.edit_vehicle}/:id`,
    element: (
      <>
        <Header isWithGoBackIcon />
        <Layout>
          <Suspense fallback={<EditVehiclePageSkeleton />}>
            <EditVehiclePage />
          </Suspense>
        </Layout>
      </>
    ),
  },
  [AppRoutes.NEW_VEHICLE_DOCUMENT]: {
    isForAuthOnly: true,
    path: `${RoutePaths.new_vehicle_document}/:vehicleId`,
    element: (
      <>
        <Header isWithGoBackIcon title='Document nou' />
        <Layout>
          <Suspense fallback={<AddVehicleDocumentPageSkeleton />}>
            <AddVehicleDocumentPageAsync />
          </Suspense>
        </Layout>
      </>
    ),
  },
  [AppRoutes.EDIT_VEHICLE_DOCUMENT]: {
    isForAuthOnly: true,
    path: `${RoutePaths.edit_vehicle_document}/:documentId`,
    element: (
      <>
        <Header isWithGoBackIcon />
        <Layout>
          <Suspense fallback={<EditVehicleDocumentPageSkeleton />}>
            <EditVehicleDocumentPageAsync />
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
    isWithoutRedirect: true,
    path: RoutePaths.not_found,
    element: (
      <>
        <Header isWithGoBackIcon />
        <Layout>
          <NotFoundPage />
        </Layout>
      </>
    ),
  },
}
