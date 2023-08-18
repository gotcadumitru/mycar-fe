import { Language, ToWhomDoesItApply } from 'enteties/category'

export type TemplateSliceState = {
  allTemplates: Template[]
}

export type Template = {
  id: string
  definitionString: string
  language: Language
  name: string
  description: string
  channel: ToWhomDoesItApply
  periodStart: number
  periodEnd?: number
}

export type TemplateFromApi = {
  categoryKey: string
  definitionString: string
  language: Language
  description: string
  name: string
  data: {
    channel: ToWhomDoesItApply
    periodStart: number
    periodEnd?: number
  }
}
