import { Meta, StoryObj } from '@storybook/react'
import { InputUiType } from 'shared/ui/Input/input.types'

import Input from './Input'

const meta = {
  title: 'shared/Input',
  component: Input,
  args: {
    label: 'Input label',
    placeholder: 'Input placeholder',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const SIMPLE: Story = {
  args: {
    uiType: InputUiType.SIMPLE,
  },
}
export const NO_BORDER: Story = {
  args: {
    uiType: InputUiType.NO_BORDER,
  },
}
export const SMALL_NO_BORDER: Story = {
  args: {
    uiType: InputUiType.SMALL_NO_BORDER,
  },
}
export const FOCUS_SIMPLE: Story = {
  args: {
    uiType: InputUiType.SIMPLE,
  },
  parameters: { pseudo: { focus: true } },
}
export const FOCUS_NO_BORDER: Story = {
  args: {
    uiType: InputUiType.NO_BORDER,
  },
  parameters: { pseudo: { focus: true } },
}

export const FOCUS_SMALL_NO_BORDER: Story = {
  args: {
    uiType: InputUiType.SMALL_NO_BORDER,
  },
  parameters: { pseudo: { focus: true } },
}

export const INFO_TEXT_SIMPLE: Story = {
  args: {
    infoText: 'Input info text',
    uiType: InputUiType.SIMPLE,
  },
}
export const INFO_TEXT_NO_BORDER: Story = {
  args: {
    infoText: 'Input info text',
    uiType: InputUiType.NO_BORDER,
  },
}

export const INFO_TEXT_SMALL_NO_BORDER: Story = {
  args: {
    infoText: 'Input info text',
    uiType: InputUiType.SMALL_NO_BORDER,
  },
}

export const ERROR_SIMPLE: Story = {
  args: {
    uiType: InputUiType.SIMPLE,
    errorMessage: 'Error message',
  },
}
export const ERROR_NO_BORDER: Story = {
  args: {
    uiType: InputUiType.NO_BORDER,
    errorMessage: 'Error message',
  },
}

export const ERROR_SMALL_NO_BORDER: Story = {
  args: {
    uiType: InputUiType.SMALL_NO_BORDER,
    errorMessage: 'Error message',
  },
}

export const DISABLED: Story = {
  args: {
    disabled: true,
  },
}
