import { useAuth } from 'app/providers/AuthContextProvider'
import { selectRequestStatus } from 'app/providers/StoreProvider/slices/ui'
import { VehicleActions } from 'enteties/vehicle'
import { FC, PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { FetchStatus } from 'shared/api'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { useAppSelector } from 'shared/lib/hooks/reduxHooks'

type RequireAuthPropsType = {
  isForAuthOnly: boolean
}
export const RequireAuth: FC<PropsWithChildren<RequireAuthPropsType>> = ({
  children,
  isForAuthOnly,
}) => {
  const { currentUser, currentUserFetchStatus } = useAuth()
  const allUserVehiclesFetchStatus = useAppSelector(
    selectRequestStatus(VehicleActions.FETCH_ALL_VEHICLES_BY_USER_ID),
  )
  const location = useLocation()
  console.log(location)
  if (
    currentUserFetchStatus !== FetchStatus.SUCCESS ||
    (currentUser && allUserVehiclesFetchStatus !== FetchStatus.SUCCESS)
  )
    return <div className='loading-page' />
  if (!currentUser && isForAuthOnly)
    return <Navigate to={RoutePaths.sign_in} state={{ from: location }} replace />
  if (currentUser && !isForAuthOnly)
    return <Navigate to={RoutePaths.panel} state={{ from: location }} replace />

  return <>{children}</>
}
