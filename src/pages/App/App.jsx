import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from '../../components/NavBar/NavBar'
import Gallery from '../../components/Gallery/Gallery'
import ContactPage from '../ContactPage/Contactpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <main className="App">
          <NavBar />
          HIHIHI
          <Routes>
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/work" element={<Gallery />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}



export default App
