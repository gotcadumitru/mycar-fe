import { Meta, StoryObj } from '@storybook/react'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { ReduxStoreDecorator } from 'shared/config/storybook/ReduxStoreDecorator/ReduxStoreDecorator'
import reduxMockStateForTesting from 'shared/defaults/tests/mockDataForTesting'
import App from './App'

const meta = {
  title: 'app/App',
  component: App,
} satisfies Meta<typeof App>

export default meta

type Story = StoryObj<typeof meta>

export const CategoryTablePage: Story = {
  parameters: {
    reactRouter: {
      browserPath: RoutePaths.category,
    },
  },
  decorators: [
    ReduxStoreDecorator({
      ...reduxMockStateForTesting,
      category: {
        ...reduxMockStateForTesting.category,
        allCategories: [],
      },
    }),
  ],
}

export const DictionaryTablePage: Story = {
  parameters: {
    reactRouter: {
      browserPath: RoutePaths.dictionary,
    },
  },
}
