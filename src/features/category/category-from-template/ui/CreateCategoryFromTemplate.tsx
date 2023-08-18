import { selectRequestStatus } from 'app/providers/StoreProvider/slices/ui'
import classNames from 'classnames'
import { LanguageLabels, ToWhomDoesItApplyLabels } from 'enteties/category'
import { fetchAllTemplatesFromApiThunk, TemplateActions } from 'enteties/template'
import { FC, useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FetchStatus } from 'shared/api'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { BUTTON_TEXT, INPUT_LABEL, INPUT_PLACEHOLDER, MODAL_TITLE } from 'shared/defaults/text'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks'
import { OpenMode, QueryParams } from 'shared/types/types'
import Autosuggestion from 'shared/ui/Autosuggest'
import Button, { ButtonCategoryType, ButtonDisplayType, ButtonTheme } from 'shared/ui/Button'
import { InputUiType } from 'shared/ui/Input'
import Label from 'shared/ui/Label'
import Modal from 'shared/ui/Modal'
import Paginator, { getNewOffset, getPaginatorData } from 'shared/ui/Paginator'
import Table, { TableCellEllipsis, TableRowsSize, TableType } from 'shared/ui/Table'
import { InfoBoxTemplate } from '../lib/info-boxes'
import {
  TEMPLATES_ON_TABLE_PAGE,
  templateTableHeaderItems,
} from '../model/consts/categoryFromTemplate'
import { CreateCategoryFromTemplateProps } from '../model/types/categoryFromTemplate.types'
import '../styles/create-from-template.scss'

const CreateCategoryFromTemplate: FC<CreateCategoryFromTemplateProps> = ({ className }) => {
  const setSearchParams = useSearchParams()[1]
  const allTemplates = useAppSelector((state) => state.template.allTemplates)
  const allTemplatesFetchStatus = useAppSelector(
    selectRequestStatus(TemplateActions.FETCH_ALL_TEMPLATES),
  )

  const [inputSearchValue, setInputSearchValue] = useState('')
  const [tableItemOffset, setTableItemOffset] = useState(0)
  const [templatesOnPage, setTemplatesOnPage] = useState(TEMPLATES_ON_TABLE_PAGE)
  const dispatch = useAppDispatch()

  const filteredTemplates = inputSearchValue
    ? allTemplates.filter((template) =>
        `${template.name}\n${LanguageLabels[template.language]}\n${
          ToWhomDoesItApplyLabels[template.channel]
        }`
          .toUpperCase()
          .includes(inputSearchValue.toUpperCase()),
      )
    : allTemplates
  const { currentItems, pageCount } = getPaginatorData(
    tableItemOffset,
    templatesOnPage,
    filteredTemplates,
  )

  useEffect(() => {
    if (allTemplatesFetchStatus === FetchStatus.NULL) {
      dispatch(fetchAllTemplatesFromApiThunk())
    }
  }, [])

  const onModalClose = useCallback(() => {
    setSearchParams({})
  }, [])

  const handlePageClick = (selectedPage: number) => {
    setTableItemOffset(getNewOffset(selectedPage, templatesOnPage, allTemplates))
  }
  const autosuggestOptions: string[] = allTemplates.reduce(
    (options, template) => [
      ...options,
      template.name,
      LanguageLabels[template.language],
      ToWhomDoesItApplyLabels[template.channel],
    ],
    [] as string[],
  )

  return (
    <Modal onModalClose={onModalClose} className={classNames('c-from-template', className)}>
      <div className='modal__header'>
        <div className='modal__title'>{MODAL_TITLE.CATEGORY_TEMPLATES}</div>
      </div>
      <div className='modal__body'>
        <div className='c-from-template__label'>
          <Label
            className='label--no-margin'
            label={INPUT_LABEL.SELECT_TEMPLATE}
            infoText={InfoBoxTemplate}
          />
          <Autosuggestion
            className='autosuggest--search-toolbar'
            placeholder={INPUT_PLACEHOLDER.SEARCH_TEMPLATES}
            value={inputSearchValue}
            onChange={(e) => setInputSearchValue(e.target.value)}
            uiType={InputUiType.SMALL_NO_BORDER}
            options={autosuggestOptions}
          />
        </div>
        <Table
          minWidth='500px'
          tableType={TableType.NO_BORDERS}
          rowSize={TableRowsSize.SMALL}
          headerItems={templateTableHeaderItems}
          fetchStatus={allTemplatesFetchStatus}
          rows={currentItems.map((template) => ({
            id: template.id,
            columns: [
              <TableCellEllipsis
                key={1}
                text={
                  <Button
                    key={1}
                    displayType={ButtonDisplayType.CONTENTS}
                    category={ButtonCategoryType.LINK}
                    theme={ButtonTheme.EMPTY}
                    to={`${RoutePaths.category}?${QueryParams.MODAL}=${OpenMode.CREATE_FROM_TEMPLATE}&${QueryParams.ID}=${template.id}`}
                  >
                    {template.name}
                  </Button>
                }
              />,
              <TableCellEllipsis key={1} text={LanguageLabels[template.language]} />,
              <TableCellEllipsis key={1} text={ToWhomDoesItApplyLabels[template.channel]} />,
            ],
          }))}
        />
        <Paginator
          onItemsPerPageChange={setTemplatesOnPage}
          itemsPerPage={templatesOnPage}
          pageCount={pageCount}
          onPageChange={(e) => handlePageClick(e.selected)}
        />
      </div>
      <div className='modal__footer'>
        <div />
        <Button category={ButtonCategoryType.BUTTON} onClick={onModalClose}>
          {BUTTON_TEXT.CANCEL}
        </Button>
      </div>
    </Modal>
  )
}

export default CreateCategoryFromTemplate
