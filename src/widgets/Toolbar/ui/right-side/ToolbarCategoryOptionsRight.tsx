import { categoryActions, categoryWithUserSelector, LanguageLabels } from 'enteties/category'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { BUTTON_TEXT, INPUT_PLACEHOLDER } from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { OpenMode, QueryParams } from 'shared/types/types'
import Autosuggestion from 'shared/ui/Autosuggest'
import Button, { ButtonCategoryType } from 'shared/ui/Button'
import { InputUiType, OnChangeMinType } from 'shared/ui/Input'

export const ToolbarCategoryOptionsRight = () => {
  const allCategories = useAppSelector(categoryWithUserSelector)

  const dispatch = useAppDispatch()
  const onSearchInputValueChange = (e: OnChangeMinType<string>) => {
    dispatch(categoryActions.setToolbarSearchValue(e.target.value))
  }

  const categoryAutosuggestStrings = allCategories.reduce(
    (options: string[], category) => [
      ...options,
      category.name,
      category.description,
      `${category.creator?.firstName} ${category.creator?.lastName}`,
      LanguageLabels[category.language],
    ],
    [],
  )
  return (
    <div className='toolbar__right-side toolbar__right-side--category'>
      <Autosuggestion
        onChange={onSearchInputValueChange}
        className='autosuggest--search-toolbar'
        placeholder={INPUT_PLACEHOLDER.SEARCH_TOOLBAR}
        uiType={InputUiType.NO_BORDER}
        options={categoryAutosuggestStrings}
      />
      <Button
        to={`${RoutePaths.category}?${QueryParams.MODAL}=${OpenMode.CREATE}`}
        category={ButtonCategoryType.LINK}
      >
        {BUTTON_TEXT.ADD_NEW_CATEGORY}
      </Button>
      <Button
        to={`${RoutePaths.category}?${QueryParams.MODAL}=${OpenMode.TEMPLATES_LIST}`}
        category={ButtonCategoryType.LINK}
      >
        {BUTTON_TEXT.CREATE_FROM_TEMPLATE}
      </Button>
      {/*Please don't delete this */}
      {/*<Button*/}
      {/*  to={`${RoutePaths.category}?${QueryParams.MODAL}=${OpenMode.HISTORY}`}*/}
      {/*  category={ButtonCategoryType.LINK}*/}
      {/*>*/}
      {/*  History*/}
      {/*</Button>*/}
      {/*Please don't delete this */}
      {/*<Button onClick={onManageColumnsClick}>Manage Columns</Button>*/}
    </div>
  )
}
