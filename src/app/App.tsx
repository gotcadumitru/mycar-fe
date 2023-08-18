import AppRouter from 'app/providers/router'
import { fetchAllUsersFromSalesforceThunk } from 'enteties/user'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { toastDefaultValues } from 'shared/config/toastify'
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks'
import { ActiveModal } from 'widgets/ActiveModal/ActiveModal'
import Header from 'widgets/Header'
import './styles/app.scss'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllUsersFromSalesforceThunk())
  }, [])
  return (
    <div className='app' data-testid='app'>
      <ActiveModal />
      <Header />
      <AppRouter />
      <ToastContainer position='bottom-center' {...toastDefaultValues} />
    </div>
  )
}
export default App
