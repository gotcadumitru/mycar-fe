import type { StateSchema } from 'app/providers/StoreProvider'
import { getCategoryFormValues } from 'enteties/category'
import { categoriesFromCategoryApiMaxType } from 'shared/defaults/tests/categories'
import { userFromSalesforceConverted1 } from 'shared/defaults/tests/users'

const reduxMockStateForTesting: DeepPartial<StateSchema> = {
  ui: {
    actionsWithFetchStatus: {},
    isSidebarShow: false,
  },
  createCategory: {
    newCategoryFormData: getCategoryFormValues({}),
  },
  // createDictionary: {
  //   newDictionaryFormData: getDictionaryFormValues({}),
  // },
  category: {
    allCategories: [],
    toolbarSearchByValue: '',
    selectedCategory: categoriesFromCategoryApiMaxType.converted[0],
  },
  user: {
    allUsersFromSalesforce: [],
    authUser: userFromSalesforceConverted1,
  },
  template: {
    allTemplates: [],
  },
}

export default reduxMockStateForTesting
