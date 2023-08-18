import type { ValueFullType } from 'shared/ui/Input'
import type { DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from 'react'
import type { LabelProps } from 'shared/ui/Label'

interface TextAreaPropsType
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  errorMessage?: string
  infoText?: string | ReactNode
  className?: string
  valueFullType?: ValueFullType<string>
  containerClassName?: string
}

export type TextAreaWithLabelProps = TextAreaPropsType & LabelProps
