import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import arrow from "../assets/heading-arrow_954X 4.png";
import image from "../assets/Diwali2024_WebBanner07_250924 1.png";
import Auto from "../assets/auto-equip 1.png";
import Manual from "../assets/1_ne 1.png";

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

                <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
                    {automated.map((item) => (
                        <div
                            key={item.name}
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                padding: "15px",
                                width: "300px",
                                borderRadius: "10px",
                                textAlign: "center",
                                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "#ffffff",
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "10px",
                                }}
                            />
                            <h1 style={{ fontSize: "22px", margin: "10px 5px", color: "#000" }}>
                                {item.name}
                            </h1>
                            <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
                                {item.description}
                            </p>
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
                    ))}
                </div>

                {/* Manual Brewing */}
                <div style={{ display: "flex" }}>
                    <h2 style={{ fontSize: "50px", fontWeight: 300, fontFamily: "Patua one", marginTop: "90px" }}>Manual Brewing</h2>
                    <img src={arrow} alt="" style={{ width: "60%", height: "43px", marginTop: "100px", marginLeft: "70px" }} />
                </div>
                <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
                    {manual.map((item) => (
                        <div
                            key={item.name}
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                padding: "15px",
                                width: "300px",
                                borderRadius: "10px",
                                textAlign: "center",
                                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "#ffffff",
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "10px",
                                }}
                            />
                            <h1 style={{ fontSize: "22px", margin: "10px 5px", color: "#000" }}>
                                {item.name}
                            </h1>
                            <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
                                {item.description}
                            </p>
                            <button
                                style={{
                                    width: "100%",
                                    height: "45px",
                                    borderRadius: "5px",
                                    backgroundColor: "#90C1CF",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    border:"none",
                                    cursor:"pointer"
                                }}
                            >
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer - Outside Main Content */}
            <Footer />
        </>
    );
};

export default EquipmentPage;
