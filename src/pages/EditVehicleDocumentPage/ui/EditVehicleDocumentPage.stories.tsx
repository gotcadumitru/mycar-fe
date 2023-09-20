import type { Meta, StoryObj } from '@storybook/react'
import { fireEvent, waitFor, within } from '@storybook/testing-library'
import App from 'app/App'
import { vehicleDocumentToFormData } from 'enteties/vehicleDocument'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { decoratePlayFunctionForLoki } from 'shared/config/storybook/PlayFunctionDecorator/decorateTargetForLoki'
import { ReduxStoreDecorator } from 'shared/config/storybook/ReduxStoreDecorator/ReduxStoreDecorator'
import reduxMockStateForTesting from 'shared/defaults/tests/mockDataForTesting'
import { mockVehicleDocuments } from 'shared/defaults/tests/mockVehicleDocuments'
import { mockVehicles } from 'shared/defaults/tests/mockVehicles'
import { BUTTON_TEXT } from 'shared/defaults/text'
import { reactRouterParameters } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'pages/EditVehicleDocumentPage',
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: `${RoutePaths.edit_vehicle_document}/${mockVehicleDocuments[0].uid}` },
    }),
  },
  component: App,
} satisfies Meta<typeof App>
export default meta
type Story = StoryObj<typeof meta>

export const PRIMARY: Story = {}
