import { useAuth } from 'app/providers/AuthContextProvider'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'
import { selectRequestStatus } from 'app/providers/StoreProvider/slices/ui'
import { fetchAllVehiclesByUserId, VehicleActions } from 'enteties/vehicle'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { FetchStatus } from 'shared/api'
import { routeConfig } from 'shared/config/router/routeConfig'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'

const AppRouter = () => {
  const { currentUser } = useAuth()
  const dispatch = useAppDispatch()
  const allUserVehiclesFetchStatus = useAppSelector(
    selectRequestStatus(VehicleActions.FETCH_ALL_VEHICLES_BY_USER_ID),
  )
  console.log(
    JSON.stringify(
      useAppSelector((state) => state),
      null,
      2,
    ),
  )
  useEffect(() => {
    if (currentUser) {
      // init app
      dispatch(fetchAllVehiclesByUserId(currentUser.uid))
    }
  }, [currentUser])

  if (allUserVehiclesFetchStatus !== FetchStatus.SUCCESS) return <div className='loading-page' />
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
