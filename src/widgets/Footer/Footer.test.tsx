import { renderWithProviders } from 'shared/lib/tests/testUtils'
import Footer from './Footer'

describe('Footer', () => {
  it('should be rendered', () => {
    const { container } = renderWithProviders(<Footer />)
    expect(container.getElementsByClassName('footer').length).toBe(1)
  })
})
