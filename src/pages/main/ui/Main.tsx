import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import '../styles/main.scss'

const Main: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation()
  const mainClassName = classNames('main', {
    'main--dictionary': pathname.includes(RoutePaths.dictionary),
  })

  return <main className={mainClassName}>{children}</main>
}
export default Main
