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
import { InfoBoxWhichGroup } from '../../lib/info-boxes'
import {
  createCategoryGroupsMockData,
  GROUPS_ON_TABLE_PAGE,
} from '../../model/consts/createEditCategoryConsts'

interface GroupsTableProps {
  className?: string
  isViewMode?: boolean
}

export const GroupsTable: FC<GroupsTableProps> = ({ className, isViewMode }) => {
  const [tableItemOffset, setTableItemOffset] = useState(0)
  const [groupsOnPage, setGroupsOnPage] = useState(GROUPS_ON_TABLE_PAGE)
  const onClick = () => {
    toast.error(TOAST_MESSAGE.NOT_IMPLEMENTED)
  }
  const { currentItems, pageCount } = getPaginatorData(
    tableItemOffset,
    groupsOnPage,
    createCategoryGroupsMockData,
  )

  const handlePageClick = (selectedPage: number) => {
    setTableItemOffset(
      getNewOffset(selectedPage, GROUPS_ON_TABLE_PAGE, createCategoryGroupsMockData),
    )
  }

  const groupsTableHeaderItems: TableHeaderItem[] = [
    {
      id: 'Group Name',
      element: 'Group Name',
      width: '1fr',
    },
    {
      id: 'Description',
      element: 'Description',
      width: '1fr',
    },
    {
      id: 'Number of Members',
      element: 'Number of Members',
      width: '175px',
    },
    {
      id: 'Extension',
      element: 'Extension',
      width: '100px',
    },
  ]
  if (!isViewMode) {
    groupsTableHeaderItems.unshift({
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
    <div className={classNames('create-category__groups-table', className)}>
      <div className='create-category__table-label'>
        <Label
          className='label--no-margin'
          label={INPUT_LABEL.WHICH_GROUP}
          infoText={InfoBoxWhichGroup}
        />
        <Autosuggestion
          className='autosuggest--search-toolbar'
          placeholder={INPUT_PLACEHOLDER.SEARCH_GROUP}
          uiType={InputUiType.SMALL_NO_BORDER}
          options={createCategoryGroupsMockData.map((group) => group.groupName)}
        />
      </div>
      <Table
        minWidth='600px'
        tableType={TableType.NO_BORDERS}
        rowSize={TableRowsSize.SMALL}
        headerItems={groupsTableHeaderItems}
        rows={currentItems.map((group) => {
          const columns = [
            <TableCellEllipsis key={1} text={group.groupName} />,
            <TableCellEllipsis key={1} text={group.description} />,
            <TableCellEllipsis key={1} text={group.numberOfMembers} />,
            group.extension,
          ]

          if (!isViewMode) {
            columns.unshift(
              <Checkbox
                key={group.id}
                onChange={onClick}
                checked={group.isSelected}
                className='table__checkbox'
              />,
            )
          }
          return {
            id: group.id,
            columns,
          }
        })}
      />
      <Paginator
        onItemsPerPageChange={setGroupsOnPage}
        itemsPerPage={groupsOnPage}
        pageCount={pageCount}
        onPageChange={(e) => handlePageClick(e.selected)}
      />
    </div>
  )
}
