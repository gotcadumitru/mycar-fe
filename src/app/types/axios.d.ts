import 'axios'
import { RequestMessageType } from 'shared/types/ui'

declare module 'axios' {
  export interface AxiosRequestConfig {
    notification?: RequestMessageType
    toastId?: string
    retry?: boolean
  }
}
