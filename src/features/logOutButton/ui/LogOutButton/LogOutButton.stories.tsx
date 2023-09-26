import type { Meta, StoryObj } from '@storybook/react'
import { fireEvent, waitFor, within } from '@storybook/testing-library'
import App from 'app/App'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { decoratePlayFunctionForLoki } from 'shared/config/storybook/PlayFunctionDecorator/decorateTargetForLoki'
import { BUTTON_TEXT } from 'shared/defaults/text'
import { reactRouterParameters } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'features/LogOutButton',
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: RoutePaths.menu },
    }),
  },
  component: App,
} satisfies Meta<typeof App>
export default meta
type Story = StoryObj<typeof meta>

const clickOnLogOutButton = decoratePlayFunctionForLoki(async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  await waitFor(async () => {
    const resetPasswordButton = await canvas.findByRole('button', {
      name: BUTTON_TEXT.LOGOUT,
    })
    fireEvent.click(resetPasswordButton)
  })
})

export const PRIMARY: Story = {}
export const OPENED_MODAL: Story = {
  play: clickOnLogOutButton,
}
