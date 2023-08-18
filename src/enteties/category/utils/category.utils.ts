import type {
  CategoryFormDataFullType,
  CategoryFormDataType,
} from 'features/category/category-create-edit'
import { ToWhomDoesItApply, WhenShouldHappen, WhereToHappen } from '../model/consts/categoryConsts'
import type {
  Category,
  CategoryFromApi,
  CategoryMinType,
  CategoryMinTypeFromApi,
} from '../model/types/category.types'

export const mapCategoriesMinFromApi = (
  categoriesFromApi: CategoryMinTypeFromApi[],
): CategoryMinType[] =>
  categoriesFromApi.map(({ categoryKey, enabled, ...category }) => ({
    ...category,
    id: categoryKey,
    isActive: enabled,
  }))

export const getWhenShouldItHappen = (
  periodStart: number,
  periodEnd?: number,
): WhenShouldHappen => {
  if (periodStart === 0 && periodEnd === null) return WhenShouldHappen.ANYWHERE
  if (periodStart === 0 && typeof periodEnd === 'number') return WhenShouldHappen.BEGINNING
  if (periodStart <= 0 && periodEnd === 0) return WhenShouldHappen.END
  return WhenShouldHappen.ANYWHERE
}
export const getHowLongTime = (periodStart: number, periodEnd?: number) => {
  if (periodStart === 0 && periodEnd === undefined) return 0
  if (periodStart === 0 && periodEnd !== undefined) return periodEnd / 1000
  if (periodStart <= 0 && periodEnd === 0) return -periodStart / 1000
  return 0
}

export const getCategoryFormValues = ({
  name = '',
  description = '',
  language = '',
  wordsOrPhrases = '',
  toWhomDoesItApply = ToWhomDoesItApply.SPEAKER,
  whenShouldItHappen = WhenShouldHappen.ANYWHERE,
  howLongTime = 0,
  whereNeedToHappen = WhereToHappen.ALL,
  users = [],
  groups = [],
}: Partial<CategoryFormDataType>): CategoryFormDataFullType => ({
  name: {
    value: name,
    errorMessage: '',
    isRequired: true,
  },
  language: {
    value: language,
    errorMessage: '',
    isRequired: true,
  },
  description: {
    value: description,
    errorMessage: '',
    isRequired: false,
  },
  wordsOrPhrases: {
    value: wordsOrPhrases,
    errorMessage: '',
    isRequired: false,
  },
  toWhomDoesItApply: {
    value: toWhomDoesItApply,
    errorMessage: '',
    isRequired: true,
  },
  whenShouldItHappen: {
    value: whenShouldItHappen,
    errorMessage: '',
    isRequired: true,
  },
  howLongTime: {
    value: howLongTime,
    errorMessage: '',
    isRequired: true,
  },
  whereNeedToHappen: {
    value: whereNeedToHappen,
    errorMessage: '',
    isRequired: true,
  },
  users: {
    value: users,
    errorMessage: '',
    isRequired: false,
  },
  groups: {
    value: groups,
    errorMessage: '',
    isRequired: false,
  },
})
export const mapCategoryFromApi = (categoriesFromApi: CategoryFromApi): Category => ({
  id: categoriesFromApi.categoryKey,
  isActive: categoriesFromApi.enabled,
  createdBy: categoriesFromApi.createdBy,
  whoNeedsToSayOrNotSay: categoriesFromApi.data.Clause.Channel!,
  whereNeedToHappen: categoriesFromApi.data.Clause.Scope!,
  whenShouldItHappen: getWhenShouldItHappen(
    categoriesFromApi.data.Clause.PeriodStart,
    categoriesFromApi.data.Clause.PeriodEnd,
  ),
  wordsOrPhrases: categoriesFromApi.definitionString,
  howLongTime: getHowLongTime(
    categoriesFromApi.data.Clause.PeriodStart,
    categoriesFromApi.data.Clause.PeriodEnd,
  ),
  name: categoriesFromApi.name,
  description: categoriesFromApi.description,
  language: categoriesFromApi.language,
  isDeleted: categoriesFromApi.isDeleted,
  latest: categoriesFromApi.latest,
  createdAt: categoriesFromApi.createdAt,
  modifiedAt: categoriesFromApi.modifiedAt,
})
