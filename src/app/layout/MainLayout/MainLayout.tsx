import Main from 'pages/main'
import { FC, PropsWithChildren } from 'react'
import Sidebar from 'shared/ui/Sidebar'

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className='app__container'>
      main
    {/*<Sidebar />*/}
    {/*<Main>{children}</Main>*/}
  </div>
)
export default MainLayout
