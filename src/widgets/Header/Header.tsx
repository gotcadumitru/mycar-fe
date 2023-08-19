import { FC } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import NatterboxLogo from 'shared/assets/images/NatterboxLogo'
import { RoutePaths } from 'shared/config/router/RoutePaths'
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
