import classNames from 'classnames'
import { FC } from 'react'
import './modal.scss'
import type { ModalPropsType } from './modal.types'

const Modal: FC<ModalPropsType> = ({ onModalClose, containerStyle, className, ...props }) => {
  const modalClassName = classNames('modal__container', className)

  return (
    <div className='modal' style={containerStyle}>
      <div className={modalClassName}>{props.children}</div>
    </div>
  )
}
export default Modal
