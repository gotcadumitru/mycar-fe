import { useAuth } from 'app/providers/AuthContextProvider'
import {
  calculateAverageAge,
  calculateAverageConsumption,
  fetchAllVehiclesByUserId,
  VehicleActions,
} from 'enteties/vehicle'
import { useEffect, useMemo } from 'react'
import { FetchStatus } from 'shared/api'
import BsPlusLg from 'shared/assets/icons/BsPlusLg.svg'
import HiOutlineBellAlert from 'shared/assets/icons/HiOutlineBellAlert.svg'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { Card, CardColor } from 'shared/ui/Card'
import { CardType } from 'shared/ui/Card/card.types'
import { PanelPageSkeleton } from './PanelPageSkeleton'
import './panelPage.scss'

const PanelPage = () => {
  const dispatch = useAppDispatch()
  const allVehiclesOfCurrentUser = useAppSelector((state) => state.vehicle.allVehiclesOfCurrentUser)
  const allVehiclesOfCurrentUserFetchStatus = useAppSelector(
    (state) => state.ui.actionsWithFetchStatus[VehicleActions.FETCH_ALL_VEHICLES_BY_USER_ID],
  )
  const averageVehicleAge = useMemo(
    () => calculateAverageAge(allVehiclesOfCurrentUser),
    [allVehiclesOfCurrentUser],
  )
  const averageFuelConsumption = useMemo(
    () => calculateAverageConsumption(allVehiclesOfCurrentUser),
    [allVehiclesOfCurrentUser],
  )

  const { currentUser } = useAuth()
  useEffect(() => {
    dispatch(fetchAllVehiclesByUserId(currentUser!.uid))
  }, [])

  if (allVehiclesOfCurrentUserFetchStatus !== FetchStatus.SUCCESS) return <PanelPageSkeleton />
  return (
    <div className='panel-page'>
      <Card
        count={allVehiclesOfCurrentUser.length}
        title='Vehicule'
        cardColor={CardColor.BLUE}
        description='/5 locuri disponibile'
        type={CardType.WITH_ICON}
        Icon={BsPlusLg}
        to={RoutePaths.new_vehicle}
      />
      <Card
        count={0}
        title='Alerte'
        cardColor={CardColor.RED}
        description='Alerte in urm. 30 zile'
        type={CardType.WITH_ICON}
        Icon={HiOutlineBellAlert}
        to={RoutePaths.new_vehicle}
      />

      <Card
        count={averageVehicleAge}
        title='Vechime med.'
        cardColor={CardColor.BLUE}
        description='Ani'
        type={CardType.WITHOUT_ICON}
      />

      <Card
        count={averageFuelConsumption}
        title='Consum med.'
        cardColor={CardColor.BLUE}
        description='L/100KM'
        type={CardType.WITHOUT_ICON}
      />

      <Card
        count={0}
        title='Rulaj'
        cardColor={CardColor.BLUE}
        description='KM'
        type={CardType.WITHOUT_ICON}
      />
      <Card
        count={0}
        title='Mentenanta'
        cardColor={CardColor.BLUE}
        description='KM'
        type={CardType.WITHOUT_ICON}
      />
    </div>
  )
}
export default PanelPage
