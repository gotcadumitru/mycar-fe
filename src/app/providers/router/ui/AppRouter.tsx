import { useAuth } from 'app/providers/AuthContextProvider'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'
import { fetchAllVehiclesByUserId } from 'enteties/vehicle'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/router/routeConfig'
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks'

const AppRouter = () => {
  const { currentUser, currentUserFetchStatus } = useAuth()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (currentUser) {
      // init app
      dispatch(fetchAllVehiclesByUserId(currentUser.uid))
    }
  }, [currentUser])
  return (
    <Routes>
      {Object.values(routeConfig).map(({ skeleton, ...route }) => (
        <Route
          key={route.path}
          path={route.path}
          element={<RequireAuth isForAuthOnly={route.isForAuthOnly}>{route.element}</RequireAuth>}
        />
      ))}
    </Routes>
  )
}

export default AppRouter
