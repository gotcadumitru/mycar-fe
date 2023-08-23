import { HTMLProps } from 'react'
import {ValueFullType} from 'shared/ui/Input';

export type CheckboxOptionType<LabelType> = {
  id: string | number
  label: LabelType
}

export interface CheckboxPropsType extends Omit<HTMLProps<HTMLInputElement>,'value'> {
  valueFullType?: ValueFullType<boolean>
  errorMessage?: string
  value?:boolean
  label?: string
  isGrey?: boolean
}
