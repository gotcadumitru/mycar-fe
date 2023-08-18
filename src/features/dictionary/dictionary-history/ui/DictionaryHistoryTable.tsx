import { FC, useState } from 'react'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { OpenMode, QueryParams } from 'shared/types/types'
import Button, { ButtonCategoryType, ButtonDisplayType, ButtonTheme } from 'shared/ui/Button'
import Paginator, { getNewOffset, getPaginatorData } from 'shared/ui/Paginator'
import Table, { TableCellEllipsis, TableRowsSize, TableType } from 'shared/ui/Table'
import {
  dictionaryHistoryMockData,
  dictionaryHistoryTableHeaderItems,
  HISTORY_ON_TABLE_PAGE,
} from '../lib/dictionary-history.defaults'

interface DictionaryHistoryTableProps {
  className?: string
}

export const DictionaryHistoryTable: FC<DictionaryHistoryTableProps> = () => {
  const [tableHistoryOffset, setTableHistoryOffset] = useState(0)
  const [templatesOnPage, setTemplatesOnPage] = useState(HISTORY_ON_TABLE_PAGE)
  const { currentItems, pageCount } = getPaginatorData(
    tableHistoryOffset,
    templatesOnPage,
    dictionaryHistoryMockData,
  )
  const handlePageClick = (selectedPage: number) => {
    setTableHistoryOffset(getNewOffset(selectedPage, templatesOnPage, dictionaryHistoryMockData))
  }

  return (
    <>
      <Table
        minWidth='750px'
        tableType={TableType.NO_BORDERS}
        rowSize={TableRowsSize.SMALL}
        headerItems={dictionaryHistoryTableHeaderItems}
        rows={currentItems.map((dictionaryHistory) => ({
          id: dictionaryHistory.id,
          columns: [
            dictionaryHistory.dateTime,
            <TableCellEllipsis
              key={1}
              text={
                <Button
                  category={ButtonCategoryType.LINK}
                  theme={ButtonTheme.EMPTY}
                  displayType={ButtonDisplayType.CONTENTS}
                  to={`${RoutePaths.category}?${QueryParams.MODAL}=${OpenMode.VIEW}&${QueryParams.ID}=${dictionaryHistory.id}`}
                >
                  {dictionaryHistory.dictionaryTerm}
                </Button>
              }
            />,
            <TableCellEllipsis key={1} text={dictionaryHistory.createdBy} />,
            <TableCellEllipsis key={1} text={dictionaryHistory.modifiedBy} />,
            <TableCellEllipsis isWithCopyButton key={1} text={dictionaryHistory.changelog} />,
          ],
        }))}
      />
      <Paginator
        onItemsPerPageChange={setTemplatesOnPage}
        itemsPerPage={templatesOnPage}
        pageCount={pageCount}
        onPageChange={(e) => handlePageClick(e.selected)}
      />
    </>
  )
}
