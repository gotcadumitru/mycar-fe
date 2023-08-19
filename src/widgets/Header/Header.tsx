import { FC } from 'react'
import { Link } from 'react-router-dom'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import './header.scss'
import type { HeaderPropsType } from './header.types'

const Header: FC<HeaderPropsType> = () => (
  <div className='header'>
    <Link to={RoutePaths.category}>
      {/*<NatterboxLogo />*/}
      Header
    </Link>
  </div>
)

export default Header
