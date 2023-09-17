import type { RequestMessageType } from 'shared/types/ui'
import type { AppDispatch } from '../config/store'
import type { StateSchema } from './stateSchema'

export interface ThunkExtraArg {
  api?: any
}

export type ThunkValue<T> = T & { notification?: RequestMessageType | false }

export interface ThunkConfig<T> {
  rejectValue: T
  dispatch: AppDispatch
  state: StateSchema
  extra: ThunkExtraArg
}
