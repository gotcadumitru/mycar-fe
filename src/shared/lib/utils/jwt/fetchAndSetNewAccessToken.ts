import { apiConfig } from 'shared/api/apiUtils'
import { salesforceRemoteActions } from 'shared/api/salesforceRemoteActions'

export const fetchAndSetNewAccessToken = async () => {
  const jwt = await salesforceRemoteActions.getJWT()
  apiConfig.setJWT(jwt)
}
