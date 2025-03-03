import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import arrow from "../assets/heading-arrow_954X 4.png";
import image from "../assets/Diwali2024_WebBanner07_250924 1.png";
import Auto from "../assets/auto-equip 1.png";
import Manual from "../assets/1_ne 1.png";
import ProductCard from "../Components/ProductCard";



const EquipmentPage = () => {
    const [equipment, setEquipment] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/equipment")
            .then((res) => res.json())
            .then((data) => setEquipment(data))
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    const automated = equipment.filter((item) => item.type === "Automated");
    const manual = equipment.filter((item) => item.type === "Manual");

    return (
        <>
            {/* Navbar - Outside Main Content */}
            <Navbar />
            <div>
                <img src={image} alt="" style={{ width: "100%" }} />
            </div>

            <div style={{ backgroundColor: "#FFF9EF", height: "440px" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "130px",
                        paddingTop: "70px",
                    }}
                >
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px" }}>
                        <img src={Auto} alt="" style={{ width: "240px", height: "240px" }} />
                        <p style={{fontSize:"28px"}}>Automated </p>
                    </div>
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px" }}>
                        <img src={Manual} alt="" style={{ width: "240px", height: "240px" }} />
                        <p style={{fontSize:"28px"}}>Manual</p>
                    </div>
                </div>
            </div>

            <div style={{ padding: "20px" }}>
                {/* Automated Brewing */}
                <div style={{ display: "flex" }}>
                    <h2 style={{ fontSize: "50px", fontWeight: 300, fontFamily: "Patua one" }}>Automated Brewing</h2>
                    <img src={arrow} alt="" style={{ width: "60%", height: "43px", marginTop: "55px", marginLeft: "70px" }} />
                </div>

                <div style={{ display: "flex", gap: "55px", flexWrap: "wrap", justifyContent: "flex-start", marginTop: "15px" }}>
                    {automated.map((automated) => (
                        <ProductCard key={automated._id} product={automated} />
                    ))}
                </div>

                {/* Manual Brewing */}
                <div style={{ display: "flex" }}>
                    <h2 style={{ fontSize: "50px", fontWeight: 300, fontFamily: "Patua one", marginTop: "90px" }}>Manual Brewing</h2>
                    <img src={arrow} alt="" style={{ width: "60%", height: "43px", marginTop: "100px", marginLeft: "70px" }} />
                </div>
                <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "flex-start", marginTop: "15px" }}>
                    {manual.map((manual) => (
                        <ProductCard key={manual._id} product={manual} />
                    ))}
                </div>
            </div>

            {/* Footer - Outside Main Content */}
            <Footer />
        </>
    );
};

export default EquipmentPage;
