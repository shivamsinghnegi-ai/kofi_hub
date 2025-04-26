import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/reviews');
        setReviews(response.data);
      } catch (err) {
        setError('Failed to fetch reviews.');
        console.error(err);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", minHeight: "100vh", backgroundColor: "#FFF9EF" }}>
      <Navbar />
      <div style={{
        maxWidth: '1000px', margin: '50px auto', padding: '30px', backgroundColor: '#fff',
        borderRadius: '15px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 style={{ fontSize: '36px', color: '#333', textAlign: 'center', marginBottom: '30px' }}>
          Customer Testimonials
        </h1>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        {reviews.length === 0 && !error ? (
          <p style={{ fontSize: '18px', color: '#555', textAlign: 'center' }}>No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} style={{
              borderBottom: '1px solid #ddd', padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '10px',
            }}>
              <h3 style={{ fontSize: '20px', color: '#333', margin: '0' }}>{review.productName}</h3>
              <div style={{ fontSize: '18px', color: '#ffcc00' }}>
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <p style={{ fontSize: '16px', color: '#555', margin: '0' }}>{review.feedback}</p>
              <p style={{ fontSize: '14px', color: '#888', margin: '0' }}>
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;