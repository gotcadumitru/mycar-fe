import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import { MODAL_TITLE } from 'shared/defaults/text'
import Button, { ButtonTheme } from 'shared/ui/Button'
import Modal from 'shared/ui/Modal'

interface ConfirmModalProps {
  className?: string
  title: string
  questionText: ReactNode
  onConfirm: () => void
  onClose?: () => void
  isOpen?: boolean
}

export const ConfirmModal: FC<ConfirmModalProps> = ({
  className,
  title,
  questionText,
  onConfirm,
  onClose,
  ...props
}) => (
  <Modal
    className={classNames('modal__container--confirm', className)}
    onClose={onClose}
    {...props}
  >
    <div className='modal__header'>
      <div className='modal__title'>{title}</div>
    </div>
    <div className='modal__body'>{questionText}</div>
    <div className='modal__footer'>
      <Button onClick={onClose} theme={ButtonTheme.OUTLINE_RED}>
        {MODAL_TITLE.CLOSE}
      </Button>
      <Button onClick={onConfirm}>{MODAL_TITLE.OK}</Button>
    </div>
  </Modal>
)
