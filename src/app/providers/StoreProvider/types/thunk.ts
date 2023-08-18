import type { AxiosInstance } from 'axios'
import type { RequestMessageType } from 'shared/types/ui'
import type { AppDispatch } from '../config/store'
import type { StateSchema } from './stateSchema'

export interface ThunkExtraArg {
  categoryAPI: AxiosInstance
  sapienAPI: AxiosInstance
}

export type ThunkValue<T> = T & { notification?: RequestMessageType | false }

export interface ThunkConfig<T> {
  rejectValue: T
  dispatch: AppDispatch
  state: StateSchema
  extra: ThunkExtraArg
}
