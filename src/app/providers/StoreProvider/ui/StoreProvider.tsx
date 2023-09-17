import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import type { StateSchema } from '../types/stateSchema'
import type { StoreProviderProps } from './types/StoreProvider.types'

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, storeForTesting } = props
  const store = createReduxStore(initialState as StateSchema)

  return <Provider store={storeForTesting || store}>{children}</Provider>
}
