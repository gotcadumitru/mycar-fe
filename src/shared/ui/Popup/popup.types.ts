import { ReactNode } from 'react'
import { Placement } from '@popperjs/core'

export interface PopupPropsType {
  referenceElement: ReactNode
  referenceElementClassName?: string
  popupElement: ReactNode
  popupElementClassName?: string
  placement?: Placement
  isEnabled?: boolean
  isWithCopyButton?: boolean
  skeleton?: ReactNode
}
