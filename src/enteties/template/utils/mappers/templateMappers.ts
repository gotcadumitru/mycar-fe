import {
  getCategoryFormValues,
  getHowLongTime,
  getWhenShouldItHappen,
  WhereToHappen,
} from 'enteties/category'
import type { Template, TemplateFromApi } from '../../model/types/template.types'

export const mapTemplatesFromApi = (template: TemplateFromApi[]): Template[] =>
  template.map(({ categoryKey, data, ...category }) => ({
    ...category,
    ...data,
    id: categoryKey,
  }))

export const templateToEditCategoryForm = (template: Template) =>
  getCategoryFormValues({
    name: template.name,
    description: template.description,
    language: template.language,
    whereNeedToHappen: WhereToHappen.TURN,
    whenShouldItHappen: getWhenShouldItHappen(template.periodStart, template.periodEnd),
    howLongTime: getHowLongTime(template.periodStart, template.periodEnd),
    wordsOrPhrases: template.definitionString,
    toWhomDoesItApply: template.channel,
  })
