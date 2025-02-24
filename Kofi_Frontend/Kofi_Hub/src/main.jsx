import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './Components/ContactUs.jsx'
import LandingPage from './Components/Landingpage.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Farms from './Components/Farms.jsx';
import EquipmentPage from './Components/Equipment.jsx';
import Offers from './Components/Offers.jsx';
import Drinks from './Components/Drinks.jsx';
import Noequipment from './Components/Noequipment.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Farms" element={<Farms/>}/>
        <Route path="/equipment" element={<EquipmentPage/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/drinks" element={<Drinks/>}/>
        <Route path="/noequipment" element={<Noequipment/>}/>
      </Routes>
    </Router> 
  </StrictMode>,
) 
