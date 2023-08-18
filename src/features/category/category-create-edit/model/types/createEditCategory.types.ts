import { ToWhomDoesItApply, WhenShouldHappen, WhereToHappen } from 'enteties/category'
import { OpenMode } from 'shared/types/types'

export type CreateEditCategorySliceState = {
  newCategoryFormData: CategoryFormDataFullType
}
export type CategoryFormDataType = {
  name: string
  language: string
  description: string
  wordsOrPhrases: string
  toWhomDoesItApply: ToWhomDoesItApply
  whenShouldItHappen: WhenShouldHappen
  howLongTime: number
  whereNeedToHappen: WhereToHappen
  users: string[]
  groups: string[]
}
export type CategoryFormDataFullType = {
  [K in keyof CategoryFormDataType]: {
    value: CategoryFormDataType[K]
    errorMessage: string
    isRequired: boolean
  }
}

export type CreateCategoryModalProps = {
  id: string | null
  mode: OpenMode
}
