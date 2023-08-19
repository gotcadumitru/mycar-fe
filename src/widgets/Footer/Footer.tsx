import { FC } from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
import NatterboxLogo from 'shared/assets/images/NatterboxLogo'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import type { FooterPropsType } from './footer.types'

const Footer: FC<FooterPropsType> = () => (
  <footer className='footer'>
    <Link to={RoutePaths.category}>
      {/*<NatterboxLogo />*/}
        Footer
    </Link>
  </footer>
)

export default Footer
