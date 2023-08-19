import type { UiSliceState } from 'app/providers/StoreProvider/slices/ui'
import type { CategorySliceState } from 'enteties/category'
import type { UserSliceState } from 'enteties/user'
import type { CreateEditCategorySliceState } from 'features/category/category-create-edit'

export interface StateSchema {
  ui: UiSliceState
  createCategory: CreateEditCategorySliceState
  category: CategorySliceState
  user: UserSliceState
}

export type StateSchemaKey = keyof StateSchema
