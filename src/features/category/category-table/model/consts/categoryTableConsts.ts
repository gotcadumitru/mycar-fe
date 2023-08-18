import type { TableHeaderItem } from 'shared/ui/Table'

export const openedModalInitialValues = {
  modalType: null,
  id: null,
}

export const categoryTableHeaderItems: TableHeaderItem[] = [
  {
    id: 'Category Name',
    element: 'Category Name',
    width: '200px',
  },
  {
    id: 'Description',
    element: 'Description',
    width: '1fr',
  },
  {
    id: 'Created By',
    element: 'Created By',
    width: '150px',
  },
  {
    id: 'Language',
    element: 'Language',
    width: '100px',
  },
  {
    id: 'Active',
    element: 'Active',
    width: '100px',
  },
  // Please don't delete this
  // {
  //   id: 'Group Scope',
  //   element: 'Group Scope',
  //   width: '1fr',
  // },
  // {
  //   id: 'User Scope',
  //   element: 'User Scope',
  //   width: '1fr',
  // },
  {
    id: 'Action',
    element: 'Action',
    width: '150px',
  },
]
