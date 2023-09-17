import { renderWithProviders } from 'shared/lib/tests/testUtils'
import Header from './Header'

describe('Header', () => {
  it('should be rendered', () => {
    const { container } = renderWithProviders(<Header />)
    expect(container.getElementsByClassName('header').length).toBe(1)
  })
})
