import type { Meta, StoryObj } from '@storybook/react'
import { fireEvent, waitFor, within } from '@storybook/testing-library'
import App from 'app/App'
import { vehicleDocumentToFormData } from 'enteties/vehicleDocument'
import { RoutePaths, RoutePathsFn } from 'shared/config/router/RoutePaths'
import { decoratePlayFunctionForLoki } from 'shared/config/storybook/PlayFunctionDecorator/decorateTargetForLoki'
import { ReduxStoreDecorator } from 'shared/config/storybook/ReduxStoreDecorator/ReduxStoreDecorator'
import reduxMockStateForTesting from 'shared/defaults/tests/mockDataForTesting'
import { mockVehicleDocuments } from 'shared/defaults/tests/mockVehicleDocuments'
import { mockVehicles } from 'shared/defaults/tests/mockVehicles'
import { BUTTON_TEXT } from 'shared/defaults/text'
import { reactRouterParameters } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'pages/AddVehicleDocumentPage',
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: RoutePathsFn.getNewVehicleDocument(mockVehicles[0].uid) },
    }),
  },
  component: App,
} satisfies Meta<typeof App>
export default meta
type Story = StoryObj<typeof meta>

const clickOnSaveButton = decoratePlayFunctionForLoki(async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  await waitFor(async () => {
    const saveButton = await canvas.findByText(BUTTON_TEXT.SAVE)
    fireEvent.click(saveButton)
  })
})

export const PRIMARY: Story = {}
export const COMPLETED: Story = {
  decorators: [
    ReduxStoreDecorator({
      ...reduxMockStateForTesting,
      vehicleDocumentEdit: {
        ...reduxMockStateForTesting.vehicleDocumentEdit,
        formFields: vehicleDocumentToFormData(mockVehicleDocuments[0]),
      },
    }),
  ],
  play: decoratePlayFunctionForLoki(async () => {}),
}

export const WITH_ERRORS: Story = {
  play: clickOnSaveButton,
}
