import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TempConverter from './Components/TempConverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TempConverter />
    </>
  )
}

export default App
