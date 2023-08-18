import type { CSSProperties, ReactNode } from 'react'

export interface ModalPropsType {
  onModalClose?: () => void
  className?: string
  children: ReactNode
  containerStyle?: CSSProperties
}
