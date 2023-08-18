import type { Meta, StoryObj } from '@storybook/react'
import { ButtonTheme } from 'shared/ui/Button/button.types'

import Button from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
} satisfies Meta<typeof Button>
export default meta
type Story = StoryObj<typeof meta>

export const PRIMARY: Story = {
  args: {
    children: 'Button text',
  },
}
export const DISABLED: Story = {
  args: {
    theme: ButtonTheme.DISABLED,
    children: 'Button text',
  },
}

export const GREEN: Story = {
  args: {
    theme: ButtonTheme.GREEN,
    children: 'Button text',
  },
}

export const BLUE: Story = {
  args: {
    theme: ButtonTheme.BLUE,
    children: 'Button text',
  },
}

export const RED: Story = {
  args: {
    theme: ButtonTheme.RED,
    children: 'Button text',
  },
}

export const GREY: Story = {
  args: {
    theme: ButtonTheme.GREY,
    children: 'Button text',
  },
}

export const EMPTY: Story = {
  args: {
    theme: ButtonTheme.EMPTY,
    children: 'Button text',
  },
}
