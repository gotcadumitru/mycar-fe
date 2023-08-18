import { CategoryMinType } from 'enteties/category'
import { FC } from 'react'
import MdOutlineEdit from 'shared/assets/icons/MdOutlineEdit.svg'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { BUTTON_TEXT } from 'shared/defaults/text'
import permissionHelpers from 'shared/lib/utils/permissionHelpers'
import { OpenMode, QueryParams } from 'shared/types/types'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import Popup from 'shared/ui/Popup'

interface DeleteCategoryButtonProps {
  category: CategoryMinType
}

export const EditCategoryButton: FC<DeleteCategoryButtonProps> = ({ category }) => {
  if (!permissionHelpers.checkIfAuthUserCanEditCategory(category.createdBy)) return <div />
  return (
    <Popup
      referenceElement={
        <Button
          data-testid='edit-category-btn'
          theme={ButtonTheme.EMPTY}
          category={ButtonCategoryType.LINK}
          to={`${RoutePaths.category}?${QueryParams.MODAL}=${OpenMode.EDIT}&${
            QueryParams.ID
          }=${encodeURIComponent(category.id)}`}
        >
          <MdOutlineEdit />
        </Button>
      }
      popupElement={<div className='table__icon-text'>{BUTTON_TEXT.EDIT}</div>}
      placement='bottom'
    />
  )
}
