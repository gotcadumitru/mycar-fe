import { waitFor } from '@testing-library/react'
import mockAxios from 'jest-mock-axios'
import { categoriesFromCategoryApiMaxType } from 'shared/defaults/tests/categories'
import { renderWithProviders } from 'shared/lib/tests/testUtils'
import { OpenMode } from 'shared/types/types'
import CreateEditCategoryModal from './CreateEditCategoryModal'

describe('CreateEditCategoryModal', () => {
  describe('Create Mode', () => {
    test('Should render "Create a Category" text', () => {
      const { queryByText } = renderWithProviders(
        <CreateEditCategoryModal id={null} mode={OpenMode.CREATE} />,
      )
      expect(queryByText(/Create a Category/)).toBeInTheDocument()
    })

    test('A GET request must not be sent to receive the category', () => {
      renderWithProviders(<CreateEditCategoryModal id={null} mode={OpenMode.CREATE} />)
      expect(mockAxios.get).not.toBeCalled()
    })
  })

  describe('Edit Mode', () => {
    test('Should render "Edit a Category" text', () => {
      const categoryToEdit = categoriesFromCategoryApiMaxType.originalFromRequest[0]
      const { queryByText } = renderWithProviders(
        <CreateEditCategoryModal id={categoryToEdit.categoryKey} mode={OpenMode.EDIT} />,
      )
      expect(queryByText(/Edit a Category/)).toBeInTheDocument()
    })

    test('A GET request must be sent to receive the category', async () => {
      const categoryToEdit = categoriesFromCategoryApiMaxType.originalFromRequest[0]
      mockAxios.get.mockResolvedValueOnce({
        data: {
          body: categoryToEdit,
        },
      })
      renderWithProviders(
        <CreateEditCategoryModal id={categoryToEdit.categoryKey} mode={OpenMode.EDIT} />,
      )
      await waitFor(() => {
        expect(mockAxios.get).toBeCalled()
      })
    })
  })
  describe('Clone Mode', () => {
    test('Should render "Clone a Category" text', () => {
      const categoryToEdit = categoriesFromCategoryApiMaxType.originalFromRequest[0]
      const { queryByText } = renderWithProviders(
        <CreateEditCategoryModal id={categoryToEdit.categoryKey} mode={OpenMode.CLONE} />,
      )
      expect(queryByText(/Clone a Category/)).toBeInTheDocument()
    })

    test('A GET request must be sent to receive the category to clone', async () => {
      const categoryToEdit = categoriesFromCategoryApiMaxType.originalFromRequest[0]
      mockAxios.get.mockResolvedValueOnce({
        data: {
          body: categoryToEdit,
        },
      })
      renderWithProviders(
        <CreateEditCategoryModal id={categoryToEdit.categoryKey} mode={OpenMode.CLONE} />,
      )

      await waitFor(() => {
        expect(mockAxios.get).toBeCalled()
      })
    })
  })
})
