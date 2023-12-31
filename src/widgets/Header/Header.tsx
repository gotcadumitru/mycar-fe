import { useAuth } from 'app/providers/AuthContextProvider'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import AiOutlineLeft from 'shared/assets/icons/AiOutlineLeft.svg'
import Button, { ButtonTheme } from 'shared/ui/Button'
import './header.scss'
import Footer from 'widgets/Footer'
import type { HeaderPropsType } from './header.types'

const Header: FC<HeaderPropsType> = ({ isWithGoBackIcon, title }) => {
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  return (
    <div className='header'>
      <div className='header__left-side'>
        {isWithGoBackIcon && (
          <Button theme={ButtonTheme.EMPTY} onClick={() => navigate(-1)}>
            <AiOutlineLeft className='header__back-icon' />
          </Button>
        )}
        <div className='header__title'>{title}</div>
      </div>
      <div>
        {currentUser?.displayName?.split(' ')?.[0]}
        <Footer />
      </div>
    </div>
  )
}

export default Header
