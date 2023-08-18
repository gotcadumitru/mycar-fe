import type { UiSliceState } from 'app/providers/StoreProvider/slices/ui'
import type { CategorySliceState } from 'enteties/category'
import type { TemplateSliceState } from 'enteties/template'
import type { UserSliceState } from 'enteties/user'
import type { CreateEditCategorySliceState } from 'features/category/category-create-edit'

export interface StateSchema {
  ui: UiSliceState
  createCategory: CreateEditCategorySliceState
  createDictionary: any
  category: CategorySliceState
  user: UserSliceState
  template: TemplateSliceState
}

export type StateSchemaKey = keyof StateSchema
