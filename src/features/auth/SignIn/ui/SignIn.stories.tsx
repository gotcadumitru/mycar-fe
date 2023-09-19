import type { Meta, StoryObj } from '@storybook/react'
import { fireEvent, waitFor, within } from '@storybook/testing-library'
import App from 'app/App'
import { SignInFormType } from 'features/auth/SignIn/types/singInTypes'
import { getSignInFormValues } from 'features/auth/SignIn/utils/signInUtils'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { decoratePlayFunctionForLoki } from 'shared/config/storybook/PlayFunctionDecorator/decorateTargetForLoki'
import { ReduxStoreDecorator } from 'shared/config/storybook/ReduxStoreDecorator/ReduxStoreDecorator'
import { WindowMockSetDecorator } from 'shared/config/storybook/WindowMockSetDecorator/WindowMockSetDecorator'
import reduxMockStateForTesting from 'shared/defaults/tests/mockDataForTesting'
import { mockUsers } from 'shared/defaults/tests/mockUsers'
import { BUTTON_TEXT } from 'shared/defaults/text'
import { reactRouterParameters } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'features/auth/SignIn',
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: RoutePaths.sign_in },
    }),
  },
  decorators: [WindowMockSetDecorator({ currentUser: null })],

  component: App,
} satisfies Meta<typeof App>
export default meta
type Story = StoryObj<typeof meta>

const getSignInReduxFormDataDecorator = (formData: Partial<SignInFormType>) => {
  return ReduxStoreDecorator({
    ...reduxMockStateForTesting,
    auth: {
      ...reduxMockStateForTesting.auth,
      signInForm: getSignInFormValues({
        email: mockUsers[0].email,
        password: 'password',
        ...formData,
      }),
    },
  })
}

const clickOnRegisterButton = decoratePlayFunctionForLoki(async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  await waitFor(async () => {
    const registerButton = await canvas.findByText(BUTTON_TEXT.AUTH)
    fireEvent.click(registerButton)
  })
})

export const SigInDefault: Story = {}

export const SigInCompleted: Story = {
  decorators: [getSignInReduxFormDataDecorator({})],
}

export const SigInWithErrors: Story = {
  play: clickOnRegisterButton,
}
