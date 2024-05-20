import type { Meta, StoryObj } from '@storybook/react'
import { fireEvent, waitFor, within } from '@storybook/testing-library'
import App from 'app/App'
import { SignUpFormType } from 'features/auth/SignUp/types/signUpTypes'
import { getSignUpFormValues } from 'features/auth/SignUp/utils/signUpUtils'
import { RoutePathsFn } from 'shared/config/router/RoutePaths'
import { decoratePlayFunctionForLoki } from 'shared/config/storybook/PlayFunctionDecorator/decorateTargetForLoki'
import { ReduxStoreDecorator } from 'shared/config/storybook/ReduxStoreDecorator/ReduxStoreDecorator'
import { WindowMockSetDecorator } from 'shared/config/storybook/WindowMockSetDecorator/WindowMockSetDecorator'
import reduxMockStateForTesting from 'shared/defaults/tests/mockDataForTesting'
import { mockUsers } from 'shared/defaults/tests/mockUsers'
import { BUTTON_TEXT } from 'shared/defaults/text'
import { reactRouterParameters } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'features/auth/SignUp',
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: RoutePathsFn.getSignUp() },
    }),
  },
  decorators: [WindowMockSetDecorator({ currentUser: null })],

  component: App,
} satisfies Meta<typeof App>
export default meta
type Story = StoryObj<typeof meta>

const getSignUpReduxFormDataDecorator = (formData: Partial<SignUpFormType>) =>
  ReduxStoreDecorator({
    ...reduxMockStateForTesting,
    auth: {
      ...reduxMockStateForTesting.auth,
      signUpForm: getSignUpFormValues({
        email: mockUsers[0].email,
        confirmPassword: 'password',
        password: 'password',
        fullName: mockUsers[0].displayName,
        ...formData,
      }),
    },
  })

const clickOnRegisterButton = decoratePlayFunctionForLoki(async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  await waitFor(async () => {
    const registerButton = await canvas.findByText(BUTTON_TEXT.REGISTER)
    fireEvent.click(registerButton)
  })
})

export const SigUpDefault: Story = {}

export const SigUpCompleted: Story = {
  decorators: [getSignUpReduxFormDataDecorator({})],
}

export const SigUpWithErrors: Story = {
  play: clickOnRegisterButton,
}

export const SigUpWithDifferentPasswordError: Story = {
  decorators: [
    getSignUpReduxFormDataDecorator({
      confirmPassword: '11111111',
      password: '22222222',
    }),
  ],
  play: clickOnRegisterButton,
}
