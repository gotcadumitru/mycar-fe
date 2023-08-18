import { selectRequestStatus, uiActions } from 'app/providers/StoreProvider/slices/ui'
import {
  categoryActions,
  CategoryActions,
  createNewCategoryThunk,
  editCategoryByIdThunk,
  fetchCategoryByIdThunk,
  parseStringToWordsAndPhrases,
} from 'enteties/category'

import { FC, useEffect, useId } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FetchStatus } from 'shared/api'
import { BUTTON_TEXT, MODAL_TITLE, REQUEST_MESSAGES, TOAST_MESSAGE } from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import permissionHelpers from 'shared/lib/utils/permissionHelpers'
import { OpenMode } from 'shared/types/types'
import Button, { ButtonCategoryType, ButtonTheme } from 'shared/ui/Button'
import Modal from 'shared/ui/Modal'
import { createEditCategoryActions } from '../lib/slice/createEditCategorySlice'
import {
  categoryFormToRequestBody,
  categoryToEditCategoryForm,
  checkIfExistErrorsOnCreateEditCategory,
  getOptionsForParsing,
} from '../lib/utils/create-edit-category.utils'
import { CreateEditCategoryFormSkeleton } from '../model/consts/createEditCategoryConsts'
import type { CreateCategoryModalProps } from '../model/types/createEditCategory.types'
import '../styles/create-category.scss'
import CreateEditCategoryForm from './CreateEditCategoryForm'

