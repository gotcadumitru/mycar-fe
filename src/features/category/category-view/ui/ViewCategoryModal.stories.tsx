import { Meta, StoryObj } from '@storybook/react'
import ViewCategoryModal from './ViewCategoryModal'

const meta = {
  title: 'feature/category/category-view/ViewCategoryModal',
  component: ViewCategoryModal,
  args: {
    id: null,
  },
} satisfies Meta<typeof ViewCategoryModal>

export default meta
type Story = StoryObj<typeof meta>

export const ViewCategory: Story = {}
