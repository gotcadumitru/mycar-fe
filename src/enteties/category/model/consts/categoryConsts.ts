export enum CategoryActions {
  FETCH_ALL_CATEGORIES = 'FETCH_ALL_CATEGORIES',
  FETCH_CATEGORY_BY_ID = 'FETCH_CATEGORY_BY_ID',
  DELETE_CATEGORY_BY_ID = 'DELETE_CATEGORY_BY_ID',
  CREATE_CATEGORY = 'CREATE_CATEGORY',
  EDIT_CATEGORY = 'EDIT_CATEGORY',
  CHANGE_IS_ACTIVE = 'CHANGE_IS_ACTIVE',
}

export enum Language {
  ENGLISH = 'en',
  GERMAN = 'de',
  FRENCH = 'fr',
  SPANISH = 'es',
  ITALIAN = 'it',
  DANISH = 'da',
  MULTIPLE = 'all',
}

export const LanguageLabels = {
  [Language.ENGLISH]: 'English',
  [Language.GERMAN]: 'German',
  [Language.FRENCH]: 'French',
  [Language.SPANISH]: 'Spanish',
  [Language.ITALIAN]: 'Italian',
  [Language.DANISH]: 'Danish',
  [Language.MULTIPLE]: 'Multiple',
}

export enum WhereToHappen {
  ALL = 'ALL',
  TURN = 'TURN',
}

export const WhereToHappenLabels = {
  [WhereToHappen.ALL]: 'Across multiple speaker turns',
  [WhereToHappen.TURN]: 'Within a single speaker turn',
}

export enum WhenShouldHappen {
  ANYWHERE = 'Anywhere in the call',
  BEGINNING = 'At the Beginning of the Call',
  END = 'At the End of the Call',
}

export enum ToWhomDoesItApply {
  SPEAKER = 'SPEAKER',
  AGENT = 'AGENT',
  CUSTOMER = 'CUSTOMER',
}

export const ToWhomDoesItApplyLabels = {
  [ToWhomDoesItApply.SPEAKER]: 'Anyone',
  [ToWhomDoesItApply.AGENT]: 'Agent',
  [ToWhomDoesItApply.CUSTOMER]: 'Customer',
}

export enum CategoryCreateType {
  ALERT = 'Alert',
  CHECKPOINT = 'Checkpoint',
  CONCEPT = 'Concept',
}

export enum CategoryCreateTrigger {
  EXPECTED = 'EXPECTED',
  UNEXPECTED = 'UNEXPECTED',
  INFO = 'INFO',
}

export const CategoryCreateTriggerLabels = {
  [CategoryCreateTrigger.EXPECTED]: 'Expected',
  [CategoryCreateTrigger.UNEXPECTED]: 'Unexpected',
  [CategoryCreateTrigger.INFO]: 'Info',
}
