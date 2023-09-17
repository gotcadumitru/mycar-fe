/* eslint-disable no-console */
import { logEvent } from 'firebase/analytics'
import { Component, ErrorInfo, ReactNode, Suspense } from 'react'
import { firebaseAnalytics } from 'shared/api/firebase'
import { ErrorPage } from 'widgets/ErrorPage'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    console.log(error)

    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    logEvent(firebaseAnalytics, 'exception', {
      description: 'ErrorBoundary exception',
      fatal: true,
      error,
      errorInfo,
    })
    console.log(error, errorInfo)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback=''>
          <ErrorPage />
        </Suspense>
      )
    }

    return children
  }
}

export default ErrorBoundary
