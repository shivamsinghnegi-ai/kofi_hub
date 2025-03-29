import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, source }) => {
  const [wishlist, setWishlist] = useState([]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
    setIsWishlisted(storedWishlist.some((item) => item._id === product._id));
  }, [product._id]);

  const toggleWishlist = () => {
    let updatedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (isWishlisted) {
      updatedWishlist = updatedWishlist.filter(item => item._id !== product._id);
    } else {
      updatedWishlist.push({
        _id: product._id || new Date().getTime().toString(),
        name: product.name,
        image: product.image,
        description: product.description,
        price: product.price || "₹0"
      });
    }
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
    setIsWishlisted(!isWishlisted);
  };

  const handleCardClick = () => {
    const route = source === "landing" ? `/landing/product/${product._id}` : `/offers/product/${product._id}`;
    console.log("Navigating to:", route, "with product:", product);
    navigate(route, { state: { product } });
  };

  const handleBuyNow = (e) => {
    e.stopPropagation(); // Prevent card click from triggering
    console.log("Buy Now clicked, navigating to checkout with product:", product);
    navigate('/checkout', { state: { product } });
  };

  return (
    <div
      onClick={handleCardClick}
      style={{
        fontFamily: "Poppins, sans-serif",
        padding: "15px",
        width: "300px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
        position: "relative",
        cursor: "pointer"
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist();
        }}
        style={{
          position: "absolute",
          top: "19px",
          right: "19px",
          cursor: "pointer",
          fontSize: "26px",
          backgroundColor: "#888",
          borderRadius: "50%",
          padding: "8px",
          transition: "all 0.3s ease-in-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isWishlisted ? "red" : "#ccc",
        }}
      >
        {isWishlisted ? <FaHeart /> : <FaRegHeart />}
      </div>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "386px",
          borderRadius: "10px",
          objectFit: "cover"
        }}
      />
      <h1 style={{ fontSize: "22px", margin: "10px 5px", color: "#000" }}>{product.name}</h1>
      <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>{product.description}</p>
      <p style={{ fontSize: "18px", color: "#333", marginBottom: "10px", fontWeight: "bold" }}>
        {product.price || "Price not available"}
      </p>
      <button
        onClick={handleBuyNow}
        style={{
          width: "100%",
          height: "45px",
          borderRadius: "5px",
          backgroundColor: "#90C1CF",
          color: "white",
          fontWeight: "bold",
          fontSize: "18px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;