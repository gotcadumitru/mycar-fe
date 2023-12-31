import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps, ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

export enum ButtonCategoryType {
  BUTTON = 'BUTTON',
  LINK = 'LINK',
  EXTERNAL_LINK = 'EXTERNAL_LINK',
}
export enum ButtonTheme {
  EMPTY = 'EMPTY',
  OUTLINE_RED = 'OUTLINE_RED',
  OUTLINE_BLUE = 'OUTLINE_BLUE',
}
export enum ButtonMargin {
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  TOP = 'TOP',
}

export type ButtonConditionalPropsType = {
  theme?: ButtonTheme
  margin?: ButtonMargin
  icon?: ReactNode
} & (
  | ({
      category?: ButtonCategoryType.BUTTON
    } & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>)
  | ({
      category: ButtonCategoryType.LINK
    } & LinkProps)
  | ({
      category: ButtonCategoryType.EXTERNAL_LINK
    } & HTMLProps<HTMLAnchorElement>)
)
