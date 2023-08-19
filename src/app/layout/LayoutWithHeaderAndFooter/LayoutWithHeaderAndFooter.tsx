import { FC, PropsWithChildren } from 'react'
import Footer from 'widgets/Footer'
import Header from 'widgets/Header'

const LayoutWithHeaderAndFooter: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <div className='app__container'>{children}</div>
    <Footer />
  </>
)
export default LayoutWithHeaderAndFooter
