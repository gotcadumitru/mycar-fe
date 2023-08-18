import mockAxios from 'jest-mock-axios'
import { categoriesFromCategoryApiMinType } from 'shared/defaults/tests/categories'
import { renderWithProviders } from 'shared/lib/tests/testUtils'
import App from './App'

test('The application must be rendered', async () => {
  mockAxios.get.mockResolvedValueOnce({
    data: {
      body: categoriesFromCategoryApiMinType.originalFromRequest,
    },
  })
  const { findByTestId } = renderWithProviders(<App />)
  const app = await findByTestId('app')
  expect(app).toBeInTheDocument()
})
