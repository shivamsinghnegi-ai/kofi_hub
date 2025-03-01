import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../assets/can.png";
import img2 from "../assets//Diwali2024.png";
import img3 from "../assets/balu-col-ig_large 1.png";
import img4 from "../assets/leftcols_538x 2.png";
import img5 from "../assets/heading-arrow_954X 4.png";
import ProductCard from "../Components/ProductCard";


const Drinks = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/drinks")
            .then((res) => res.json())
            .then((data) => setDrinks(data))
            .catch((err) => console.error("Error fetching drinks:", err));
    }, []);

    return (
        <>
            <Navbar />

            <div>
                <img src={img2} alt="" style={{ width: "100%" }} />
            </div>

            <div style={{ backgroundColor: "#FFF9EF", height: "700px" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "130px",
                        paddingTop: "70px",
                    }}
                >
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px", marginTop: "55px" }}>
                        <img src={img1} alt="" style={{ width: "300px", height: "300px" }} />
                        <p style={{ fontSize: "35px" }}>COLD BREW</p>
                    </div>

                </div>
                <img src={img3} alt="" style={{ marginLeft: "980px", marginTop: "-158px", width: "35%" }} />
                <img src={img4} alt="" style={{ width: "29%", marginTop: "-480px" }} />

            </div>

            <div style={{ display: "flex" }}>
                <h1 style={{ fontFamily: "Cormorant", fontWeight: 500, fontSize: "80px", marginTop: "70px" }}>Cold Brews Cans</h1>
                <img src={img5} alt="" style={{ width: "58%", height: "43px", marginTop: "96px", marginLeft: "70px" }} />
            </div>

            <div>
                <p style={{ fontSize: "30px", fontFamily: "poppins", marginTop: "-20px" }}>From the classics to unique new variants — pop open a cold brew can, sit back and enjoy. Our cold brews are steeped for 18 hours for a smooth brew.</p>
            </div>

            {/* Drinks Cards */}
            <div style={{ display: "flex", gap: "55px", flexWrap: "wrap", justifyContent: "center", marginTop: "70px" }}>
                {drinks.map((drink) => (
                    <ProductCard key={drink._id} product={drink} />
                ))}
            </div>

            <Footer />
        </>
    );
};

export default Drinks;
