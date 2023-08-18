import { BrowserStorageDecorator } from 'shared/config/storybook/BrowserStorageDecorator/BrowserStorageDecorator'
import { ReduxStoreDecorator } from 'shared/config/storybook/ReduxStoreDecorator/ReduxStoreDecorator'
import { SalesforceActionsDecorator } from 'shared/config/storybook/SalesforceActionsDecorator/SalesforceActionsDecorator'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { withRouter } from 'storybook-addon-react-router-v6'
import './mocks'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
}
export const decorators = [
  StyleDecorator,
  ReduxStoreDecorator(),
  withRouter,
  BrowserStorageDecorator,
  SalesforceActionsDecorator,
]
