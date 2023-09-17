import { useAuth } from 'app/providers/AuthContextProvider'
import { FC, PropsWithChildren, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { FetchStatus } from 'shared/api'
import { RoutePaths } from 'shared/config/router/RoutePaths'

type RequireAuthPropsType = {
  isForAuthOnly: boolean
  skeleton?: ReactNode
}
export const RequireAuth: FC<PropsWithChildren<RequireAuthPropsType>> = ({
  children,
  skeleton,
  isForAuthOnly,
}) => {
  const { currentUser, currentUserFetchStatus } = useAuth()
  const location = useLocation()

  if (currentUserFetchStatus !== FetchStatus.SUCCESS)
    return skeleton ? <>{skeleton}</> : <div className='loading-page' />
  if (!currentUser && isForAuthOnly)
    return <Navigate to={RoutePaths.sign_in} state={{ from: location }} replace />
  if (currentUser && !isForAuthOnly)
    return <Navigate to={RoutePaths.panel} state={{ from: location }} replace />

  return <>{children}</>
}
