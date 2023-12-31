import type { Meta, StoryObj } from '@storybook/react'
import App from 'app/App'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { mockVehicleDocuments } from 'shared/defaults/tests/mockVehicleDocuments'
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
