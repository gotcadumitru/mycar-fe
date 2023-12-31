import type { Meta, StoryObj } from '@storybook/react'
import App from 'app/App'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { WindowMockSetDecorator } from 'shared/config/storybook/WindowMockSetDecorator/WindowMockSetDecorator'
import { reactRouterParameters } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'pages/PanelPage',
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: RoutePaths.panel },
    }),
  },
  component: App,
} satisfies Meta<typeof App>
export default meta
type Story = StoryObj<typeof meta>

export const PRIMARY: Story = {}
export const NO_VEHICLES: Story = {
  decorators: [
    WindowMockSetDecorator({
      mockVehicles: [],
    }),
  ],
}
