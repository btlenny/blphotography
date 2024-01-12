import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Gallery from '../../components/Gallery/Gallery';
import ContactPage from '../ContactPage/ContactPage';
import LandingPage from '../LandingPage/LandingPage';

function App() {
  const [count, setCount] = useState(0);

  // Determine the current path using window.location.pathname
  const currentPath = window.location.pathname;

  // Conditionally render NavBar based on the current route
  const renderNavBar = () => {
    if (currentPath === '/') {
      return null; // Don't render NavBar on the homepage
    } else {
      return <NavBar />;
    }
  };

  return (
    <>
      <Router>
        <main className="App">
          {renderNavBar()}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/work" element={<Gallery />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;