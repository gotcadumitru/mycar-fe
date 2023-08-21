import AppRouter from 'app/providers/router'
import { ToastContainer } from 'react-toastify'
import { toastDefaultValues } from 'shared/config/toastify'
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks'
import { ActiveModal } from 'widgets/ActiveModal/ActiveModal'
import './styles/app.scss'

const App = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <div className='app' data-testid='app'>
        <ActiveModal />
        {/*<div style={{ fontSize: '50px' }}>*/}
        {/*  <BsPlusLg />*/}
        {/*  <BsSpeedometer2/>*/}
        {/*  <HiOutlineBellAlert />*/}
        {/*  <GiHomeGarage/>*/}
        {/*  <BiMenuAltRight/>*/}
        {/*  <AiOutlineLeft/>*/}
        {/*</div>*/}
        <AppRouter />
      </div>
      <ToastContainer position='bottom-center' {...toastDefaultValues} />
    </>
  )
}
export default App
