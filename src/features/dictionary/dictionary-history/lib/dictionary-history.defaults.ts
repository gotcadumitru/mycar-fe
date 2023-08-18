import createArrayFromTo from 'shared/lib/utils/createArrayFromTo'
import type { TableHeaderItem } from 'shared/ui/Table'

export const HISTORY_ON_TABLE_PAGE = 10

export const dictionaryHistoryMockData = createArrayFromTo(0, 101).map((n) => ({
  id: n,
  dateTime: `${n}-Aug-22`,
  dictionaryTerm: `Splat - ${n}`,
  createdBy: `Harry Mound -  ${n}`,
  modifiedBy: `Kelly Scribbler - ${n}`,
  changelog: `${n} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. but also the leap into electronic typesetting. remaining essentially unchanged.`,
}))
export const dictionaryHistoryTableHeaderItems: TableHeaderItem[] = [
  {
    id: 'Date/time',
    element: 'Date/time',
    width: '100px',
  },
  {
    id: 'Dictionary Term',
    element: 'Dictionary Term',
    width: '150px',
  },
  {
    id: 'Created By',
    element: 'Created By',
    width: '1fr',
  },
  {
    id: 'Modified By',
    element: 'Modified By',
    width: '1fr',
  },
  {
    id: 'Changelog',
    element: 'Changelog',
    width: '1fr',
  },
]
