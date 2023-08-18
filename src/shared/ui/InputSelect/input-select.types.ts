import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { InputOptionType, ValueFullType } from 'shared/ui/Input'
import type { LabelProps } from 'shared/ui/Label'

interface InputSelectPropsType
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  errorMessage?: string
  containerClassName?: string
  className?: string
  disabled?: boolean
  options: InputOptionType<number | string>[]
  valueFullType?: ValueFullType<string>
  isFirstOptionDisabled?: boolean
}

export type InputSelectWithLabel = InputSelectPropsType & LabelProps
