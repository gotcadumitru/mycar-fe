import { Meta, StoryObj } from '@storybook/react'
import { ReduxStoreDecorator } from 'shared/config/storybook/ReduxStoreDecorator/ReduxStoreDecorator'
import reduxMockStateForTesting from 'shared/defaults/tests/mockDataForTesting'
import { SidebarBurger } from '../SidebarBurger/SidebarBurger'
import Sidebar from './Sidebar'

const meta = {
  title: 'shared/Sidebar',
  render: (args) => (
    <div>
      <SidebarBurger />
      <Sidebar {...args} />
    </div>
  ),
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>
export const SHOW: Story = {
  decorators: [
    ReduxStoreDecorator({
      ...reduxMockStateForTesting,
      ui: {
        ...reduxMockStateForTesting.ui,
        isSidebarShow: true,
      },
    }),
  ],
}
