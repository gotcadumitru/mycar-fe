import AppRouter from 'app/providers/router'
import { fetchAllUsersFromSalesforceThunk } from 'enteties/user'
import { useEffect } from 'react'
import {AiOutlineLeft} from 'react-icons/ai';
import {BiMenuAltRight} from 'react-icons/bi';
import { BsPlusLg,BsSpeedometer2 } from 'react-icons/bs'
import {GiHomeGarage} from 'react-icons/gi';
import { HiOutlineBellAlert } from 'react-icons/hi2'
import { ToastContainer } from 'react-toastify'
import { toastDefaultValues } from 'shared/config/toastify'
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks'
import { ActiveModal } from 'widgets/ActiveModal/ActiveModal'
import Footer from 'widgets/Footer'
import Header from 'widgets/Header'
import './styles/app.scss'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllUsersFromSalesforceThunk())
  }, [])
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
