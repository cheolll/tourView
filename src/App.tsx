import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Travel from './components/travel/Travel'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TravelDetail from './components/travel/TravelDetail';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Travel />}/>
            <Route path='/travel/:contentId' element={<TravelDetail />}/>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
