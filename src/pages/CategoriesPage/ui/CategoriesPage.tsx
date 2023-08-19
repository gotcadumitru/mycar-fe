import {AiFillAlert} from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs'
import {HiOutlineBellAlert} from 'react-icons/hi2';
import { Card, CardColor } from 'shared/ui/Card'
import { CardType } from 'shared/ui/Card/card.types'

const CategoriesPage = () => (
  <div>
    <Card
      count={1}
      title='Vehicule'
      cardColor={CardColor.BLUE}
      description='/5 locuri disponibile'
      type={CardType.WITH_ICON}
      Icon={BsPlusLg}
    />
    <Card
      count={0}
      title='Alerte'
      cardColor={CardColor.RED}
      description='Alerte in urm. 30 zile'
      type={CardType.WITH_ICON}
      Icon={HiOutlineBellAlert}
    />

      <Card
          count={0}
          title='Alerte'
          cardColor={CardColor.RED}
          description='Alerte in urm. 30 zile'
          type={CardType.WITHOUT_ICON}
      />
  </div>
)
export default CategoriesPage
