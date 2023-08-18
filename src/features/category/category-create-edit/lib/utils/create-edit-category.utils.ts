import type {
  Category,
  CategoryQueryLogic,
  CreateCategoryBody,
  WordsAndPhrasesConvertOptionsType,
} from 'enteties/category'
import {
  CategoryCreateTrigger, CategoryCreateType,
  getCategoryFormValues,
  parseStringToWordsAndPhrases,
  WhenShouldHappen,
  WordsAndPhrasesPeriodOptions,
} from 'enteties/category'
import { toast } from 'react-toastify'
import { ERROR_MESSAGES, TOAST_MESSAGE } from 'shared/defaults/text'
import {
  MAX_CATEGORY_DESCRIPTION_LENGTH,
  MAX_CATEGORY_NAME_LENGTH,
} from '../../model/consts/createEditCategoryConsts'
import { CategoryFormDataFullType } from '../../model/types/createEditCategory.types'

export const categoryToEditCategoryForm = (category: Category) =>
  getCategoryFormValues({
    name: category.name,
    description: category.description,
    language: category.language,
    howLongTime: category.howLongTime,
    whereNeedToHappen: category.whereNeedToHappen,
    whenShouldItHappen: category.whenShouldItHappen,
    wordsOrPhrases: category.wordsOrPhrases,
    toWhomDoesItApply: category.whoNeedsToSayOrNotSay,
    groups: [],
    users: [],
  })

const getPeriodOptions = (
  whenShouldItHappen: WhenShouldHappen,
  timeInSeconds: number,
): WordsAndPhrasesPeriodOptions => {
  const periodOptions: WordsAndPhrasesPeriodOptions = {
    PeriodStart: 0,
    PeriodEnd: undefined,
  }

  if (whenShouldItHappen === WhenShouldHappen.END) {
    periodOptions.PeriodStart = -timeInSeconds * 1000
    periodOptions.PeriodEnd = 0
  } else if (whenShouldItHappen === WhenShouldHappen.BEGINNING) {
    periodOptions.PeriodEnd = timeInSeconds * 1000
  }
  return periodOptions
}

export const getOptionsForParsing = (createCategoryFormData: CategoryFormDataFullType) => ({
  query: createCategoryFormData.wordsOrPhrases.value,
  channel: createCategoryFormData.toWhomDoesItApply.value,
  scope: createCategoryFormData.whereNeedToHappen.value,
  periodOptions: getPeriodOptions(
    createCategoryFormData.whenShouldItHappen.value,
    createCategoryFormData.howLongTime.value,
  ),
})

export const categoryFormToRequestBody = (
  createCategoryFormData: CategoryFormDataFullType,
  definition: CategoryQueryLogic,
): CreateCategoryBody => ({
  categoryName: createCategoryFormData.name.value,
  definition: {
    Clause: definition,
  },
  definitionString: createCategoryFormData.wordsOrPhrases.value,
  language: createCategoryFormData.language.value,
  description: createCategoryFormData.description.value,
  enabled: true,
  type: CategoryCreateType.CONCEPT,
  trigger: CategoryCreateTrigger.INFO,
  onlyAppliesTo: {
    groups: [],
    users: [],
  },
})

export const checkIfExistErrorsOnCreateEditCategory = (
  createCategoryFormData: CategoryFormDataFullType,
  optionsForParsing: WordsAndPhrasesConvertOptionsType,
) => {
  let isErrors = false
  const createCategoryFormDataWithErrors = structuredClone(createCategoryFormData)

  Object.keys(createCategoryFormDataWithErrors).forEach((key) => {
    const property =
      createCategoryFormDataWithErrors[key as keyof typeof createCategoryFormDataWithErrors]
    if (typeof property.value === 'number') return
    if (property.isRequired && !property.value.length) {
      isErrors = true
      property.errorMessage = ERROR_MESSAGES.REQUIRED_FIELD
    }
  })
  if (
    createCategoryFormDataWithErrors.whenShouldItHappen.value !== WhenShouldHappen.ANYWHERE &&
    !createCategoryFormDataWithErrors.howLongTime.value
  ) {
    createCategoryFormDataWithErrors.howLongTime.errorMessage = TOAST_MESSAGE.GREATER_THAN_ZERO
    isErrors = true
  }
  if (createCategoryFormDataWithErrors.name.value.length > MAX_CATEGORY_NAME_LENGTH) {
    createCategoryFormDataWithErrors.name.errorMessage = `${TOAST_MESSAGE.NAME_UP_TO} ${createCategoryFormDataWithErrors.name.value.length}`
    isErrors = true
  }

  if (createCategoryFormDataWithErrors.description.value.length > MAX_CATEGORY_DESCRIPTION_LENGTH) {
    createCategoryFormDataWithErrors.description.errorMessage = `${TOAST_MESSAGE.DESCRIPTION_UP_TO} ${createCategoryFormDataWithErrors.description.value.length}`
    isErrors = true
  }

  try {
    parseStringToWordsAndPhrases(optionsForParsing)
  } catch (err: any) {
    isErrors = true
    createCategoryFormDataWithErrors.wordsOrPhrases.errorMessage =
      err.message || TOAST_MESSAGE.SOMETHING_WENT_WRONG_PARSING
  }
  if (isErrors) {
    toast.error(TOAST_MESSAGE.PLEASE_REVIEW_FIELDS)
  }
  return {
    isErrors,
    createCategoryFormDataWithErrors,
  }
}
