import { apiConfig } from 'shared/api'

const mockLocalStorage = () => {
  apiConfig.setConfig({
    carAPI: 'https://hiii.pub',
    jwt: 'jwt',
    namespace: '',
  })
}

export default mockLocalStorage
