import { getInfoFromAPIJwt } from 'shared/lib/utils/jwt'

const permissionHelpers = {
  checkIfAuthUserCanEditCategory: (idOfCategoryCreator: number) => {
    const userDataFromToken = getInfoFromAPIJwt()
    if (userDataFromToken.isAdmin) return true
    if (userDataFromToken.isTeamLeader && idOfCategoryCreator === userDataFromToken.userId)
      return true
    return false
  },
  checkIfAuthUserCanDeleteCategory: (idOfCategoryCreator: number) => {
    const userDataFromToken = getInfoFromAPIJwt()
    if (userDataFromToken.isAdmin) return true
    if (userDataFromToken.isTeamLeader && idOfCategoryCreator === userDataFromToken.userId)
      return true
    return false
  },
  checkIfAuthUserCanCloneCategory: () => {
    const userDataFromToken = getInfoFromAPIJwt()
    return userDataFromToken.isAdmin || userDataFromToken.isTeamLeader
  },
}
export default permissionHelpers
