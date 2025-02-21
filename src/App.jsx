import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './object/Nav'
import BloxDown from './object/BloxDown'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <BloxDown></BloxDown>
    </>
  )
}

export default App
