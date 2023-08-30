import BsPlusLg from 'shared/assets/icons/BsPlusLg.svg'
import HiOutlineBellAlert from 'shared/assets/icons/HiOutlineBellAlert.svg'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { Card, CardColor } from 'shared/ui/Card'
import { CardType } from 'shared/ui/Card/card.types'
import './panelPage.scss'

const PanelPage = () => (
  <div className='panel-page'>
    <Card
      count={1}
      title='Vehicule'
      cardColor={CardColor.BLUE}
      description='/5 locuri disponibile'
      type={CardType.WITH_ICON}
      Icon={BsPlusLg}
      to={RoutePaths.new_car}
    />
    <Card
      count={0}
      title='Alerte'
      cardColor={CardColor.RED}
      description='Alerte in urm. 30 zile'
      type={CardType.WITH_ICON}
      Icon={HiOutlineBellAlert}
      to={RoutePaths.new_car}
    />

    <Card
      count={9}
      title='Vechime med.'
      cardColor={CardColor.BLUE}
      description='Ani'
      type={CardType.WITHOUT_ICON}
    />

    <Card
      count='-'
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
export default PanelPage
