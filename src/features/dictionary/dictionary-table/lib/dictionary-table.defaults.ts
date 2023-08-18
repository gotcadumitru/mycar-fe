import type { TableHeaderItem } from 'shared/ui/Table'

export const openedModalInitialValues = {
  modalType: null,
  id: null,
}
export const dictionaryTableMockData = [
  {
    id: 'id1',
    term: 'Swearing',
    isActive: true,
    indicatedLanguage: 'English',
    createdBy: 'James Radford',
    createdDate: '01-Jan-2020',
    weighting: 10,
    description: `Ipsum nulla excepteur sunt ipsum in anim deserunt est culpa occaecat ut elit. Deserunt
    laborum duis laborum quis aliqua commodo ad adipisicing commodo duis cupidatat ullamco
    esse. Labore nisi nostrud adipisicing in irure magna cupidatat. Irure occaecat veniam
    sunt irure amet irure ea eiusmod minim ipsum. Nisi dolore nulla nulla fugiat ex Lorem ut
    magna ut pariatur. Quis ex quis exercitation ea sint exercitation id sunt aliqua
    excepteur velit elit id culpa.,`,
  },
  {
    id: 'id2',
    term: 'Underpants',
    isActive: true,
    indicatedLanguage: 'English',
    createdBy: 'James Radford',
    createdDate: '01-Jan-2020',
    weighting: -5,
    description: `irure ea eiusmod minim ipsum. Nisi dolore nulla nulla fugiat ex Lorem ut
    magna ut pariatur. Quis ex quis exercitation ea sint exercitation id sunt aliqua
    excepteur velit elit id culpa.,`,
  },
  {
    id: 'id3',
    term: 'Spangles',
    isActive: true,
    indicatedLanguage: '-',
    createdBy: 'James Radford',
    createdDate: '10-Jan-2021',
    weighting: 3,
    description: `Nisi dolore nulla nulla fugiat ex Lorem ut
    magna ut pariatur. Quis ex quis exercitation ea sint exercitation id sunt aliqua
    excepteur velit elit id culpa.,`,
  },
]
export const dictionaryTableHeaderItems: TableHeaderItem[] = [
  {
    id: 'Term',
    element: 'Term',
    width: '150px',
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
    id: 'Created Date',
    element: 'Created Date',
    width: '150px',
  },
  {
    id: 'Active',
    element: 'Active',
    width: '100px',
  },
  {
    id: 'Weighting',
    element: 'Weighting',
    width: '100px',
  },
  {
    id: 'Indicated Language',
    element: 'Indicated Language',
    width: '175px',
  },
  {
    id: 'Action',
    element: 'Action',
    width: '150px',
  },
]
