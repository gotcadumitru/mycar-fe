import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className='app__container'>{children}</div>
)
export default Layout
