import { Meta, StoryObj } from '@storybook/react'
import { fireEvent, userEvent, waitFor, within } from '@storybook/testing-library'
import { WhenShouldHappen } from 'enteties/category'
import { decoratePlayFunctionForLoki } from 'shared/config/storybook/PlayFunctionDecorator/decorateTargetForLoki'
import { categoriesFromCategoryApiMinType } from 'shared/defaults/tests/categories'
import { templatesFromCategoryApiMaxType } from 'shared/defaults/tests/templates'
import { BUTTON_TEXT, INPUT_LABEL } from 'shared/defaults/text'
import { OpenMode } from 'shared/types/types'
import CreateEditCategoryModal from './CreateEditCategoryModal'

const meta = {
  title: 'feature/category/category-create-edit/CreateCategoryModal',
  component: CreateEditCategoryModal,
} satisfies Meta<typeof CreateEditCategoryModal>

export default meta
type Story = StoryObj<typeof meta>
export const CreateCategory: Story = {
  args: {
    id: null,
    mode: OpenMode.CREATE,
  },
}

const hoverOverTooltip = (tooltipNumber: number) =>
  decoratePlayFunctionForLoki(async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(() => {
      const enableCheckbox = canvas.getAllByTestId('InfoIcon')[tooltipNumber]
      userEvent.hover(enableCheckbox)
    })
  })

export const CreateCategoryNameTooltip: Story = {
  args: {
    id: null,
    mode: OpenMode.CREATE,
  },
  play: hoverOverTooltip(0),
}

export const CreateCategoryLanguageTooltip: Story = {
  args: {
    id: null,
    mode: OpenMode.CREATE,
  },
  play: hoverOverTooltip(1),
}
export const CreateCategoryDescriptionTooltip: Story = {
  args: {
    id: null,
    mode: OpenMode.CREATE,
  },
  play: hoverOverTooltip(2),
}

export const CreateCategoryWordsAndPhrasesTooltip: Story = {
  args: {
    id: null,
    mode: OpenMode.CREATE,
  },
  play: hoverOverTooltip(3),
}

export const CreateCategoryApplyToTooltip: Story = {
  args: {
    id: null,
    mode: OpenMode.CREATE,
  },
  play: hoverOverTooltip(4),
}

export const CreateCategoryMatchTooltip: Story = {
  args: {
    id: null,
    mode: OpenMode.CREATE,
  },
  play: hoverOverTooltip(5),
}

export const CreateCategoryWhatPointTooltip: Story = {
  args: {
    id: null,
    mode: OpenMode.CREATE,
  },
  play: hoverOverTooltip(6),
}

export const EditCategory: Story = {
  args: {
    id: categoriesFromCategoryApiMinType.converted[0].id,
    mode: OpenMode.EDIT,
  },
}

export const CloneCategory: Story = {
  args: {
    id: categoriesFromCategoryApiMinType.converted[0].id,
    mode: OpenMode.CLONE,
  },
}

export const CategoryFromTemplate: Story = {
  args: {
    id: templatesFromCategoryApiMaxType.converted[0].id,
    mode: OpenMode.CREATE_FROM_TEMPLATE,
  },
}

export const CreateCategoryWithErrors: Story = {
  args: {
    id: null,
    mode: OpenMode.CREATE,
  },

  play: decoratePlayFunctionForLoki(async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitFor(async () => {
      const whenShouldHappenSelect = canvas.getByLabelText(
        new RegExp(INPUT_LABEL.WHEN_SHOULD_HAPPEN),
      )
      fireEvent.change(whenShouldHappenSelect, { target: { value: WhenShouldHappen.BEGINNING } })
      const saveButton = await canvas.findByText(BUTTON_TEXT.SAVE)
      userEvent.click(saveButton)
    })
  }),
}
