import MockAdapter from 'axios-mock-adapter'
import { categoryAPI } from 'shared/api'
import {
  categoriesFromCategoryApiMaxType,
  categoriesFromCategoryApiMinType,
} from 'shared/defaults/tests/categories'
import { templatesFromCategoryApiMaxType } from 'shared/defaults/tests/templates'

const mock = new MockAdapter(categoryAPI)

mock
  .onGet('/categories/organisation/2647058')
  .reply(200, { body: categoriesFromCategoryApiMinType.originalFromRequest })

mock
  .onGet(
    `/category/organisation/2647058/${categoriesFromCategoryApiMaxType.originalFromRequest[0].categoryKey}`,
  )
  .reply(200, { body: categoriesFromCategoryApiMaxType.originalFromRequest[0] })

mock
  .onGet('/categories/templates')
  .reply(200, { body: templatesFromCategoryApiMaxType.originalFromRequest })
export default mock
