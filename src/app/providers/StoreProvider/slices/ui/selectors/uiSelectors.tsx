import type { StateSchema } from 'app/providers/StoreProvider'
import { FetchStatus } from 'shared/api'

export const getFetchStatus = (fetchStatus?: FetchStatus | null | undefined | false): FetchStatus =>
  fetchStatus || FetchStatus.NULL

export const selectRequestStatus = (actionName: string) => (state: StateSchema) =>
  getFetchStatus(state.ui.actionsWithFetchStatus[actionName])
