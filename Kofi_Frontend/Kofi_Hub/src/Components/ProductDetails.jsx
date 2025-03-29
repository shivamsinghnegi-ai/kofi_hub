import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../Components/Footer';
import image2 from "../assets/coffee1.png";
import image3 from "../assets/coffee2.png";
import image4 from "../assets/coffee3.png";
import image5 from "../assets/coffee4.png";
import image6 from "../assets/coffee5.png";
import image7 from "../assets/coffee6.png";
import image8 from "../assets/coffee7.png";
import image9 from "../assets/coffee8.png";

const products = [
  { _id: "1", name: "Attikan Estate", image: image2, description: "Dark chocolate, Figs, ..", price: "₹2444" },
  { _id: "2", name: "Vienna Toast", image: image3, description: "Cocoa, oaky, Bitter sweet", price: "₹2434" },
  { _id: "3", name: "French Roast", image: image4, description: "Strong, Cocoa, Bitter Sweet", price: "₹2434"},
  { _id: "4", name: "Silver Oak Cafe Blend", image: image5, description: "Hazelnut, Honey, Grapes", price: "₹2434" },
  { _id: "5", name: "Attikan Estate", image: image6, description: "Dark chocolate, Figs, ..", price: "₹2444" },
  { _id: "6", name: "Vienna Toast", image: image7, description: "Cocoa, oaky, Bitter sweet", price: "₹2434"},
  { _id: "7", name: "French Roast", image: image8, description: "Strong, Cocoa, Bitter Sweet", price: "₹2434" },
  { _id: "8", name: "Silver Oak Cafe Blend", image: image9, description: "Hazelnut, Honey, Grapes", price: "₹2434" }
];

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const productFromState = location.state?.product;

  console.log("ID from useParams:", id);
  console.log("Location state:", location.state);

  if (!id) {
    return <div>No product ID provided in URL</div>;
  }

  const product = products.find(p => p._id === id) || 
                 (productFromState && productFromState._id === id ? productFromState : null);

  if (!product) {
    return <div>Product not found - ID: {id}</div>;
  }

  const handleBuyNow = () => {
    navigate('/checkout', { state: { product } });
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Navbar />
      <div style={{
        display: 'flex',
        maxWidth: '1200px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ flex: '1', padding: '20px' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '10px', objectFit: 'cover' }} 
          />
        </div>
        <div style={{ flex: '1', padding: '20px', textAlign: 'left' }}>
          <h1 style={{ fontSize: '32px', margin: '0 0 10px 0', color: '#000' }}>{product.name}</h1>
          <p style={{ fontSize: '24px', color: '#333', margin: '0 0 15px 0', fontWeight: 'bold' }}>
            {product.price || "Price not available"}
          </p>
          <p style={{ fontSize: '18px', color: '#555', margin: '0 0 20px 0' }}>{product.description}</p>
          <button 
            onClick={handleBuyNow}
            style={{
              width: '200px',
              height: '45px',
              borderRadius: '5px',
              backgroundColor: '#90C1CF',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;