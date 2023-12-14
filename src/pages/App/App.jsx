import { useState } from 'react'
import './App.css'
import NavBar from '../../components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="App">
        <NavBar />


      </main>
    </>
  )
}

export default App
