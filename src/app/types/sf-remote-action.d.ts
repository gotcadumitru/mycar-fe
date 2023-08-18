import { RemoteActions } from 'shared/api'

export {}
declare global {
  interface Window {
    getSessionId: () => string
    insightsConfiguration: <T>(actionName: RemoteActions, params?: any) => Promise<T>
    InsConfig: {
      sapien: string
      categoryAPI: string
    }
  }
}
