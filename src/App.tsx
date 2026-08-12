import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Travel from './components/travel/Travel'

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Travel />
      </QueryClientProvider>
    </>
  )
}

export default App
