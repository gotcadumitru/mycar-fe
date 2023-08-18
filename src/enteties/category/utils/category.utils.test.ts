import { mapCategoriesMinFromApi } from 'enteties/category'
import { categoriesFromCategoryApiMinType } from 'shared/defaults/tests/categories'
import { WhenShouldHappen } from '../model/consts/categoryConsts'
import { getWhenShouldItHappen } from './category.utils'

describe('category utils', () => {
  describe('getWhenShouldItHappen', () => {
    test('returns WhenShouldHappen.BEGINNING', () => {
      const result = getWhenShouldItHappen(0, 1000)
      expect(result).toBe(WhenShouldHappen.BEGINNING)
    })

    test('returns WhenShouldHappen.END', () => {
      const result = getWhenShouldItHappen(-20, 0)
      expect(result).toBe(WhenShouldHappen.END)
    })

    test('returns WhenShouldHappen.ANYWHERE when PeriodStart is number and PeriodEnd is null', () => {
      const result1 = getWhenShouldItHappen(0)
      expect(result1).toBe(WhenShouldHappen.ANYWHERE)
    })
  })

  describe('mapCategoriesMinFromApi', () => {
    test('correctly maps categories from API response format to application format', () => {
      const result = mapCategoriesMinFromApi(categoriesFromCategoryApiMinType.originalFromRequest)
      expect(result).toEqual(categoriesFromCategoryApiMinType.converted)
    })
  })
})
