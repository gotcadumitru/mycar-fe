import { Meta, StoryObj } from '@storybook/react'
import { OpenMode } from 'shared/types/types'
import DictionaryHistoryModal from './DictionaryHistoryModal'

const meta = {
  title: 'feature/dictionary/dictionary-history/DictionaryHistoryModal',
  component: DictionaryHistoryModal,
  args: {
    id: null,
    mode: OpenMode.HISTORY,
  },
} satisfies Meta<typeof DictionaryHistoryModal>

export default meta
type Story = StoryObj<typeof meta>
export const DictionaryHistoryTemplate: Story = {}
