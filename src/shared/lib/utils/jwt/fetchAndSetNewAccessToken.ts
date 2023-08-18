import { apiConfig } from 'shared/api/apiUtils'

export const fetchAndSetNewAccessToken = async () => {
  const jwt = "jwt"
  apiConfig.setJWT(jwt)
}
