import classNames from 'classnames'
import { FC, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BiMenuAltRight from 'shared/assets/icons/BiMenuAltRight.svg'
import BsSpeedometer2 from 'shared/assets/icons/BsSpeedometer2.svg'
import GiHomeGarage from 'shared/assets/icons/GiHomeGarage.svg'
import HiOutlineBellAlert from 'shared/assets/icons/HiOutlineBellAlert.svg'
import { RoutePaths, RoutePathsFn } from 'shared/config/router/RoutePaths'
import useOnClickOutside from 'shared/lib/hooks/useOnClickOutside'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import './footer.scss'
import type { FooterPropsType } from './footer.types'

const Footer: FC<FooterPropsType> = () => {
  const footerRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  useOnClickOutside(footerRef, () => isOpen && setIsOpen(false), ['footer__burger-btn'])
  const icons = [
    {
      Icon: BsSpeedometer2,
      route: RoutePathsFn.getPanel(),
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
      route: RoutePathsFn.getMenu(),
      isNotification: true,
      text: 'Menu',
      isStroke: false,
    },
  ]

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={classNames('footer__burger-btn', {
          'footer__burger-btn--active': isOpen,
        })}
        theme={ButtonTheme.EMPTY}
      >
        <div>Meniu</div>
      </Button>
      <footer
        ref={footerRef}
        className={classNames('footer', {
          'footer--active': isOpen,
        })}
      >
        {icons.map(({ Icon, ...menuOption }) => {
          const isActive = `/${location.pathname.split('/')[1] || ''}` === menuOption.route
          return (
            <Button
              theme={ButtonTheme.EMPTY}
              key={menuOption.text}
              category={ButtonCategoryType.LINK}
              to={menuOption.route}
            >
              <div
                className={classNames('footer__item', {
                  'footer__item--notification': menuOption.isNotification,
                  'footer__item--active': isActive,
                })}
              >
                <Icon
                  className={classNames('footer__icon', {
                    'footer__icon--stroke': menuOption.isStroke,
                    'footer__icon--fill': !menuOption.isStroke,
                    'footer__icon--active': isActive,
                  })}
                />
                {menuOption.text}
              </div>
            </Button>
          )
        })}
      </footer>
    </>
  )
}

export default Footer
