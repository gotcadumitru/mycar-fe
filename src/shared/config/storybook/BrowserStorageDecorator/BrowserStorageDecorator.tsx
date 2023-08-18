import { FC } from 'react'
import mockLocalStorage from 'shared/lib/tests/mockLocalStorage'

export const BrowserStorageDecorator = (StoryComponent: FC) => {
  mockLocalStorage()

  return <StoryComponent />
}
