import {
  CategoryCreateTrigger,
  CategoryCreateType,
  Language,
  ToWhomDoesItApply,
  WhenShouldHappen,
  WhereToHappen,
} from '../consts/categoryConsts'

export type CategorySliceState = {
  allCategories: CategoryMinType[]
  selectedCategory: Category | null
  toolbarSearchByValue: string
}
export type Category = {
  id: string
  name: string
  language: Language
  description: string
  wordsOrPhrases: string
  whoNeedsToSayOrNotSay: ToWhomDoesItApply
  whenShouldItHappen: WhenShouldHappen
  howLongTime: number
  whereNeedToHappen: WhereToHappen
  createdBy: number
  isActive: boolean
  isDeleted: boolean
  latest: number
  createdAt: number
  modifiedAt: number
}
export type CategoryFromApi = {
  categoryKey: string
  SK: string
  name: string
  data: {
    Clause: CategoryQueryLogic
  }
  language: Language
  description: string
  enabled: boolean
  isDeleted: boolean
  latest: number
  createdBy: number
  definitionString: string
  type: CategoryCreateType
  trigger: CategoryCreateTrigger
  createdAt: number
  modifiedAt: number
}

export type EditIsActiveCategoryThunk = {
  categoryId: string
  newActiveStatus: boolean
}

export type EditCategoryBody = {
  id: string
} & CreateCategoryBody

export type CreateCategoryBody = {
  categoryName: string
  definition: {
    Clause: CategoryQueryLogic
  }
  definitionString: string
  language: string
  description: string
  enabled: boolean
  type: CategoryCreateType
  trigger: CategoryCreateTrigger
  onlyAppliesTo: {
    groups: string[]
    users: string[]
  }
}

export type CategoryMinTypeFromApi = {
  categoryKey: string
  description: string
  enabled: boolean
  language: Language
  name: string
  createdBy: number
}

export type CategoryMinType = {
  id: string
  description: string
  isActive: boolean
  language: Language
  name: string
  createdBy: number
}

// CategoryQueryLogic defines the structure of a category query
export interface CategoryQueryLogic {
  Channel?: ToWhomDoesItApply //speaker / agent / customer
  Clause?: CategoryQueryLogic[] // Nested clause of query
  Operator: CategoryQueryOperator // The operator that applies between terms or clauses
  Scope?: WhereToHappen // single/multiple speaker turns
  Negate?: boolean // Negate the entire clause/term
  Terms?: CategoryQueryTerm[] // Terms for the clause
  PeriodStart: number // Start of the period for which to search
  PeriodEnd?: number // End of the period for which to search
}

// The type of operator that can be used in a category query
export type CategoryQueryOperator = 'OR' | 'AND'

export interface CategoryQueryTerm {
  Term: string
  Proximity?: number
  Negate?: boolean
  Fuzzy?: number
}

export type WordsAndPhrasesConvertOptionsType = {
  query: string // The query string to convert
  channel: ToWhomDoesItApply
  scope: WhereToHappen
  periodOptions: WordsAndPhrasesPeriodOptions // The period for which to search
}
export type WordsAndPhrasesPeriodOptions = {
  PeriodStart: number // Start of the period for which to search
  PeriodEnd?: number // End of the period for which to search
}
