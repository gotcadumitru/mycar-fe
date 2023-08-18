import { FC, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BUTTON_TEXT, MODAL_TITLE } from 'shared/defaults/text'
import { OpenMode } from 'shared/types/types'
import Button, { ButtonCategoryType } from 'shared/ui/Button'
import Modal from 'shared/ui/Modal'
import '../styles/dictionary-history.scss'
import { DictionaryHistoryData } from './DictionaryHistoryData'

interface DictionaryHistoryModalProps {
  id: string | null
  mode: OpenMode
}

const DictionaryHistoryModal: FC<DictionaryHistoryModalProps> = () => {
  const setSearchParams = useSearchParams()[1]
  const onModalClose = useCallback(() => {
    setSearchParams({})
  }, [])

  return (
    <Modal onModalClose={onModalClose} className='dictionary-history'>
      <div className='modal__header'>
        <div className='modal__title'>{MODAL_TITLE.DICTIONARY_HISTORY}</div>
      </div>
      <DictionaryHistoryData />
      <div className='modal__footer'>
        <div />
        <Button category={ButtonCategoryType.BUTTON} onClick={onModalClose}>
          {BUTTON_TEXT.CLONE}
        </Button>
      </div>
    </Modal>
  )
}

export default DictionaryHistoryModal
