import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import type { StateSchema } from 'app/providers/StoreProvider'
import type { ReactNode } from 'react'

export interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  storeForTesting?: ToolkitStore
}
