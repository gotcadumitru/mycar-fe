import type { Meta, StoryObj } from '@storybook/react'
import App from 'app/App'
import { RoutePaths, RoutePathsFn } from 'shared/config/router/RoutePaths'
import { mockVehicles } from 'shared/defaults/tests/mockVehicles'
import { reactRouterParameters } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'pages/EditVehiclePage',
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: RoutePathsFn.getEditVehicle(mockVehicles[0].uid) },
    }),
  },
  component: App,
} satisfies Meta<typeof App>
export default meta
type Story = StoryObj<typeof meta>

export const PRIMARY: Story = {}
