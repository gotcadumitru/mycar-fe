// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import mockLocalStorage from 'shared/lib/tests/mockLocalStorage'
import getMockSalesforceRemoteActions from 'shared/lib/tests/salesforceRemoteActionMock'

global.structuredClone = (data: any) => JSON.parse(JSON.stringify(data))

window.insightsConfiguration = jest.fn((remoteAction) =>
  getMockSalesforceRemoteActions({ remoteAction }),
)

mockLocalStorage()
