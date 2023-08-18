import { Language, ToWhomDoesItApply } from 'enteties/category'
import type { Template, TemplateFromApi } from 'enteties/template'

const templatesFromApiMaxType: TemplateFromApi[] = [
  {
    categoryKey: '1',
    name: 'Social Media 1',
    description: 'A simple description for templates 1',
    language: Language.ENGLISH,
    data: { channel: ToWhomDoesItApply.SPEAKER, periodStart: 0, periodEnd: 30000 },
    definitionString:
      '("facebook*" OR "face book" OR "twitter" OR "linkedin" OR "social" OR "social media" OR "Instagram" OR "snapchat" OR "snap chat" OR "tweet" OR "post to social")',
  },
  {
    categoryKey: '2',
    name: 'Social Media 2',
    description: 'A simple description for templates 2',
    language: Language.GERMAN,
    data: { channel: ToWhomDoesItApply.AGENT, periodStart: -30000, periodEnd: 0 },
    definitionString:
      '("facebook*" OR "face book" OR "twitter" OR "linkedin" OR "social" OR "social media" OR "Instagram" OR "snapchat" OR "snap chat" OR "tweet" OR "post to social")',
  },
  {
    categoryKey: '3',
    name: 'Social Media 3',
    description: 'A simple description for templates 3',
    language: Language.ITALIAN,
    data: { channel: ToWhomDoesItApply.CUSTOMER, periodStart: 0, periodEnd: undefined },
    definitionString:
      '("facebook*" OR "face book" OR "twitter" OR "linkedin" OR "social" OR "social media" OR "Instagram" OR "snapchat" OR "snap chat" OR "tweet" OR "post to social")',
  },
]

const templatesConvertedMaxType: Template[] = templatesFromApiMaxType.map((templateFromApi) => ({
  id: templateFromApi.categoryKey,
  name: templateFromApi.name,
  description: templateFromApi.description,
  language: templateFromApi.language,
  channel: templateFromApi.data.channel,
  periodStart: templateFromApi.data.periodStart,
  periodEnd: templateFromApi.data.periodEnd,
  definitionString: templateFromApi.definitionString,
}))
export const templatesFromCategoryApiMaxType = {
  originalFromRequest: templatesFromApiMaxType,
  converted: templatesConvertedMaxType,
}
