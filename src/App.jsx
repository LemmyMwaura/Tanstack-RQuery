import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Header from './components/Header';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>React Query</h1>
        <Header/>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom right'/>
    </QueryClientProvider>
  )
}

export default App
