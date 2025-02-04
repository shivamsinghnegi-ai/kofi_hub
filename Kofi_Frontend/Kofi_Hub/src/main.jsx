import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './Components/ContactUs.jsx'
import LandingPage from './Components/Landingpage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router> 
  </StrictMode>,
)
