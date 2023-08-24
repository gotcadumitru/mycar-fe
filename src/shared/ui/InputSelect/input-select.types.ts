import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import type { InputOptionType, OnChangeMinType, ValueFullType } from 'shared/ui/Input'
import type { LabelProps } from 'shared/ui/Label'

interface InputSelectPropsType
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
    'onChange'
  > {
  errorMessage?: string
  containerClassName?: string
  className?: string
  disabled?: boolean
  isLoading?: boolean
  options: InputOptionType<number | string>[]
  valueFullType?: ValueFullType<string>
  isFirstOptionDisabled?: boolean
  onChange: (e: OnChangeMinType)=>void
}

export type InputSelectWithLabel = InputSelectPropsType & LabelProps
