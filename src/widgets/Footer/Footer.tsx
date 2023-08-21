import classNames from 'classnames'
import { FC } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { BsSpeedometer2 } from 'react-icons/bs'
import { GiHomeGarage } from 'react-icons/gi'
import { HiOutlineBellAlert } from 'react-icons/hi2'
import { useLocation } from 'react-router-dom'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import './footer.scss'
import type { FooterPropsType } from './footer.types'

const Footer: FC<FooterPropsType> = () => {
  const location = useLocation()
  const icons = [
    {
      Icon: BsSpeedometer2,
      route: RoutePaths.panel,
      isNotification: false,
      text: 'Panou',
      isStroke: false,
    },
    {
      Icon: GiHomeGarage,
      route: RoutePaths.garage,
      isNotification: false,
      text: 'Garaj',
      isStroke: false,
    },
    {
      Icon: HiOutlineBellAlert,
      route: RoutePaths.alerts,
      isNotification: false,
      text: 'Alerte',
      isStroke: true,
    },
    {
      Icon: BiMenuAltRight,
      route: RoutePaths.menu,
      isNotification: true,
      text: 'Menu',
      isStroke: false,
    },
  ]
  return (
    <footer className='footer'>
      {icons.map(({ Icon, ...menuOption }) => (
        <Button
          theme={ButtonTheme.EMPTY}
          key={menuOption.text}
          category={ButtonCategoryType.LINK}
          to={menuOption.route}
        >
          <div
            className={classNames('footer__item', {
              'footer__item--notification': menuOption.isNotification,
              'footer__item--active': location.pathname.includes(menuOption.route),
            })}
          >
            <Icon
              className={classNames('footer__icon', {
                'footer__icon--stroke': menuOption.isStroke,
                'footer__icon--fill': !menuOption.isStroke,
                'footer__icon--active': location.pathname.includes(menuOption.route),
              })}
            />
            {menuOption.text}
          </div>
        </Button>
      ))}
    </footer>
  )
}

export default Footer
