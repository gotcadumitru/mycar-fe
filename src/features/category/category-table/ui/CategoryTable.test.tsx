import { fireEvent, screen, waitFor } from '@testing-library/react'
import mockAxios from 'jest-mock-axios'
import {
  categoriesFromCategoryApiMaxType,
  categoriesFromCategoryApiMinType,
} from 'shared/defaults/tests/categories'
import reduxMockStateForTesting from 'shared/defaults/tests/mockDataForTesting'
import { renderWithProviders } from 'shared/lib/tests/testUtils'
import CategoryTable from './CategoryTable'

describe('CategoryTable', () => {
  beforeEach(() => {
    mockAxios.get.mockResolvedValueOnce({
      data: {
        body: categoriesFromCategoryApiMinType.originalFromRequest,
      },
    })
  })
  it('should render the category table', async () => {
    renderWithProviders(<CategoryTable />)
    await waitFor(() => {
      expect(screen.getByTestId('category-table')).toBeInTheDocument()
    })
  })
  it('should render the table with 10 rows', async () => {
    const { container } = renderWithProviders(<CategoryTable />)
    await waitFor(() => {
      const boxes = container.getElementsByClassName('table__row')
      expect(boxes.length).toBe(reduxMockStateForTesting.category?.allCategories?.length)
    })
  })

  it('should filter by the toolbar search value', async () => {
    const { container } = renderWithProviders(<CategoryTable />, {
      preloadedState: {
        ...reduxMockStateForTesting,
        category: {
          ...reduxMockStateForTesting.category,
          toolbarSearchByValue: categoriesFromCategoryApiMinType.converted[0].description,
        },
      },
    })
    await waitFor(() => {
      const boxes = container.getElementsByClassName('table__row')
      expect(boxes.length).toBe(1)
    })
  })

  it('should render the table with 6 columns', async () => {
    const { container } = renderWithProviders(<CategoryTable />)
    await waitFor(() => {
      const boxes = container.getElementsByClassName('table__header-item')
      expect(boxes.length).toBe(6)
    })
  })

  test('onActiveClick should open enable/disable modal', async () => {
    const { getAllByTestId, queryByText, getByText } = renderWithProviders(<CategoryTable />)

    await waitFor(() => {
      fireEvent.click(getAllByTestId('toggle-status')[0])
      const modalQuestion = 'Are you sure you want to disable this category?'
      expect(getByText(modalQuestion)).toBeInTheDocument()
      const okButton = getByText('Ok')
      fireEvent.click(okButton)
      const modal = queryByText(modalQuestion)
      expect(modal).not.toBeInTheDocument()
    })
  })

  test('onDeleteClick should open delete modal', async () => {
    const { getAllByTestId, queryByText, getByText } = renderWithProviders(<CategoryTable />)

    await waitFor(() => {
      fireEvent.click(getAllByTestId('delete-category')[0]) // simulate clicking on the "Disable" button
      const modalQuestion = 'Are you sure you want to delete this category?'
      expect(getByText(modalQuestion)).toBeInTheDocument()
      const okButton = getByText('Ok')
      fireEvent.click(okButton)
      const modal = queryByText(modalQuestion)
      expect(modal).not.toBeInTheDocument()
    })
  })
  test('onDuplicateClick should open create category modal', async () => {
    const { findAllByTestId, queryByText } = renderWithProviders(<CategoryTable />)

    mockAxios.get.mockResolvedValueOnce({
      data: {
        body: categoriesFromCategoryApiMaxType.originalFromRequest[0],
      },
    })
    const buttonToClick = (await findAllByTestId('duplicate-category-btn'))[0]
    expect(queryByText('Clone a Category')).not.toBeInTheDocument()
    await waitFor(() => {
      fireEvent.click(buttonToClick)
      expect(queryByText('Clone a Category')).toBeInTheDocument()
    })
  })
})
