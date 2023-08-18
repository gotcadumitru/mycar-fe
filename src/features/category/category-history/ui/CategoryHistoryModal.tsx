import { FC, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { OpenMode } from 'shared/types/types'
import Button, { ButtonCategoryType } from 'shared/ui/Button'
import Modal from 'shared/ui/Modal'
import '../styles/category-history.scss'
import { CategoryHistoryData } from './CategoryHistoryData'

interface CategoryHistoryModalProps {
  id: string | null
  mode: OpenMode
}

const CategoryHistoryModal: FC<CategoryHistoryModalProps> = () => {
  const setSearchParams = useSearchParams()[1]
  const onModalClose = useCallback(() => {
    setSearchParams({})
  }, [])

  return (
    <Modal onModalClose={onModalClose} className='category-history'>
      <div className='modal__header'>
        <div className='modal__title'>Category History</div>
      </div>
      <CategoryHistoryData />
      <div className='modal__footer'>
        <div />
        <Button category={ButtonCategoryType.BUTTON} onClick={onModalClose}>
          Close
        </Button>
      </div>
    </Modal>
  )
}

export default CategoryHistoryModal
