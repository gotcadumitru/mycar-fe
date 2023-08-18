import type { StateSchema } from 'app/providers/StoreProvider'
import { FetchStatus } from 'shared/api'

export const selectRequestStatus = (actionName: string) => (state: StateSchema) =>
  state.ui.actionsWithFetchStatus[actionName] || FetchStatus.NULL
