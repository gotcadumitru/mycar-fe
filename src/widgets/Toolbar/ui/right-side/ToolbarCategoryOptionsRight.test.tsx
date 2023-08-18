import { fireEvent, screen, waitFor } from '@testing-library/react'
import { categoriesFromCategoryApiMinType } from 'shared/defaults/tests/categories'
import { renderWithProviders } from 'shared/lib/tests/testUtils'
import { ToolbarCategoryOptionsRight } from 'widgets/Toolbar'

describe('ToolbarCategoryOptionsRight', () => {
  it('should be rendered', async () => {
    const { container } = renderWithProviders(<ToolbarCategoryOptionsRight />)

    expect(container.getElementsByClassName('toolbar__right-side').length).toBe(1)
  })
  it('should change auto-suggest value on type', async () => {
    renderWithProviders(<ToolbarCategoryOptionsRight />)
    const autoSuggestInput = screen.getByPlaceholderText(/Search by names, created by.../)

    expect(autoSuggestInput).toHaveValue('')
    const inputChangeEvent = {
      target: { value: categoriesFromCategoryApiMinType.converted[0].name },
    }
    fireEvent.change(autoSuggestInput, inputChangeEvent)
    await waitFor(() => {
      expect(autoSuggestInput).toHaveValue(inputChangeEvent.target.value)
    })
  })
})
