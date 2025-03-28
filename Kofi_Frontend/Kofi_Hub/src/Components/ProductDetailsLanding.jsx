
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../Components/Footer';
import image8 from "../assets/Screenshot 2024-10-24 102256.png";
import image9 from "../assets/Screenshot 2024-10-24 102305.png";
import image10 from "../assets/Screenshot 2024-10-24 102313.png";
import image11 from "../assets/Screenshot 2024-10-24 102323.png";

const bestsellerCoffees = [
  { _id: "1", name: "5 in 1 Explorer Pack", description: "Kofi Hub Coffee Roasters", price: "₹299", image: image8 },
  { _id: "2", name: "Attikan Estate", description: "Dark chocolate, Almonds", price: "₹349", image: image9 },
  { _id: "3", name: "VIENNA ROAST", description: "Cocoa, Oaky, Bitter Sweet", price: "₹329", image: image10 },
  { _id: "4", name: "FRENCH ROAST", description: "Strong, Cocoa, Bitter Sweet", price: "₹379", image: image11 },
];

const ProductDetailsLanding = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const productFromState = location.state?.product;

  console.log("ID from useParams:", id);
  console.log("Location state:", location.state);

  if (!id) {
    return <div>No product ID provided in URL</div>;
  }

  const product = bestsellerCoffees.find(p => p._id === id) || 
                 (productFromState && productFromState._id === id ? productFromState : null);

  if (!product) {
    return <div>Product not found - ID: {id}</div>;
  }

  const handleBuyNow = () => {
    navigate('/checkout', { state: { product } });
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#FFF9EF", minHeight: "100vh" }}>
      <Navbar />
      <div style={{
        display: 'flex',
        maxWidth: '1200px',
        margin: '50px auto',
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      }}>
        <div style={{ flex: '1', padding: '20px' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ 
              width: '100%', 
              maxWidth: '450px', 
              height: 'auto', 
              borderRadius: '10px', 
              objectFit: 'cover',
              border: '2px solid #90C1CF'
            }} 
          />
        </div>
        <div style={{ 
          flex: '1', 
          padding: '20px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          textAlign: 'left'
        }}>
          <h1 style={{ fontSize: '36px', margin: '0 0 15px 0', color: '#333', fontWeight: '600' }}>
            {product.name}
          </h1>
          <p style={{ fontSize: '28px', color: '#90C1CF', margin: '0 0 20px 0', fontWeight: 'bold' }}>
            {product.price}
          </p>
          <p style={{ fontSize: '20px', color: '#555', margin: '0 0 30px 0', lineHeight: '1.6' }}>
            {product.description}
          </p>
          <button 
            onClick={handleBuyNow}
            style={{
              width: '250px',
              height: '50px',
              borderRadius: '8px',
              backgroundColor: '#90C1CF',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '20px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#78A8B5'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#90C1CF'}
          >
            Buy Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsLanding;