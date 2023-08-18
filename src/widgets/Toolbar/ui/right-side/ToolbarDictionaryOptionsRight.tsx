import { RoutePaths } from 'shared/config/router/RoutePaths'
import { BUTTON_TEXT, INPUT_PLACEHOLDER } from 'shared/defaults/text'
import { OpenMode, QueryParams } from 'shared/types/types'
import Autosuggestion from 'shared/ui/Autosuggest'
import Button, { ButtonCategoryType } from 'shared/ui/Button'
import { InputUiType } from 'shared/ui/Input'

export const ToolbarDictionaryOptionsRight = () => (
  <div className='toolbar__right-side'>
    <Autosuggestion
      className='autosuggest--search-toolbar'
      placeholder={INPUT_PLACEHOLDER.SEARCH_TOOLBAR}
      uiType={InputUiType.NO_BORDER}
      options={[]}
    />

    <Button
      category={ButtonCategoryType.LINK}
      to={`${RoutePaths.dictionary}?${QueryParams.MODAL}=${OpenMode.CREATE}`}
    >
      {BUTTON_TEXT.ADD_NEW_DICTIONARY}
    </Button>
    <Button
      to={`${RoutePaths.dictionary}?${QueryParams.MODAL}=${OpenMode.HISTORY}`}
      category={ButtonCategoryType.LINK}
    >
      {BUTTON_TEXT.HISTORY}
    </Button>
  </div>
)
