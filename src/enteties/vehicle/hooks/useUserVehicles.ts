import { useAuth } from 'app/providers/AuthContextProvider'
import { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { VehicleActions } from '../model/consts/vehicleConsts'
import { fetchAllVehiclesByUserId } from '../model/slice/vehicleThunks'

export const useUserVehicles = () => {
  const dispatch = useAppDispatch()
  const { currentUser } = useAuth()
  const allVehiclesOfCurrentUser = useAppSelector((state) => state.vehicle.allVehiclesOfCurrentUser)
  const allVehiclesOfCurrentUserFetchStatus = useAppSelector(
    (state) => state.ui.actionsWithFetchStatus[VehicleActions.FETCH_ALL_VEHICLES_BY_USER_ID],
  )
  const data = useMemo(
    () => ({
      allVehiclesOfCurrentUser,
      allVehiclesOfCurrentUserFetchStatus,
    }),
    [allVehiclesOfCurrentUser, allVehiclesOfCurrentUserFetchStatus],
  )

  useEffect(() => {
    dispatch(fetchAllVehiclesByUserId(currentUser!.uid))
  }, [])

  return data
}
