import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(storedWishlist);
    }, []);


    const isWishlisted = wishlist.some((item) => item._id === product._id);

    const toggleWishlist = () => {
        let updatedWishlist;
        if (isWishlisted) {

            updatedWishlist = wishlist.filter((item) => item._id !== product._id);
        } else {

            updatedWishlist = [...wishlist, product];
        }

        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

    return (
        <div
            style={{
                fontFamily: "Poppins, sans-serif",
                padding: "15px",
                width: "300px",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
                position: "relative",
            }}
        >
            {/* Wishlist Heart Icon */}
            <div
                onClick={toggleWishlist}
                style={{
                    position: "absolute",
                    top: "19px",
                    right: "19px",
                    cursor: "pointer",
                    fontSize: "26px",
                    backgroundColor: "#888", // Dark background for contrast
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

            {/* Product Image */}
            <img
                src={product.image}
                alt={product.name}
                style={{
                    width: "100%",
                    height: "386px",
                    borderRadius: "10px",
                }}
            />
            {/* Product Name */}
            <h1 style={{ fontSize: "22px", margin: "10px 5px", color: "#000" }}>
                {product.name}
            </h1>
            {/* Product Description */}
            <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
                {product.description}
            </p>
            {/* Buy Now Button */}
            <button
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
