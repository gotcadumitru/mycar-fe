import { RequireAuth } from 'app/providers/router/ui/RequireAuth'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/router/routeConfig'

const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map((route) => {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<RequireAuth isForAuthOnly={route.isForAuthOnly}>{route.element}</RequireAuth>}
        />
      )
    })}
  </Routes>
)

export default AppRouter
