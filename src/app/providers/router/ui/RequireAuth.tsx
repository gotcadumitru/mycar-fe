import { useAuth } from 'app/providers/AuthContextProvider'
import { FC, PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { FetchStatus } from 'shared/api'
import { RoutePaths } from 'shared/config/router/RoutePaths'

type RequireAuthPropsType = {
  isForAuthOnly: boolean
}
export const RequireAuth: FC<PropsWithChildren<RequireAuthPropsType>> = ({
  children,
  isForAuthOnly,
}) => {
  const { currentUser, currentUserFetchStatus } = useAuth()
  const location = useLocation()

  if (currentUserFetchStatus !== FetchStatus.SUCCESS) return <div className='loading-page' />
  if (!currentUser && isForAuthOnly)
    return <Navigate to={RoutePaths.sign_in} state={{ from: location }} replace />
  if (currentUser && !isForAuthOnly)
    return <Navigate to={RoutePaths.panel} state={{ from: location }} replace />

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}
