import { useState } from 'react'
import './App.css'
import NavBar from '../../components/NavBar/NavBar'
import Gallery from '../../components/Gallery/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="App">
        <NavBar />
        <Gallery />

      </main>
    </>
  )
}

export default App
