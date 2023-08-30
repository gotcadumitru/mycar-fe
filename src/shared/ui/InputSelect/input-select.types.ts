import type { DetailedHTMLProps, FocusEvent, InputHTMLAttributes } from 'react'
import type { InputOptionType, OnChangeMinType, ValueFullType } from 'shared/ui/Input'
import type { LabelProps } from 'shared/ui/Label'

interface InputSelectPropsType
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
    'onChange' | 'onBlur' | 'onFocus'
  > {
  errorMessage?: string
  containerClassName?: string
  className?: string
  disabled?: boolean
  isLoading?: boolean
  options: InputOptionType<number | string>[]
  valueFullType?: ValueFullType<string | number | null>
  isFirstOptionDisabled?: boolean
  onChange: (e: OnChangeMinType) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
}

export type InputSelectWithLabel = InputSelectPropsType & LabelProps
