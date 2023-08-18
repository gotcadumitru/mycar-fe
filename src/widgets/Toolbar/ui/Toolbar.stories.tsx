import { Meta, StoryObj } from '@storybook/react'
import { SidebarBurger } from 'shared/ui/Sidebar'
import { ToolbarCategoryOptionsRight } from './right-side/ToolbarCategoryOptionsRight'
import { ToolbarDictionaryOptionsRight } from './right-side/ToolbarDictionaryOptionsRight'
import Toolbar from './Toolbar'

const meta = {
  title: 'widgets/Toolbar',
  component: Toolbar,
} satisfies Meta<typeof Toolbar>

export default meta
type Story = StoryObj<typeof meta>

export const Category: Story = {
  args: {
    left: <SidebarBurger />,
    right: <ToolbarCategoryOptionsRight />,
  },
}

export const Dictionary: Story = {
  args: {
    left: <SidebarBurger />,
    right: <ToolbarDictionaryOptionsRight />,
  },
}
