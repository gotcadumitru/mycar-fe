import type {
  Category,
  CategoryFromApi,
  CategoryMinType,
  CategoryMinTypeFromApi,
} from 'enteties/category'
import {
  CategoryCreateTrigger,
  CategoryCreateType,
  Language,
  ToWhomDoesItApply,
  WhenShouldHappen,
  WhereToHappen,
} from 'enteties/category'
import { queriesForTesting } from 'shared/defaults/tests/queriesForTesting'
import { userFromSalesforceConverted1 } from './users'

const categoriesFromApiMinType: CategoryMinTypeFromApi[] = [
  {
    categoryKey: '1',
    description: 'This is category 1',
    enabled: true,
    language: Language.ENGLISH,
    name: 'Category One',
    createdBy: userFromSalesforceConverted1.idFromApi,
  },
  {
    categoryKey: '2',
    description: 'This is category 2',
    enabled: true,
    language: Language.ENGLISH,
    name: 'Category Two',
    createdBy: userFromSalesforceConverted1.idFromApi,
  },
  {
    categoryKey: '3',
    description: 'This is category 3',
    enabled: false,
    language: Language.FRENCH,
    name: 'Category Three',
    createdBy: userFromSalesforceConverted1.idFromApi,
  },
]

const categoriesConvertedMinType: CategoryMinType[] = categoriesFromApiMinType.map((category) => ({
  id: category.categoryKey,
  description: category.description,
  isActive: category.enabled,
  language: category.language,
  name: category.name,
  createdBy: category.createdBy,
}))

export const categoriesFromCategoryApiMinType = {
  converted: categoriesConvertedMinType,
  originalFromRequest: categoriesFromApiMinType,
}

const categoriesConvertedMaxType: Category[] = [
  {
    id: categoriesConvertedMinType[0].id,
    name: categoriesConvertedMinType[0].name,
    language: categoriesConvertedMinType[0].language,
    description: categoriesConvertedMinType[0].description,
    wordsOrPhrases: queriesForTesting[0].queryToTest.query,
    whoNeedsToSayOrNotSay: ToWhomDoesItApply.SPEAKER,
    whenShouldItHappen: WhenShouldHappen.BEGINNING,
    howLongTime: 5,
    whereNeedToHappen: WhereToHappen.TURN,
    createdBy: categoriesConvertedMinType[0].createdBy,
    isActive: categoriesConvertedMinType[0].isActive,
    isDeleted: true,
    latest: 1,
    createdAt: 1682344017,
    modifiedAt: 1682344017,
  },
  {
    id: categoriesConvertedMinType[0].id,
    name: categoriesConvertedMinType[0].name,
    language: categoriesConvertedMinType[0].language,
    description: categoriesConvertedMinType[0].description,
    wordsOrPhrases: queriesForTesting[1].queryToTest.query,
    whoNeedsToSayOrNotSay: ToWhomDoesItApply.AGENT,
    whenShouldItHappen: WhenShouldHappen.ANYWHERE,
    howLongTime: 0,
    whereNeedToHappen: WhereToHappen.ALL,
    createdBy: categoriesConvertedMinType[0].createdBy,
    isActive: categoriesConvertedMinType[0].isActive,
    isDeleted: true,
    latest: 1,
    createdAt: 1682344117,
    modifiedAt: 1682344117,
  },
  {
    id: categoriesConvertedMinType[0].id,
    name: categoriesConvertedMinType[0].name,
    language: categoriesConvertedMinType[0].language,
    description: categoriesConvertedMinType[0].description,
    wordsOrPhrases: queriesForTesting[2].queryToTest.query,
    whoNeedsToSayOrNotSay: ToWhomDoesItApply.CUSTOMER,
    whenShouldItHappen: WhenShouldHappen.END,
    howLongTime: 15,
    whereNeedToHappen: WhereToHappen.TURN,
    createdBy: categoriesConvertedMinType[0].createdBy,
    isActive: categoriesConvertedMinType[0].isActive,
    isDeleted: false,
    latest: 1,
    createdAt: 1682344157,
    modifiedAt: 1682344217,
  },
]

const categoriesFromApiMaxType: CategoryFromApi[] = categoriesConvertedMaxType.map(
  (category, index) => ({
    categoryKey: category.id,
    SK: 'v0',
    name: category.name,
    data: {
      Clause: queriesForTesting[index].expectedResponse,
    },
    language: category.language,
    description: category.description,
    enabled: category.isActive,
    isDeleted: category.isDeleted,
    latest: category.latest,
    createdBy: category.createdBy,
    type: CategoryCreateType.CONCEPT, //We will only have categories with this value
    trigger: CategoryCreateTrigger.INFO, //We will only have categories with this value
    definitionString: category.wordsOrPhrases,
    createdAt: category.createdAt,
    modifiedAt: category.modifiedAt,
  }),
)
export const categoriesFromCategoryApiMaxType = {
  converted: categoriesConvertedMaxType,
  originalFromRequest: categoriesFromApiMaxType,
}
