import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './Components/ContactUs.jsx';
import LandingPage from './Components/Landingpage';
import AboutUs from './Components/AboutUs.jsx';
import Farms from './Components/Farms.jsx';
import EquipmentPage from './Components/Equipment.jsx';
import Offers from './Components/Offers.jsx';
import Drinks from './Components/Drinks.jsx';
import Noequipment from './Components/Noequipment.jsx';
import WishlistPage from './Components/Wishlist.jsx';
import CreateAccountForm from './Components/Authentication/SignUp.jsx';
import LoginAccountForm from './Components/Authentication/Login.jsx';
import FloatingButton from './Components/ChatBot/FloatingChatButton.jsx';
import ChatModal from './Components/ChatBot/ChatModal.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import ProductDetailsLanding from './Components/ProductDetailsLanding.jsx';
import Checkout from './Components/Checkout.jsx';
import Review from './Components/Review.jsx';
import Testimonials from './Components/Testimonials.jsx';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatOpen = () => setIsChatOpen(true);
  const handleChatClose = () => setIsChatOpen(false);

  return (
    <div className="relative min-h-screen">
      <Routes>
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Farms" element={<Farms />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/noequipment" element={<Noequipment />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/signup" element={<CreateAccountForm />} />
        <Route path="/login" element={<LoginAccountForm />} />
        <Route path="/landing/product/:id" element={<ProductDetailsLanding />} />
        <Route path="/offers/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/review" element={<Review />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <FloatingButton onClick={handleChatOpen} />
      <ChatModal isOpen={isChatOpen} onClose={handleChatClose} />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);