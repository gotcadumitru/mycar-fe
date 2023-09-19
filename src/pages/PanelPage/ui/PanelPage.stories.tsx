import type { Meta, StoryObj } from '@storybook/react'
import App from 'app/App'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { reactRouterParameters } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'features/pages/PanelPage',
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: RoutePaths.panel },
    }),
  },

  component: App,
} satisfies Meta<typeof App>
export default meta
type Story = StoryObj<typeof meta>

export const PRIMARY: Story = {
  args: {
    children: 'Button text',
  },
}
