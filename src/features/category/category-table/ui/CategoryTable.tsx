import { selectRequestStatus } from 'app/providers/StoreProvider/slices/ui'
import type { CategoryMinType } from 'enteties/category'
import {
  CategoryActions,
  categoryWithUserSelector,
  changeIsCategoryActiveByIdThunk,
  deleteCategoryByIdThunk,
  fetchAllCategories,
  LanguageLabels,
} from 'enteties/category'
import { FC, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { MODAL_TITLE, REQUEST_MESSAGES } from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import permissionHelpers from 'shared/lib/utils/permissionHelpers'
import Checkbox from 'shared/ui/Checkbox'
import Table, { TableCellEllipsis, TableType } from 'shared/ui/Table'
import { ConfirmModal, ConfirmModalOption, OpenedModalType } from 'widgets/ConfirmModal'
import {
  categoryTableHeaderItems,
  openedModalInitialValues,
} from '../model/consts/categoryTableConsts'
import { CloneCategoryButton } from './ActionButtons/CloneCategoryButton'
import { DeleteCategoryButton } from './ActionButtons/DeleteCategoryButton'
import { EditCategoryButton } from './ActionButtons/EditCategoryButton'

const CategoryTable: FC = () => {
  const [openedModal, setOpenedModal] = useState<OpenedModalType<string>>(openedModalInitialValues)
  const toolbarSearchByValue = useAppSelector((state) => state.category.toolbarSearchByValue)
  const allCategories = useAppSelector(categoryWithUserSelector)
  const allCategoriesFetchStatus = useAppSelector(
    selectRequestStatus(CategoryActions.FETCH_ALL_CATEGORIES),
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [])
  const onActiveClick = (category: CategoryMinType) => {
    setOpenedModal({
      modalType: ConfirmModalOption.CHANGE_IS_ACTIVE,
      id: category.id,
    })
  }

  const onDeleteClick = (category: CategoryMinType) => {
    setOpenedModal({
      modalType: ConfirmModalOption.CONFIRM_DELETE,
      id: category.id,
    })
  }

  const onCloseConfirmModal = () => {
    setOpenedModal(openedModalInitialValues)
  }
  const onConfirmChangeIsActive = () => {
    const category = allCategories.find((c) => c.id === openedModal.id)
    if (category) {
      const categoryData = {
        categoryId: category.id,
        newActiveStatus: !category.isActive,
      }
      dispatch(
        changeIsCategoryActiveByIdThunk({
          categoryData,
          notification: REQUEST_MESSAGES.CHANGE_IS_ACTIVE,
        }),
      )
    }
    onCloseConfirmModal()
  }

  const onConfirmDeleteCategory = () => {
    if (openedModal.id)
      dispatch(
        deleteCategoryByIdThunk({
          categoryId: openedModal.id,
          notification: REQUEST_MESSAGES.DELETE_CATEGORY,
        }),
      )
    onCloseConfirmModal()
  }

  const selectedCategory = allCategories.find((category) => category.id === openedModal.id)
  const filteredCategories = toolbarSearchByValue
    ? allCategories.filter((category) =>
        `${category.name}\n${category.description}\n${category.creator?.firstName || ''} ${
          category.creator?.lastName || ''
        }\n${LanguageLabels[category.language]}`
          .toUpperCase()
          .includes(toolbarSearchByValue.toUpperCase()),
      )
    : allCategories

  return (
    <div data-testid='category-table'>
      {openedModal.modalType === ConfirmModalOption.CHANGE_IS_ACTIVE && selectedCategory && (
        <ConfirmModal
          title={
            selectedCategory.isActive ? MODAL_TITLE.DISABLE_CATEGORY : MODAL_TITLE.ENABLE_CATEGORY
          }
          questionText={
            selectedCategory.isActive
              ? MODAL_TITLE.DISABLE_CATEGORY_CONFIRMATION
              : MODAL_TITLE.ENABLE_CATEGORY_CONFIRMATION
          }
          onConfirm={onConfirmChangeIsActive}
          onClose={onCloseConfirmModal}
        />
      )}
      {openedModal.modalType === ConfirmModalOption.CONFIRM_DELETE && selectedCategory && (
        <ConfirmModal
          title={`${MODAL_TITLE.DELETE_CATEGORY} ${selectedCategory.name}`}
          questionText={MODAL_TITLE.DELETE_CATEGORY_CONFIRMATION}
          onConfirm={onConfirmDeleteCategory}
          onClose={onCloseConfirmModal}
        />
      )}
      <Table
        containerClassName='table__container--no-scroll'
        minWidth='1100px'
        tableType={TableType.NO_BORDERS}
        headerItems={categoryTableHeaderItems}
        fetchStatus={allCategoriesFetchStatus}
        rows={filteredCategories.map((category) => ({
          id: category.id,
          columns: [
            <TableCellEllipsis
              key={1}
              text={
                // Please don't delete this
                // <Button
                //   category={ButtonCategoryType.LINK}
                //   theme={ButtonTheme.EMPTY}
                //   displayType={ButtonDisplayType.CONTENTS}
                //   to={`${RoutePaths.category}?${QueryParams.MODAL}=${OpenMode.VIEW}&${QueryParams.ID}=${category.id}`}
                // >
                //   {category.name}
                // </Button>
                category.name
              }
            />,
            <TableCellEllipsis key={1} text={category.description} />,
            category.creator ? (
              <TableCellEllipsis
                key={1}
                text={`${category.creator.firstName} ${category.creator.lastName}`}
              />
            ) : (
              <Skeleton key={1} count={1} height={15} />
            ),
            LanguageLabels[category.language],
            <Checkbox
              data-testid='toggle-status'
              key={1}
              onChange={() => onActiveClick(category)}
              isGrey
              disabled={!permissionHelpers.checkIfAuthUserCanEditCategory(category.createdBy)}
              checked={category.isActive}
              className='table__checkbox'
            />,
            // Please don't delete this
            // <TableCellEllipsis key={1} text={category.groupScope} />,
            // <TableCellEllipsis key={1} text={category.userScope} />,
            <div key={1} className='table__icons'>
              <EditCategoryButton category={category} />
              <CloneCategoryButton category={category} />
              <DeleteCategoryButton category={category} onDeleteClick={onDeleteClick} />
              {/*Please do not delete*/}
              {/*<Popup*/}
              {/*  referenceElement={*/}
              {/*    <Button theme={ButtonTheme.EMPTY}>*/}
              {/*      <MdHistory onClick={onConfirmChangeIsActive} />*/}
              {/*    </Button>*/}
              {/*  }*/}
              {/*  popupElement={<div className='table__icon-text'>History</div>}*/}
              {/*  placement='bottom'*/}
              {/*/>*/}
            </div>,
          ],
        }))}
      />
    </div>
  )
}
export default CategoryTable
