export type ApiConfigData = {
  jwt: string
  sapienAPI: string
  categoryAPI: string
  namespace: '' | 'nbavs__'
}

export const apiConfig = {
  getConfig: () => {
    const sapienConfigString = localStorage.getItem('api-config')
    return sapienConfigString ? (JSON.parse(sapienConfigString) as ApiConfigData) : null
  },
  removeConfig: () => {
    localStorage.removeItem('api-config')
  },
  setConfig: (config: ApiConfigData) => {
    localStorage.setItem('api-config', JSON.stringify(config))
  },
  setJWT: (jwt: string) => {
    const newConfig: ApiConfigData = { ...apiConfig.getConfig()!, jwt }
    localStorage.setItem('api-config', JSON.stringify(newConfig))
  },
}

export const getAuthorizationHeader = () => {
  const authToken = apiConfig.getConfig()?.jwt
  return `Bearer ${authToken}`
}
