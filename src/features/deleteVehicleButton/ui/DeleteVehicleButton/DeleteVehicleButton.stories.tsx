import type { Meta, StoryObj } from '@storybook/react'
import { fireEvent, waitFor, within } from '@storybook/testing-library'
import { decoratePlayFunctionForLoki } from 'shared/config/storybook/PlayFunctionDecorator/decorateTargetForLoki'
import { mockVehicles } from 'shared/defaults/tests/mockVehicles'
import DeleteVehicleButton from './DeleteVehicleButton'

const meta = {
  title: 'features/deleteVehicleButton/DeleteVehicleButton',
  component: DeleteVehicleButton,
  args: {
    vehicleId: mockVehicles[0].uid,
  },
} satisfies Meta<typeof DeleteVehicleButton>
export default meta
type Story = StoryObj<typeof meta>

const clickOnForgotPasswordButton = decoratePlayFunctionForLoki(async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  await waitFor(async () => {
    const resetPasswordButton = await canvas.findByTestId('delete-vehicle-button')
    fireEvent.click(resetPasswordButton)
  })
})

export const DeleteVehicleButtonDefault: Story = {}

export const DeleteVehicleButtonOpenedModal: Story = {
  play: clickOnForgotPasswordButton,
}
