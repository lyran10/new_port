import './App.css'
import { Main } from './components/main'
import { ContextProvider } from './components/context/context.tsx'

function App() {

  return (
    <ContextProvider>
      <Main/>
    </ContextProvider>
  )
}

export default App
