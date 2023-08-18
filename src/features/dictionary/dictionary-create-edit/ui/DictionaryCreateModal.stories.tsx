import { Meta, StoryObj } from '@storybook/react'
import { getDictionaryFormValues } from 'features/dictionary/dictionary-create-edit'
import { ReduxStoreDecorator } from 'shared/config/storybook/ReduxStoreDecorator/ReduxStoreDecorator'
import reduxMockStateForTesting from 'shared/defaults/tests/mockDataForTesting'
import { OpenMode } from 'shared/types/types'
import DictionaryCreateModal from './DictionaryCreateModal'

const meta = {
  title: 'feature/dictionary/dictionary-create-edit/DictionaryCreateModal',
  component: DictionaryCreateModal,
  args: {
    id: null,
    mode: OpenMode.HISTORY,
  },
  parameters: {
    chromatic: { disable: true },
  },
} satisfies Meta<typeof DictionaryCreateModal>

export default meta
type Story = StoryObj<typeof meta>

// export const DictionaryCreate: Story = {
//   decorators: [
//     ReduxStoreDecorator({
//       ...reduxMockStateForTesting,
//       createDictionary: {
//         newDictionaryFormData: getDictionaryFormValues({}),
//       },
//     }),
//   ],
// }
