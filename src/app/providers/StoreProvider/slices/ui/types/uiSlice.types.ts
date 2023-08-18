import { FetchStatus } from 'shared/api'

type ActionWithFetchStatusType = {
  [key: string]: FetchStatus
}

export type UiSliceState = {
  actionsWithFetchStatus: ActionWithFetchStatusType
  isSidebarShow: boolean
}
