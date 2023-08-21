import { getInfoFromAPIJwt } from 'shared/lib/utils/jwt'

const permissionHelpers = {
  checkIfAuthUserCanEditCar: (idOf: number) => {
    const userDataFromToken = getInfoFromAPIJwt()

    return false
  },

}
export default permissionHelpers
