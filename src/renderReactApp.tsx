import AuthContextProvider from 'app/providers/AuthContextProvider'
import ErrorBoundary from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/main.scss'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import App from './app/App'

const renderReactApp = () => {
  const container = document.getElementById('carmaster-root')
  const root = createRoot(container as HTMLElement)
  root.render(
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>,
  )
}
export default renderReactApp
