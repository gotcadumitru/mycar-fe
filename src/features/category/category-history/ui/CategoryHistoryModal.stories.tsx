import { Meta, StoryObj } from '@storybook/react'
import { OpenMode } from 'shared/types/types'
import CategoryHistoryModal from './CategoryHistoryModal'

const meta = {
  title: 'feature/category/category-history/CategoryHistoryModal',
  component: CategoryHistoryModal,
  args: {
    id: null,
    mode: OpenMode.HISTORY,
  },
} satisfies Meta<typeof CategoryHistoryModal>

export default meta
type Story = StoryObj<typeof meta>

export const CategoryHistory: Story = {}
