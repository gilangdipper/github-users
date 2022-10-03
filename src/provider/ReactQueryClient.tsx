import { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const ReactQueryClient: FC<{ children: JSX.Element }> = ({ children }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryClient
