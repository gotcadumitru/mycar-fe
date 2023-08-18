export type CreateDictionarySliceState = {
  newDictionaryFormData: DictionaryFormDataFullType
}

export type DictionaryFormDataType = {
  term: string
  language: string
  description: string
  weighting: number
}

export type DictionaryFormDataFullType = {
  [K in keyof DictionaryFormDataType]: {
    value: DictionaryFormDataType[K]
    errorMessage: string
    isRequired: boolean
  }
}
