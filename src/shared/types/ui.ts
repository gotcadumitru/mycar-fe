import { FetchStatus } from 'shared/api'

export type RequestMessageType = {
  [FetchStatus.IN_PROGRESS]: string
  [FetchStatus.SUCCESS]: string
  [FetchStatus.FAIL]: string
}
