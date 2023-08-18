import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { TOAST_MESSAGE } from 'shared/defaults/text'
import { OpenMode, QueryParams } from 'shared/types/types'
import Button, { ButtonCategoryType, ButtonDisplayType, ButtonTheme } from 'shared/ui/Button'
import Paginator, { getNewOffset, getPaginatorData } from 'shared/ui/Paginator'
import Table, { TableCellEllipsis, TableRowsSize, TableType } from 'shared/ui/Table'
import {
  categoryHistoryMockData,
  categoryHistoryTableHeaderItems,
  HISTORY_ON_TABLE_PAGE,
} from '../lib/category-history.defaults'

interface CategoryHistoryTableProps {
  className?: string
}

export const CategoryHistoryTable: FC<CategoryHistoryTableProps> = () => {
  const [tableHistoryOffset, setTableHistoryOffset] = useState(0)
  const [templatesOnPage, setTemplatesOnPage] = useState(HISTORY_ON_TABLE_PAGE)
  const { currentItems, pageCount } = getPaginatorData(
    tableHistoryOffset,
    templatesOnPage,
    categoryHistoryMockData,
  )
  const handlePageClick = (selectedPage: number) => {
    setTableHistoryOffset(getNewOffset(selectedPage, templatesOnPage, categoryHistoryMockData))
  }

  return (
    <>
      <Table
        minWidth='750px'
        tableType={TableType.NO_BORDERS}
        rowSize={TableRowsSize.SMALL}
        headerItems={categoryHistoryTableHeaderItems}
        rows={currentItems.map((categoryHistory) => ({
          id: categoryHistory.id,
          columns: [
            categoryHistory.dateTime,
            <TableCellEllipsis
              key={1}
              text={
                <Button
                  category={ButtonCategoryType.LINK}
                  theme={ButtonTheme.EMPTY}
                  displayType={ButtonDisplayType.CONTENTS}
                  to={`${RoutePaths.category}?${QueryParams.MODAL}=${OpenMode.VIEW}&${QueryParams.ID}=${categoryHistory.id}`}
                >
                  {categoryHistory.categoryName}
                </Button>
              }
            />,
            <TableCellEllipsis key={1} text={categoryHistory.createdBy} />,
            <TableCellEllipsis key={1} text={categoryHistory.modifiedBy} />,
            <TableCellEllipsis isWithCopyButton key={1} text={categoryHistory.changelog} />,
            <>
              <Button
                key={1}
                onClick={() => {
                  toast.error(TOAST_MESSAGE.NOT_IMPLEMENTED)
                }}
                theme={ButtonTheme.EMPTY}
              >
                {categoryHistory.actions.restore}
              </Button>
              /
              <Button
                key={2}
                category={ButtonCategoryType.LINK}
                to={`${RoutePaths.category}?${QueryParams.MODAL}=${OpenMode.CREATE}`}
                theme={ButtonTheme.EMPTY}
              >
                {categoryHistory.actions.saveAs}
              </Button>
            </>,
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