const CreateEditCategoryModal: FC<CreateCategoryModalProps> = ({ id, mode }) => {
  const formId = useId()
  const setSearchParams = useSearchParams()[1]
  const dispatch = useAppDispatch()
  const createCategoryFormData = useAppSelector((state) => state.createCategory.newCategoryFormData)
  const category = useAppSelector((state) => state.category.selectedCategory)

  const categoryFetchStatus = useAppSelector(
    selectRequestStatus(CategoryActions.FETCH_CATEGORY_BY_ID),
  )

  const isLoadingSkeletonDisplayed = (() =>
    [OpenMode.EDIT, OpenMode.CLONE].includes(mode) && category?.id !== id)()

  const resetDataInsideReduxStore = () => {
    dispatch(createEditCategoryActions.resetCategoryDataAC())
    dispatch(categoryActions.resetSelectedCategoryData())
    dispatch(
      uiActions.uiSetFetchStatusAC({
        type: CategoryActions.FETCH_CATEGORY_BY_ID,
        status: FetchStatus.NULL,
      }),
    )
  }

  const onModalClose = () => {
    setSearchParams({})
    resetDataInsideReduxStore()
  }

  // Clone / edit category
  useEffect(() => {
    if (id && [OpenMode.EDIT, OpenMode.CLONE].includes(mode)) {
      const thunkRequest = dispatch(
        fetchCategoryByIdThunk({
          categoryId: id,
          notification: mode === OpenMode.CLONE && REQUEST_MESSAGES.DUPLICATE_CATEGORY,
        }),
      )
      return () => {
        // in case the modal is closed before the response is received
        thunkRequest.abort()
      }
    }
  }, [id])

  // Clone / edit category
  useEffect(() => {
    if (id && category?.id === id) {
      if (
        mode === OpenMode.EDIT &&
        !permissionHelpers.checkIfAuthUserCanEditCategory(category.createdBy)
      ) {
        toast.error(TOAST_MESSAGE.ACCESS_DENIED_EDIT)
        onModalClose()
      } else {
        dispatch(
          createEditCategoryActions.changeCategoryDataAC(categoryToEditCategoryForm(category)),
        )
      }
    }
  }, [category, id])

  useEffect(() => {
    if (categoryFetchStatus === FetchStatus.FAIL) {
      // when we are in cloning mode, we have other messages
      if (mode !== OpenMode.CLONE) {
        toast.error(TOAST_MESSAGE.CHECK_INTERNET)
      }
      onModalClose()
    }
  }, [categoryFetchStatus])

  const onSubmit = async (createNewCategoryAfterSave: boolean) => {
    const optionsForParsing = getOptionsForParsing(createCategoryFormData)

    const errorCheckResponse = checkIfExistErrorsOnCreateEditCategory(
      createCategoryFormData,
      optionsForParsing,
    )
    if (errorCheckResponse.isErrors)
      return dispatch(
        createEditCategoryActions.changeCategoryDataAC(
          errorCheckResponse.createCategoryFormDataWithErrors,
        ),
      )

    const definition = parseStringToWordsAndPhrases(optionsForParsing)
    const categoryData = categoryFormToRequestBody(createCategoryFormData, definition)

    let response
    if (mode === OpenMode.EDIT && id) {
      const categoryEditBody = {
        id,
        ...categoryData,
      }
      response = await dispatch(
        editCategoryByIdThunk({
          categoryData: categoryEditBody,
          notification: REQUEST_MESSAGES.EDIT_CATEGORY,
        }),
      )
    } else if (id && category && OpenMode.CLONE === mode) {
      response = await dispatch(
        createNewCategoryThunk({
          categoryData: {
            ...categoryData,
            enabled: category.isActive,
          },
          notification: REQUEST_MESSAGES.CREATE_CATEGORY,
        }),
      )
    } else if (id && OpenMode.CREATE_FROM_TEMPLATE === mode) {
      response = await dispatch(
        createNewCategoryThunk({ categoryData, notification: REQUEST_MESSAGES.CREATE_CATEGORY }),
      )
    } else if (mode === OpenMode.CREATE) {
      response = await dispatch(
        createNewCategoryThunk({ categoryData, notification: REQUEST_MESSAGES.CREATE_CATEGORY }),
      )
    } else {
      return toast.error(TOAST_MESSAGE.INCORRECT_URL)
    }
    if (response.meta.requestStatus === 'fulfilled') {
      if (createNewCategoryAfterSave) {
        if (mode === OpenMode.CLONE && category && id) {
          dispatch(
            createEditCategoryActions.changeCategoryDataAC(categoryToEditCategoryForm(category)),
          )
        } else {
          dispatch(createEditCategoryActions.resetCategoryDataAC())
        }
      } else onModalClose()
    }
  }

  const modalTitle = (() => {
    if (mode === OpenMode.CREATE) return MODAL_TITLE.CREATE_CATEGORY
    if (mode === OpenMode.CLONE) return MODAL_TITLE.CLONE_CATEGORY
    if (mode === OpenMode.EDIT) return MODAL_TITLE.EDIT_CATEGORY
    if (mode === OpenMode.CREATE_FROM_TEMPLATE) return MODAL_TITLE.CREATE_CATEGORY_FROM_TEMPLATE
  })()

  return (
    <Modal onModalClose={onModalClose}>
      <div className='modal__header'>
        <h2 className='modal__title'>{modalTitle}</h2>
      </div>
      <div className='modal__body'>
        {isLoadingSkeletonDisplayed ? (
          CreateEditCategoryFormSkeleton
        ) : (
          <CreateEditCategoryForm onSubmit={() => onSubmit(false)} formId={formId} />
        )}
      </div>
      <div className='modal__footer'>
        <div />
        <div>
          <Button category={ButtonCategoryType.BUTTON} onClick={onModalClose}>
            {BUTTON_TEXT.CANCEL}
          </Button>

          {isLoadingSkeletonDisplayed ? null : (
            <>
              <Button
                form={formId}
                type='submit'
                className='margin--left-15 margin--right-15'
                category={ButtonCategoryType.BUTTON}
                theme={ButtonTheme.BLUE}
              >
                {mode === OpenMode.CLONE ? BUTTON_TEXT.CLONE : BUTTON_TEXT.SAVE}
              </Button>
              {mode === OpenMode.CREATE && (
                <Button
                  type='button'
                  onClick={() => onSubmit(true)}
                  category={ButtonCategoryType.BUTTON}
                  theme={ButtonTheme.BLUE}
                >
                  {BUTTON_TEXT.SAVE_AND_NEW}
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </Modal>
  )
}
export default CreateEditCategoryModal
