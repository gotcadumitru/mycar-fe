import { RemoteActions } from 'shared/api'
import { categoriesFromCategoryApiMaxType } from 'shared/defaults/tests/categories'
import { usersFromSalesforce } from 'shared/defaults/tests/users'

type MockSalesforceRemoteActionsType = {
  remoteAction: RemoteActions
  shouldThrowError?: boolean
  mockResponse?: any
}
const getMockSalesforceRemoteActions = ({
  remoteAction,
  shouldThrowError = false,
  mockResponse,
}: MockSalesforceRemoteActionsType) =>
  new Promise<any>((resolve, reject) => {
    if (shouldThrowError) reject(new Error('test error'))
    if (mockResponse) resolve(mockResponse)

    switch (remoteAction) {
      case RemoteActions.GET_USERS: {
        resolve(usersFromSalesforce.originalFromRequest)
        break
      }
      case RemoteActions.CREATE_CATEGORY: {
        resolve({ body: categoriesFromCategoryApiMaxType.originalFromRequest[0] })
        break
      }
      case RemoteActions.UPDATE_CATEGORY: {
        resolve({ body: categoriesFromCategoryApiMaxType.originalFromRequest[0] })
        break
      }
      case RemoteActions.DELETE_CATEGORY: {
        resolve(true)
        break
      }
      default:
        break
    }
  })
export default getMockSalesforceRemoteActions
