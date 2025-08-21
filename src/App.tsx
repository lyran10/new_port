import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Main } from './components/main'
import { ContextProvider } from './components/context/context.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
      <Main/>
    </ContextProvider>
  )
}

export default App
