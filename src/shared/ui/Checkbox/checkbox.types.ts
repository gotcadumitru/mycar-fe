import { HTMLProps } from 'react'

export type CheckboxOptionType<LabelType> = {
  id: string | number
  label: LabelType
}

export interface CheckboxPropsType extends HTMLProps<HTMLInputElement> {
  label?: string
  isGrey?: boolean
}
