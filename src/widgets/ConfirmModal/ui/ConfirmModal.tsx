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
  onClose: () => void
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
    onModalClose={onClose}
    {...props}
  >
    <div className='modal__header'>
      <div className='modal__title'>{title}</div>
    </div>
    <div className='modal__body'>{questionText}</div>
    <div className='modal__footer'>
      <div />
      <div>
        <Button onClick={onClose} className='margin--right-15'>
          {MODAL_TITLE.CLOSE}
        </Button>
        <Button onClick={onConfirm} theme={ButtonTheme.OUTLINE_BLUE}>
          {MODAL_TITLE.OK}
        </Button>
      </div>
    </div>
  </Modal>
)
