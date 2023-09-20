/* eslint-disable @typescript-eslint/ban-ts-comment,react/display-name,no-underscore-dangle,@typescript-eslint/ban-types */
import 'app/styles/main.scss'
import { FC } from 'react'
import { mockUsers } from 'shared/defaults/tests/mockUsers'
import { mockVehicleDocuments } from 'shared/defaults/tests/mockVehicleDocuments'
import { mockVehicles } from 'shared/defaults/tests/mockVehicles'

export const WindowMockSetDecorator =
  (mocks: {} = {}) =>
  (StoryComponent: FC) => {
    // @ts-ignore
    window.__mocks__ = {
      currentUser: mockUsers[0],
      mockVehicles,
      allVehicleDocumentsByVehiclesIds: mockVehicleDocuments,
      ...mocks,
    }
    return <StoryComponent />
  }
