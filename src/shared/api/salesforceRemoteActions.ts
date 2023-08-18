import type { CategoryFromApi, CreateCategoryBody, EditCategoryBody } from 'enteties/category'
import type { UserFromSalesforceRequest } from 'enteties/user'
import { apiConfig } from 'shared/api/apiUtils'
import type { ResponseWithBody } from 'shared/types/api.types'
import { RemoteActions } from './apiConsts'

export const salesforceRemoteActions = {
  checkIsInsideSalesforce: () => !!window.insightsConfiguration,
  createCategory: async (newCategory: CreateCategoryBody) => {
    const { namespace } = apiConfig.getConfig()!

    const response = await window.insightsConfiguration<ResponseWithBody<CategoryFromApi>>(
      RemoteActions.CREATE_CATEGORY,
      {
        [`${namespace}Category_Name__c`]: newCategory.categoryName,
        [`${namespace}Category_Type__c`]: newCategory.type,
        [`${namespace}Trigger__c`]: newCategory.trigger,
        [`${namespace}JSON__c`]: JSON.stringify(newCategory),
      },
    )
    return response.body
  },
  editCategory: async (categoryToEdit: EditCategoryBody) => {
    const { namespace } = apiConfig.getConfig()!
    const response = await window.insightsConfiguration<ResponseWithBody<CategoryFromApi>>(
      RemoteActions.UPDATE_CATEGORY,
      {
        [`${namespace}Id__c`]: categoryToEdit.id,
        [`${namespace}Category_Type__c`]: categoryToEdit.type,
        [`${namespace}Trigger__c`]: categoryToEdit.trigger,
        [`${namespace}Category_Name__c`]: categoryToEdit.categoryName,
        [`${namespace}JSON__c`]: JSON.stringify(categoryToEdit),
      },
    )
    return response.body
  },
  deleteCategoryById: (categoryIdFromAPI: string) =>
    window.insightsConfiguration<string>(RemoteActions.DELETE_CATEGORY, categoryIdFromAPI),
  getJWT: () => window.insightsConfiguration(RemoteActions.GET_JWT) as Promise<string>,
  getNamespace: () =>
    window.insightsConfiguration(RemoteActions.GET_NAMESPACE) as Promise<'' | 'nbavs'>,
  getAllUsers: () =>
    window.insightsConfiguration(RemoteActions.GET_USERS) as Promise<UserFromSalesforceRequest[]>,
}
