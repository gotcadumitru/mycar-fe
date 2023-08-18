import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps } from 'react'
import { LinkProps } from 'react-router-dom'

export enum ButtonCategoryType {
  BUTTON = 'BUTTON',
  LINK = 'LINK',
  EXTERNAL_LINK = 'EXTERNAL_LINK',
}
export enum ButtonTheme {
  EMPTY = 'EMPTY',
  DISABLED = 'DISABLED',
  RED = 'RED',
  GREY = 'GREY',
  GREEN = 'GREEN',
  BLUE = 'BLUE',
}

export enum ButtonDisplayType {
  DEFAULT = 'DEFAULT',
  CONTENTS = 'CONTENTS',
}
export enum ButtonSize {
  NORMAL_SIZE = 'NORMAL_SIZE',
  INPUT_SIZE = 'INPUT_SIZE',
}

export type ButtonConditionalPropsType = {
  theme?: ButtonTheme
  size?: ButtonSize
  displayType?: ButtonDisplayType
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
