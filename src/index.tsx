import { scheduleTokenRefreshInterval } from 'shared/lib/utils/jwt'
import renderReactApp from './renderReactApp'

export const startApp = async () => {
  renderReactApp()

  scheduleTokenRefreshInterval()
}

startApp()
