import  { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const Review = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  if (!product) {
    return <div>No product selected for review</div>;
  }

  const handleRating = (star) => {
    setRating(star);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      setError('Please provide a rating');
      return;
    }
    const review = {
      productId: product._id,
      productName: product.name,
      rating,
      feedback,
    };
    console.log('Sending review to backend:', review); // Debug log
    try {
      const response = await axios.post('http://localhost:5000/reviews', review);
      console.log('Response from backend:', response.data); // Debug log
      alert('Thank you for your review!');
      navigate('/testimonials');
    } catch (err) {
      setError('Failed to submit review. Please try again.');
      console.error('Axios error:', err.message, err.response?.data || err); // Enhanced error logging
    }
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", minHeight: "100vh", backgroundColor: "#FFF9EF" }}>
      <Navbar />
      <div style={{
        maxWidth: '600px', margin: '50px auto', padding: '30px', backgroundColor: '#fff',
        borderRadius: '15px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 style={{ fontSize: '28px', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
          Review {product.name}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px', borderRadius: '10px', objectFit: 'cover' }} />
          <div>
            <p style={{ fontSize: '18px', color: '#555' }}>{product.description}</p>
            <p style={{ fontSize: '20px', color: '#90C1CF', fontWeight: 'bold' }}>{product.price || "Price not available"}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <label style={{ fontSize: '16px', color: '#333', marginBottom: '10px', display: 'block' }}>Rate this product:</label>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRating(star)}
                style={{
                  fontSize: '30px', cursor: 'pointer', color: star <= rating ? '#ffcc00' : '#ccc',
                }}
              >
                ★
              </span>
            ))}
            {error && <p style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>{error}</p>}
          </div>
          <div>
            <label style={{ fontSize: '16px', color: '#333', marginBottom: '10px', display: 'block' }}>Feedback:</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '100px', boxSizing: 'border-box' }}
              placeholder="Share your thoughts..."
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%', height: '50px', borderRadius: '8px', backgroundColor: '#90C1CF', color: 'white',
              fontWeight: 'bold', fontSize: '20px', border: 'none', cursor: 'pointer', marginTop: '20px', transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#78A8B5'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#90C1CF'}
          >
            Submit Review
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Review;