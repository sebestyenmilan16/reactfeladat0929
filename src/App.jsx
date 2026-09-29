import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <NavBar />
      <MainContent />
      

    </>
  )
}

export default App
