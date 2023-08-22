interface JWTDecoded {
  scope: string
  exp: number
  iat: number
  iss: string
  nbf: number
}

export const getInfoFromAPIJwt = () =>
  // const { jwt } = apiConfig.getConfig()!
  // const base64Url = jwt.split('.')[1]
  // const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  // const jsonPayload = decodeURIComponent(
  //   window
  //     .atob(base64)
  //     .split('')
  //     .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
  //     .join(''),
  // )

  // const tokenDecoded = JSON.parse(jsonPayload) as JWTDecoded
  // return {
  //   scope: tokenDecoded.scope,
  //   isAdmin: tokenDecoded.scope?.includes('insights:admin'),
  //   isTeamLeader: tokenDecoded.scope?.includes('insights:team-leader'),
  //   isBasic: tokenDecoded.scope?.includes('insights:basic'),
  //   expirationTimeUnix: tokenDecoded.exp,
  //   issuedAtTimeUnix: tokenDecoded.iat,
  // }
   ({
    userId: 1,
    username: 'hello username',
    orgId: 2,
    scope: 'hello scope',
    isAdmin: true,
    isTeamLeader: true,
    isBasic: true,
    expirationTimeUnix: 999999999999999,
    issuedAtTimeUnix: 9999999999999998,
  })

