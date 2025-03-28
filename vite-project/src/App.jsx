import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Camp1 from './Pages/Camp1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Camp1/>
    </>
  )
}

export default App
