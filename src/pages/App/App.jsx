import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from '../../components/NavBar/NavBar'
import Gallery from '../../components/Gallery/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="App">
      <NavBar />
        <Routes> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Gallery />} />
        </Routes>
      </main>
    </>
  )
}

export default App
