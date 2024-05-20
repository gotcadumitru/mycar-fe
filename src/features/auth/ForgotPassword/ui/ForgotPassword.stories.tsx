import type { Meta, StoryObj } from '@storybook/react'
import { fireEvent, waitFor, within } from '@storybook/testing-library'
import App from 'app/App'
import { ForgotPasswordFormType } from 'features/auth/ForgotPassword/types/forgotPasswordTypes'
import { getForgotPasswordFormValues } from 'features/auth/ForgotPassword/utils/forgotPasswordUtils'
import { RoutePathsFn } from 'shared/config/router/RoutePaths'
import { decoratePlayFunctionForLoki } from 'shared/config/storybook/PlayFunctionDecorator/decorateTargetForLoki'
import { ReduxStoreDecorator } from 'shared/config/storybook/ReduxStoreDecorator/ReduxStoreDecorator'
import { WindowMockSetDecorator } from 'shared/config/storybook/WindowMockSetDecorator/WindowMockSetDecorator'
import reduxMockStateForTesting from 'shared/defaults/tests/mockDataForTesting'
import { mockUsers } from 'shared/defaults/tests/mockUsers'
import { BUTTON_TEXT } from 'shared/defaults/text'
import { reactRouterParameters } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'features/auth/ForgotPassword',
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: RoutePathsFn.getForgotPassword() },
    }),
  },
  decorators: [WindowMockSetDecorator({ currentUser: null })],

  component: App,
} satisfies Meta<typeof App>
export default meta
type Story = StoryObj<typeof meta>

const getForgotPasswordReduxFormDataDecorator = (formData: Partial<ForgotPasswordFormType>) =>
  ReduxStoreDecorator({
    ...reduxMockStateForTesting,
    auth: {
      ...reduxMockStateForTesting.auth,
      forgotPasswordForm: getForgotPasswordFormValues({
        email: mockUsers[0].email,
        ...formData,
      }),
    },
  })

const clickOnForgotPasswordButton = decoratePlayFunctionForLoki(async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  await waitFor(async () => {
    const resetPasswordButton = await canvas.findByText(BUTTON_TEXT.RESET_PASSWORD)
    fireEvent.click(resetPasswordButton)
  })
})

export const ForgotPasswordDefault: Story = {}

export const ForgotPasswordCompleted: Story = {
  decorators: [getForgotPasswordReduxFormDataDecorator({})],
}

export const ForgotPasswordWithErrors: Story = {
  play: clickOnForgotPasswordButton,
}
