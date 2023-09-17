import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { render, RenderOptions } from '@testing-library/react'
import type { StateSchema } from 'app/providers/StoreProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ReactElement, ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import reduxMockStateForTesting from 'shared/defaults/tests/mockDataForTesting'
import { ActiveModal } from 'widgets/ActiveModal/ActiveModal'

type RenderWithProvidersParameters = {
  preloadedState?: DeepPartial<StateSchema>
  storeForTesting?: ToolkitStore
  route?: string
  renderOptions?: RenderOptions
}
export const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = reduxMockStateForTesting,
    storeForTesting,
    route = '/',
    ...renderOptions
  }: RenderWithProvidersParameters = {},
) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={preloadedState}>
        <ActiveModal />
        {children}
      </StoreProvider>
    </MemoryRouter>
  )

  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
