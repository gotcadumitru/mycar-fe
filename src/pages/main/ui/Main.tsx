import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import '../styles/main.scss'

const Main: FC<PropsWithChildren> = ({ children }) => {
  const mainClassName = classNames('main')

  return <main className={mainClassName}>{children}</main>
}
export default Main
