import { FC } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Button, { ButtonTheme } from 'shared/ui/Button'
import './header.scss'
import type { HeaderPropsType } from './header.types'

const Header: FC<HeaderPropsType> = ({ isWithGoBackIcon,title }) => {
  const navigate = useNavigate()
  return (
    <div className='header'>
      {isWithGoBackIcon && (
        <Button theme={ButtonTheme.EMPTY} onClick={() => navigate(-1)}>
          <AiOutlineLeft />
        </Button>
      )}
      <div className="header__title">{title}</div>
      <div/>
    </div>
  )
}

export default Header
