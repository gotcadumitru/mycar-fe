import { FC } from 'react'
import getMockSalesforceRemoteActions from 'shared/lib/tests/salesforceRemoteActionMock'

export const SalesforceActionsDecorator = (StoryComponent: FC) => {
  window.insightsConfiguration = (remoteAction) => getMockSalesforceRemoteActions({ remoteAction })
  return <StoryComponent />
}
