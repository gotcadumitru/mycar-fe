import classNames from 'classnames'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import { TOAST_MESSAGE, INPUT_LABEL, INPUT_PLACEHOLDER } from 'shared/defaults/text'
import Autosuggestion from 'shared/ui/Autosuggest'
import Checkbox from 'shared/ui/Checkbox'
import { InputUiType } from 'shared/ui/Input'
import Label from 'shared/ui/Label'
import Paginator, { getNewOffset, getPaginatorData } from 'shared/ui/Paginator'
import Table, {
  TableCellEllipsis,
  TableHeaderItem,
  TableOption,
  TableOptions,
  TableRowsSize,
  TableType,
} from 'shared/ui/Table'
import { InfoBoxWhichUser } from '../../lib/info-boxes'
import {
  createCategoryUsersMockData,
  USERS_ON_TABLE_PAGE,
} from '../../model/consts/createEditCategoryConsts'
import '../../styles/create-category.scss'

interface UsersTableProps {
  className?: string
  isViewMode?: boolean
}

export const UsersTable: FC<UsersTableProps> = ({ className, isViewMode }) => {
  const [tableItemOffset, setTableItemOffset] = useState(0)
  const [usersOnPage, setUsersOnPage] = useState(USERS_ON_TABLE_PAGE)

  const onClick = () => {
    toast.error(TOAST_MESSAGE.NOT_IMPLEMENTED)
  }

  const { currentItems, pageCount } = getPaginatorData(
    tableItemOffset,
    usersOnPage,
    createCategoryUsersMockData,
  )

  const handlePageClick = (selectedPage: number) => {
    setTableItemOffset(getNewOffset(selectedPage, USERS_ON_TABLE_PAGE, createCategoryUsersMockData))
  }

  const usersTableHeaderItems: TableHeaderItem[] = [
    {
      id: 'User Name',
      element: 'User Name',
      width: '1fr',
    },
    {
      id: 'Country',
      element: 'Country',
      width: '100px',
    },
    {
      id: 'Email',
      element: 'Email',
      width: '1fr',
    },
    {
      id: 'Extension',
      element: 'Extension',
      width: '100px',
    },
  ]
  if (!isViewMode) {
    usersTableHeaderItems.unshift({
      id: 'Select',
      element: (
        <TableOptions title='Select'>
          <TableOption>Select all</TableOption>
          <TableOption>Select all on this page</TableOption>
          <TableOption>Remove all</TableOption>
          <TableOption>Remove all on this page</TableOption>
        </TableOptions>
      ),
      width: '100px',
    })
  }

  return (
    <div className={classNames('create-category__users-table', className)}>
      <div className='create-category__table-label'>
        <Label
          className='label--no-margin'
          label={INPUT_LABEL.WHICH_USER}
          infoText={InfoBoxWhichUser}
        />
        <Autosuggestion
          className='autosuggest--search-toolbar'
          placeholder={INPUT_PLACEHOLDER.SEARCH_USER}
          uiType={InputUiType.SMALL_NO_BORDER}
          options={createCategoryUsersMockData.map((user) => user.userName)}
        />
      </div>
      <Table
        minWidth='500px'
        tableType={TableType.NO_BORDERS}
        rowSize={TableRowsSize.SMALL}
        headerItems={usersTableHeaderItems}
        rows={currentItems.map((user) => {
          const columns = [
            <TableCellEllipsis key={1} text={user.userName} />,
            <TableCellEllipsis key={1} text={user.country} />,
            <TableCellEllipsis key={1} text={user.email} />,
            user.extension,
          ]
          if (!isViewMode) {
            columns.unshift(
              <Checkbox
                key={user.id}
                onChange={onClick}
                checked={user.isSelected}
                className='table__checkbox'
              />,
            )
          }
          return {
            id: user.id,
            columns,
          }
        })}
      />
      <Paginator
        onItemsPerPageChange={setUsersOnPage}
        itemsPerPage={usersOnPage}
        pageCount={pageCount}
        onPageChange={(e) => handlePageClick(e.selected)}
      />
    </div>
  )
}
