import { FC, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { OpenMode, QueryParams } from 'shared/types/types'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import Modal from 'shared/ui/Modal'
import '../styles/view-category.scss'
import { ViewCategoryData } from './ViewCategoryData'

interface ViewCategoryModalProps {
  id: string | null
}

const ViewCategoryModal: FC<ViewCategoryModalProps> = ({ id }) => {
  const setSearchParams = useSearchParams()[1]
  const onModalClose = useCallback(() => {
    setSearchParams({})
  }, [])
  return (
    <Modal onModalClose={onModalClose} className='view-category'>
      <div className='modal__header'>
        <div className='modal__title'>View a Category</div>
      </div>
      <ViewCategoryData />
      <div className='modal__footer'>
        <div />
        <div>
          <Button onClick={onModalClose}>Close</Button>
          <Button
            theme={ButtonTheme.BLUE}
            onClick={onModalClose}
            className='margin--left-15 margin--right-15'
          >
            Clone
          </Button>
          <Button
            theme={ButtonTheme.BLUE}
            category={ButtonCategoryType.LINK}
            to={`${RoutePaths.category}?${QueryParams.MODAL}=${OpenMode.EDIT}&${QueryParams.ID}=${id}`}
            onClick={onModalClose}
          >
            Edit
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ViewCategoryModal
