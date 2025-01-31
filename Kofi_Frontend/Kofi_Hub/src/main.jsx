import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContactUs from './ContactUs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactUs />  
  </StrictMode>,
)
