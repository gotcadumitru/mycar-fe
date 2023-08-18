import type { DictionaryFormDataFullType, DictionaryFormDataType } from './createDictionary.types'

export const getDictionaryFormValues = ({
  term = '',
  description = '',
  weighting = 0,
  language = '',
}: Partial<DictionaryFormDataType>): DictionaryFormDataFullType => ({
  term: {
    value: term,
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
    isRequired: true,
  },
  weighting: {
    value: weighting,
    errorMessage: '',
    isRequired: true,
  },
})
