import { CategoryMinType } from 'enteties/category'
import { FC } from 'react'
import MdOutlineDelete from 'shared/assets/icons/MdOutlineDelete.svg'
import { BUTTON_TEXT } from 'shared/defaults/text'
import permissionHelpers from 'shared/lib/utils/permissionHelpers'
import Button, { ButtonTheme } from 'shared/ui/Button'
import Popup from 'shared/ui/Popup'

interface DeleteCategoryButtonProps {
  category: CategoryMinType
  onDeleteClick: (category: CategoryMinType) => void
}

export const DeleteCategoryButton: FC<DeleteCategoryButtonProps> = ({
  category,
  onDeleteClick,
}) => {
  if (!permissionHelpers.checkIfAuthUserCanDeleteCategory(category.createdBy)) return <div />
  return (
    <Popup
      referenceElement={
        <Button
          theme={ButtonTheme.EMPTY}
          onClick={() => onDeleteClick(category)}
          data-testid='delete-category'
        >
          <MdOutlineDelete />
        </Button>
      }
      popupElement={<div className='table__icon-text'>{BUTTON_TEXT.DELETE}</div>}
      placement='bottom'
    />
  )
}
