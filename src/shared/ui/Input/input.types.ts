import type { InputHTMLAttributes } from 'react'
import type { LabelProps } from 'shared/ui/Label'

export type InputOptionType<LabelType> = {
  readonly value: string | number
  readonly label: LabelType
  readonly color?: string
  readonly isDisabled?: boolean
  readonly isFixed?: boolean
}

export type OnChangeMinType<T = number | string> = {
  target: {
    name: string
    value: T
  }
}

export type ValueFullType<T> = {
  value: T
  errorMessage: string
  isRequired: boolean
}

interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  containerClassName?: string
  className?: string
  disabled?: boolean
  valueFullType?: ValueFullType<string>
  uiType?: InputUiType
}

export type InputWithLabelProps = InputPropsType & LabelProps
export enum InputUiType {
  SIMPLE = 'SIMPLE',
  NO_BORDER = 'NO_BORDER',
  SMALL_NO_BORDER = 'SMALL_NO_BORDER',
}
