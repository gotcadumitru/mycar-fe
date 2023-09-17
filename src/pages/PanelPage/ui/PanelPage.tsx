import { calculateAverageAge, calculateAverageConsumption } from 'enteties/vehicle'
import { useMemo } from 'react'
import BsPlusLg from 'shared/assets/icons/BsPlusLg.svg'
import HiOutlineBellAlert from 'shared/assets/icons/HiOutlineBellAlert.svg'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { Card, CardColor } from 'shared/ui/Card'
import { CardType } from 'shared/ui/Card/card.types'
import './panelPage.scss'

const PanelPage = () => {
  const allVehiclesOfCurrentUser = useAppSelector((state) => state.vehicle.allVehiclesOfCurrentUser)

  const averageVehicleAge = useMemo(
    () => calculateAverageAge(allVehiclesOfCurrentUser),
    [allVehiclesOfCurrentUser],
  )
  const averageFuelConsumption = useMemo(
    () => calculateAverageConsumption(allVehiclesOfCurrentUser),
    [allVehiclesOfCurrentUser],
  )

  return (
    <div className='panel-page'>
      <Card
        count={allVehiclesOfCurrentUser.length}
        title='Vehicule'
        cardColor={CardColor.BLUE}
        description='/46 locuri disponibile'
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
