export type { TemplateSliceState, TemplateFromApi, Template } from './model/types/template.types'
export { templateToEditCategoryForm } from './utils/mappers/templateMappers'
export {
  templateReducer,
  templateActions,
  fetchAllTemplatesFromApiThunk,
} from './model/slice/templateSlice'
export { TemplateActions } from './model/consts/templateConsts'
