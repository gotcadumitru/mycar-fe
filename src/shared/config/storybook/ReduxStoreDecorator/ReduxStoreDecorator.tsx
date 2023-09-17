import { StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/main.scss'
import { FC } from 'react'
import reduxMockStateForTesting from 'shared/defaults/tests/mockDataForTesting'

export const ReduxStoreDecorator =
  (preloadedState = reduxMockStateForTesting) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: FC) =>
    (
      <StoreProvider initialState={preloadedState}>
        <StoryComponent />
      </StoreProvider>
    )
