import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Log to console in development
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught:', error, info.componentStack)
    }

    // Send to error tracking service in production
    if (import.meta.env.PROD && import.meta.env.VITE_SENTRY_DSN) {
      // Sentry integration would go here
      // Example: Sentry.captureException(error, { extra: { componentStack: info.componentStack } })
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-8">
            <div className="max-w-md text-center space-y-4">
              <h1 className="text-2xl font-bold">Something went wrong</h1>
              <p className="text-muted-foreground text-sm">
                {this.state.error?.message ?? 'An unexpected error occurred.'}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                Reload page
              </button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
