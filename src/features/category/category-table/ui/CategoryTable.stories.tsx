/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { decoratePlayFunctionForLoki } from 'shared/config/storybook/PlayFunctionDecorator/decorateTargetForLoki'
import { ReduxStoreDecorator } from 'shared/config/storybook/ReduxStoreDecorator/ReduxStoreDecorator'
import reduxMockStateForTesting from 'shared/defaults/tests/mockDataForTesting'
import { usersFromSalesforce } from 'shared/defaults/tests/users'
import CategoryTable from './CategoryTable'

const meta = {
  title: 'feature/category/category-table/CategoryTable',
  component: CategoryTable,
  decorators: [
    ReduxStoreDecorator({
      ...reduxMockStateForTesting,
      user: {
        ...reduxMockStateForTesting.user,
        allUsersFromSalesforce: usersFromSalesforce.converted,
      },
      category: {
        ...reduxMockStateForTesting.category,
        allCategories: [],
      },
    }),
  ],
} satisfies Meta<typeof CategoryTable>

export default meta
type Story = StoryObj<typeof meta>

export const CategoryTableMainPage: Story = {}

export const CategoryEnable: Story = {
  play: decoratePlayFunctionForLoki(async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(() => {
      const enableCheckbox = canvas.getAllByTestId('toggle-status')[2]
      userEvent.click(enableCheckbox)
    })
  }),
}
export const CategoryDisable: Story = {
  play: decoratePlayFunctionForLoki(async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(() => {
      const enableCheckbox = canvas.getAllByTestId('toggle-status')[0]
      userEvent.click(enableCheckbox)
    })
  }),
}

export const CategoryDelete: Story = {
  play: decoratePlayFunctionForLoki(async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(() => {
      const enableCheckbox = canvas.getAllByTestId('delete-category')[0]
      userEvent.click(enableCheckbox)
    })
  }),
}
