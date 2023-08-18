import { StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/main.scss'
import { NotFoundPage } from 'pages/NotFoundPage'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { TOAST_MESSAGE } from 'shared/defaults/text'
import { getInfoFromAPIJwt } from 'shared/lib/utils/jwt'
import App from './app/App'

const renderReactApp = () => {
  const container = document.getElementById('categorisation-root')
  const root = createRoot(container as HTMLElement)
  const userDataFromToken = getInfoFromAPIJwt()
  if (userDataFromToken.isAdmin || userDataFromToken.isTeamLeader) {
    root.render(
      <HashRouter>
        <StoreProvider>
          <App />
        </StoreProvider>
      </HashRouter>,
    )
  } else {
    root.render(
      <div className='no-access'>
        <NotFoundPage text={TOAST_MESSAGE.PAGE_NO_ACCESS} />
      </div>,
    )
  }
}
export default renderReactApp
