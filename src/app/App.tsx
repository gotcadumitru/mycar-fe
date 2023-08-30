import { Analytics } from '@vercel/analytics/react'
import AppRouter from 'app/providers/router'
import { ToastContainer } from 'react-toastify'
import { toastDefaultValues } from 'shared/config/toastify'
import { ActiveModal } from 'widgets/ActiveModal/ActiveModal'
import './styles/app.scss'

const App = () => (
  <>
    <div className='app' data-testid='app'>
      <ActiveModal />
      <AppRouter />
    </div>
    <ToastContainer position='bottom-center' {...toastDefaultValues} />
    <Analytics debug />
  </>
)
export default App
