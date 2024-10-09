import { useState } from 'react'
import './App.css'
import Hero from './components/hero'
import Highlights from './components/Highlights'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-black'>
     <Navbar />
     <Hero />
     <Highlights />
    </main>
  )
}

export default App
