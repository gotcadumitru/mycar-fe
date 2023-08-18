/* eslint-disable quotes */
import { ToWhomDoesItApply, WhereToHappen } from 'enteties/category'
import { categoriesFromCategoryApiMaxType } from 'shared/defaults/tests/categories'
import createArrayFromTo from 'shared/lib/utils/createArrayFromTo'
import {
  categoryToEditCategoryForm,
  checkIfExistErrorsOnCreateEditCategory,
} from './create-edit-category.utils'

describe('create/edit category utils', () => {
  it('should convert category to form values', () => {
    expect(
      categoryToEditCategoryForm(categoriesFromCategoryApiMaxType.converted[0]).name.value,
    ).toBe(categoriesFromCategoryApiMaxType.converted[0].name)
  })
  it('should check if exist errors', () => {
    global.structuredClone = (data: any) => data
    const convertedCategory = categoryToEditCategoryForm(
      categoriesFromCategoryApiMaxType.converted[0],
    )
    const query = {
      query: `"Dave" AND "Doug"`,
      channel: ToWhomDoesItApply.SPEAKER,
      scope: WhereToHappen.ALL,
      periodOptions: {
        PeriodStart: 0,
      },
    }
    expect(
      checkIfExistErrorsOnCreateEditCategory(convertedCategory, query).isErrors,
    ).not.toBeTruthy()

    convertedCategory.name.value = ''
    convertedCategory.description.value = createArrayFromTo(0, 350).join('')

    expect(checkIfExistErrorsOnCreateEditCategory(convertedCategory, query).isErrors).toBeTruthy()

    convertedCategory.name.value = createArrayFromTo(0, 350).join('')
    convertedCategory.description.value = ''
    query.query = ''

    expect(checkIfExistErrorsOnCreateEditCategory(convertedCategory, query).isErrors).toBeTruthy()
  })
})
