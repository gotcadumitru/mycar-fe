import { apiConfig, salesforceRemoteActions } from 'shared/api'
import { scheduleTokenRefreshInterval } from 'shared/lib/utils/jwt'
import renderReactApp from './renderReactApp'

export const startApp = async () => {
  if (!salesforceRemoteActions.checkIsInsideSalesforce()) {
    // eslint-disable-next-line no-console
    console.error('This app only runs inside Salesforce')
    throw new Error('This app only runs inside Salesforce')
  }

  const [namespace, jwt] = await Promise.all([
    salesforceRemoteActions.getNamespace(),
    salesforceRemoteActions.getJWT(),
  ])

  apiConfig.setConfig({
    jwt,
    sapienAPI: window.InsConfig.sapien,
    categoryAPI: window.InsConfig.categoryAPI,
    namespace: !namespace ? '' : `${namespace}__`,
  })
  renderReactApp()

  scheduleTokenRefreshInterval()
}

startApp()
