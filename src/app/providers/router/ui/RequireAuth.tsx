import { useAuth } from 'app/providers/AuthContextProvider'
import { selectRequestStatus } from 'app/providers/StoreProvider/slices/ui'
import { VehicleActions } from 'enteties/vehicle'
import { PanelPageSkeleton } from 'pages/PanelPage'
import { FC, PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { FetchStatus } from 'shared/api'
import {RoutePaths, RoutePathsFn} from 'shared/config/router/RoutePaths'
import { useAppSelector } from 'shared/lib/hooks/reduxHooks'

type RequireAuthPropsType = {
  isForAuthOnly: boolean
  isWithoutRedirect?: boolean
}
export const RequireAuth: FC<PropsWithChildren<RequireAuthPropsType>> = ({
  children,
  isForAuthOnly,
  isWithoutRedirect,
}) => {
  const { currentUser, currentUserFetchStatus } = useAuth()
  const allUserVehiclesFetchStatus = useAppSelector(
    selectRequestStatus(VehicleActions.FETCH_ALL_VEHICLES_BY_USER_ID),
  )

  const location = useLocation()
  if (
    currentUserFetchStatus !== FetchStatus.SUCCESS ||
    (currentUser && allUserVehiclesFetchStatus !== FetchStatus.SUCCESS)
  )
    return <PanelPageSkeleton />
  if (!currentUser && isForAuthOnly && !isWithoutRedirect)
    return <Navigate to={RoutePaths.sign_in} state={{ from: location }} replace />
  if (currentUser && !isForAuthOnly && !isWithoutRedirect)
    return <Navigate to={RoutePathsFn.getPanel()} state={{ from: location }} replace />

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}
