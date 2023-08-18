import { CategoryMinType } from 'enteties/category'
import { FC } from 'react'
import HiOutlineDuplicate from 'shared/assets/icons/HiOutlineDuplicate.svg'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { BUTTON_TEXT } from 'shared/defaults/text'
import permissionHelpers from 'shared/lib/utils/permissionHelpers'
import { OpenMode, QueryParams } from 'shared/types/types'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import Popup from 'shared/ui/Popup'

interface DeleteCategoryButtonProps {
  category: CategoryMinType
}

export const CloneCategoryButton: FC<DeleteCategoryButtonProps> = ({ category }) => {
  if (!permissionHelpers.checkIfAuthUserCanCloneCategory()) return <div />
  return (
    <Popup
      referenceElement={
        <Button
          data-testid='duplicate-category-btn'
          theme={ButtonTheme.EMPTY}
          category={ButtonCategoryType.LINK}
          to={`${RoutePaths.category}?${QueryParams.MODAL}=${OpenMode.CLONE}&${
            QueryParams.ID
          }=${encodeURIComponent(category.id)}`}
        >
          <HiOutlineDuplicate />
        </Button>
      }
      popupElement={<div className='table__icon-text'>{BUTTON_TEXT.DUPLICATE}</div>}
      placement='bottom'
    />
  )
}
