import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import FreeBook from './Components/FreeBook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
      <FreeBook/>
      <Footer/>
      
    </>
  )
}

export default App
