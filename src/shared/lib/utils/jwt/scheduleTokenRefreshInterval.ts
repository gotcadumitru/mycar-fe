import { fetchAndSetNewAccessToken } from './fetchAndSetNewAccessToken'
import { getInfoFromAPIJwt } from './getInfoFromAPIJwt'

const checkIntervalMilliseconds = 60000

export const scheduleTokenRefreshInterval = () => {
  const userDataFromToken = getInfoFromAPIJwt()

  const intervalId = setInterval(async () => {
    const currentTimeUnix = Math.floor(Date.now() / 1000)
    const timeSinceTokenWasCreated = currentTimeUnix - userDataFromToken.issuedAtTimeUnix
    const halfOfTokenDurationUnix =
      (userDataFromToken.expirationTimeUnix - userDataFromToken.issuedAtTimeUnix) / 2

    if (timeSinceTokenWasCreated >= halfOfTokenDurationUnix) {
      clearInterval(intervalId)
      await fetchAndSetNewAccessToken()
      return scheduleTokenRefreshInterval()
    }
  }, checkIntervalMilliseconds)
}
