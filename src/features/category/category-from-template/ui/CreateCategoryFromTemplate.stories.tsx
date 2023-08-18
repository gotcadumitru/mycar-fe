import { Meta, StoryObj } from '@storybook/react'
import { ReduxStoreDecorator } from 'shared/config/storybook/ReduxStoreDecorator/ReduxStoreDecorator'
import reduxMockStateForTesting from 'shared/defaults/tests/mockDataForTesting'
import { templatesFromCategoryApiMaxType } from 'shared/defaults/tests/templates'
import CreateCategoryFromTemplate from './CreateCategoryFromTemplate'

const meta = {
  title: 'feature/category/category-from-template/CreateCategoryFromTemplate',
  component: CreateCategoryFromTemplate,
} satisfies Meta<typeof CreateCategoryFromTemplate>

export default meta
type Story = StoryObj<typeof meta>

export const CreateFromTemplate: Story = {
  decorators: [
    ReduxStoreDecorator({
      ...reduxMockStateForTesting,
      template: {
        ...reduxMockStateForTesting.template,
        allTemplates: templatesFromCategoryApiMaxType.converted,
      },
    }),
  ],
}
