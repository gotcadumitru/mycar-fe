import { ReactNode } from 'react'
import { RouteProps } from 'react-router-dom'

export type AppRoutesProps = RouteProps & {
  isForAuthOnly: boolean
  isWithoutRedirect?: boolean // for page not found
  skeleton?: ReactNode
}
