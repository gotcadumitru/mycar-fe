import 'app/styles/main.scss'

import { FC } from 'react'
import { mockUsers } from 'shared/defaults/tests/mockUsers'

// eslint-disable-next-line react/display-name
export const WindowMockSetDecorator =
  (mocks: {} = {}) =>
  (StoryComponent: FC) => {
    window.__mocks__ = { currentUser: mockUsers[0], ...mocks }
    return <StoryComponent />
  }
