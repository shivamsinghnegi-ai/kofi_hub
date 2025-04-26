import   { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [formData, setFormData] = useState({
    name: '', address: '', pincode: '', city: '', state: '',
  });
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false); // Track order status
  const [showReviewPrompt, setShowReviewPrompt] = useState(false); // Review notification

  if (!product) {
    return <div>No product selected for checkout</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.pincode || !/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Valid 6-digit pincode is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmPurchase = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Order Details:", { product, ...formData });
      setOrderPlaced(true);
      // Simulate delivery after 2 seconds
      setTimeout(() => {
        setShowReviewPrompt(true); // Show review notification
      }, 2000);
    }
  };

  const handleReviewClick = () => {
    navigate('/review', { state: { product } });
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", minHeight: "100vh", backgroundColor: "#FFF9EF" }}>
      <Navbar />
      <div style={{
        maxWidth: '1000px', margin: '50px auto', padding: '30px', backgroundColor: '#fff',
        borderRadius: '15px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 style={{ fontSize: '36px', color: '#333', textAlign: 'center', marginBottom: '30px' }}>
          Checkout
        </h1>

        {!orderPlaced ? (
          <form onSubmit={handleConfirmPurchase}>
            {/* Existing form fields (name, address, etc.) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
              <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px', borderRadius: '10px', objectFit: 'cover' }} />
              <div>
                <h2 style={{ fontSize: '24px', color: '#333', margin: '0 0 10px 0' }}>{product.name}</h2>
                <p style={{ fontSize: '20px', color: '#90C1CF', fontWeight: 'bold', margin: '0 0 10px 0' }}>
                  {product.price || "Price not available"}
                </p>
                <p style={{ fontSize: '18px', color: '#555', margin: '0' }}>{product.description}</p>
              </div>
            </div>
            <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '20px' }}>Shipping Details</h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '16px', color: '#333', marginBottom: '5px' }}>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="Enter your full name" />
                {errors.name && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.name}</p>}
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '16px', color: '#333', marginBottom: '5px' }}>Address</label>
                <textarea name="address" value={formData.address} onChange={handleInputChange} style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '100px', boxSizing: 'border-box' }} placeholder="Enter your full address" />
                {errors.address && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.address}</p>}
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '16px', color: '#333', marginBottom: '5px' }}>Pincode</label>
                <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="Enter 6-digit pincode" maxLength="6" />
                {errors.pincode && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.pincode}</p>}
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '16px', color: '#333', marginBottom: '5px' }}>City</label>
                <input type="text" name="city" value={formData.city} onChange={handleInputChange} style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="Enter your city" />
                {errors.city && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.city}</p>}
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '16px', color: '#333', marginBottom: '5px' }}>State</label>
                <input type="text" name="state" value={formData.state} onChange={handleInputChange} style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="Enter your state" />
                {errors.state && <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{errors.state}</p>}
              </div>
            </div>
            <button type="submit" style={{ width: '100%', height: '50px', borderRadius: '8px', backgroundColor: '#90C1CF', color: 'white', fontWeight: 'bold', fontSize: '20px', border: 'none', cursor: 'pointer', marginTop: '30px', transition: 'background-color 0.3s ease' }} onMouseOver={(e) => e.target.style.backgroundColor = '#78A8B5'} onMouseOut={(e) => e.target.style.backgroundColor = '#90C1CF'}>
              Confirm Purchase
            </button>
          </form>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '24px', color: '#333' }}>Order Placed Successfully!</h2>
            <p style={{ fontSize: '18px', color: '#555' }}>Your order for {product.name} is being processed.</p>
          </div>
        )}

        {/* Review Notification Pop-Up */}
        {showReviewPrompt && (
          <div style={{
            position: 'fixed', top: '20%', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#fff',
            padding: '20px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', zIndex: 1000,
          }}>
            <h3 style={{ fontSize: '20px', color: '#333', marginBottom: '15px' }}>Your order has been delivered!</h3>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>
              Please share your feedback for {product.name}.
            </p>
            <button
              onClick={handleReviewClick}
              style={{
                width: '100%', height: '40px', borderRadius: '5px', backgroundColor: '#90C1CF', color: 'white',
                fontWeight: 'bold', fontSize: '16px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#78A8B5'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#90C1CF'}
            >
              Leave a Review
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;