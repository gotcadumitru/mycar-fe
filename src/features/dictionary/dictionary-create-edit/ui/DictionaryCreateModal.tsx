import { FC, useCallback, useId } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BUTTON_TEXT, MODAL_TITLE } from 'shared/defaults/text'
import { OpenMode } from 'shared/types/types'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import Modal from 'shared/ui/Modal'
import '../styles/dictionary-create.scss'
import { DictionaryCreateForm } from './DictionaryCreateForm'

type DictionaryCreateModalProps = {
  id: string | null
  mode: OpenMode
}
const DictionaryCreateModal: FC<DictionaryCreateModalProps> = ({ id, mode }) => {
  const formId = useId()
  const setSearchParams = useSearchParams()[1]

  const onModalClose = useCallback(() => {
    setSearchParams({})
  }, [])

  return (
    <Modal onModalClose={onModalClose}>
      <div className='modal__header'>
        <h2 className='modal__title'>{MODAL_TITLE.CREATE_DICTIONARY}</h2>
      </div>
      <div className='modal__body'>
        <DictionaryCreateForm formId={formId} />
      </div>
      <div className='modal__footer'>
        <div />
        <div>
          <Button category={ButtonCategoryType.BUTTON} onClick={onModalClose}>
            {BUTTON_TEXT.CANCEL}
          </Button>
          <Button
            form={formId}
            type='submit'
            className='margin--left-15 margin--right-15'
            category={ButtonCategoryType.BUTTON}
            theme={ButtonTheme.BLUE}
          >
            {BUTTON_TEXT.SAVE}
          </Button>
          <Button category={ButtonCategoryType.LINK} to='/' theme={ButtonTheme.BLUE}>
            {BUTTON_TEXT.SAVE_AND_NEW}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
export default DictionaryCreateModal
