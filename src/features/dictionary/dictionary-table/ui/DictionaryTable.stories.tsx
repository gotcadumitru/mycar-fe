import { Meta, StoryObj } from '@storybook/react'
import DictionaryTable from './DictionaryTable'

const meta = {
  title: 'feature/dictionary/dictionary-table/DictionaryTable',
  component: DictionaryTable,
} satisfies Meta<typeof DictionaryTable>

export default meta
type Story = StoryObj<typeof meta>

export const DictionaryTableMain: Story = {}
