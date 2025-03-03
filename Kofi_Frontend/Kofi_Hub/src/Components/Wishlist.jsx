import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductCard from "../Components/ProductCard";

const WishlistPage = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(storedWishlist);
    }, []);

    const handleRemoveFromWishlist = (name) => {
        const updatedWishlist = wishlist.filter(item => item.name !== name);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

    return (
        <>
           <Navbar />
            <div style={{ padding: "40px", textAlign: "center" }}>
                <h1 style={{ fontSize: "36px", fontFamily: "Patua One" }}>Your Wishlist </h1>

                {wishlist.length === 0 ? (
                    <p style={{ fontSize: "20px", marginTop: "20px" }}>No items in your wishlist yet!</p>
                ) : (
                    <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", marginTop: "20px" }}>
                        {wishlist.map((item) => (
                            <ProductCard
                                key={item.name}
                                product={item}
                                onWishlistToggle={() => handleRemoveFromWishlist(item.name)}
                                isWishlisted={true} // Ensure red heart appears
                            />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default WishlistPage;
