import React from "react";
import Navbar from "./Navbar";
import Carousel from "../Components/Carousel/Carousel";
import image1 from "../assets/blod-coffee-nav (2).png";
import image2 from "../assets/Ellipse_2 (1).png";
import image3 from "../assets/Ellipse_4 (1).png";
import image4 from "../assets/Ellipse_5 (1).png";
import image5 from "../assets/blod-coffee-quiz (1).png";
import image6 from "../assets/image 7.png";
import image7 from "../assets/leftcols_538x 1.png";
import image8 from "../assets/Screenshot 2024-10-24 102256.png";
import image9 from "../assets/Screenshot 2024-10-24 102305.png";
import image10 from "../assets/Screenshot 2024-10-24 102313.png";
import image11 from "../assets/Screenshot 2024-10-24 102323.png";
import image12 from "../assets/CP_20_Jul10171_1_800x (1).png";
import image13 from "../assets/leftcols_538x 1.png";
import image14 from "../assets/leftcols_538x 3.png";
import image15 from "../assets/number_large (1).png";
import image16 from "../assets/pack_size_large (1).png";
import image17 from "../assets/coffees_large (1).png";
import image18 from "../assets/grind_size_large (1).png";
import image19 from "../assets/frequency_large (1).png";
import image20 from "../assets/Group_6_1-change (1).png";
import image21 from "../assets/Asset_1_1_140x (1).png";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";


const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <div style={{ backgroundColor: "#FFF9EF", height: "440px" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "80px",
                        paddingTop: "90px",
                    }}
                >
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px" }}>
                        <img src={image1} alt="" style={{ width: "190px", height: "190px" }} />
                        <p>ROASTED & GROUND COFFEE </p>
                    </div>
                    <Link to="/drinks" style={{ textDecoration: "none", color: "inherit" }}>
                        <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px" }}>
                            <img src={image2} alt="" style={{ width: "190px", height: "190px" }} />
                            <p>READY TO DRINK</p>
                        </div>
                    </Link>
                    <Link to="/noequipment" style={{ textDecoration: "none", color: "inherit" }}>
                        <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px", cursor: "pointer" }}>
                            <img src={image3} alt="" style={{ width: "190px", height: "190px" }} />
                            <p>NO EQUIPMENT BREWING</p>
                        </div>
                    </Link>

                    <Link to="/equipment" style={{ textDecoration: "none", color: "inherit" }}>
                        <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px" }}>
                            <img src={image4} alt="" style={{ width: "190px", height: "190px" }} />
                            <p>BREWING EQUIPMENT</p>
                        </div>
                    </Link>
                    <Link to="/offers" style={{ textDecoration: "none", color: "inherit" }}>
                        <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px" }}>
                            <img src={image5} alt="" style={{ width: "190px", height: "190px" }} />
                            <p>ROASTED COFFEE RECOMMENDATION</p>
                        </div>
                    </Link>


                </div>
            </div>
            <Link to="/offers" style={{ textDecoration: "none", color: "inherit" }}>
                <div>
                    <img src={image6} alt="" style={{ width: "100%" }} />
                </div>
            </Link>
            <div>
                <img src={image7} alt="" style={{ width: "30%", marginLeft: "1060px", marginTop: "-110px" }} />
            </div>

            <div>
                <h1 style={{ marginTop: "-450px", fontFamily: "poppins", fontSize: "55px", fontWeight: "500", marginLeft: "20px" }}>Best seller Coffees</h1>
            </div>

            {/* ------------Product Cards------------------- */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "38px",
                    padding: "8px",
                    marginLeft: "-40px"
                }}
            >
                {/* Product Card 1 */}
                <div
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
                        src={image8}
                        alt="5 in 1 Explorer Pack"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px",
                        }}
                    />
                    <h1 style={{ fontSize: "22px", margin: "10px 5px" }}>
                        5 in 1 Explorer Pack
                    </h1>
                    <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
                        Kofi Hub Coffee Roasters
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

                {/* Product Card 2 */}
                <div
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
                        src={image9}
                        alt="5 in 1 Explorer Pack"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px",
                        }}
                    />
                    <h1 style={{ fontSize: "22px", margin: "10px 0 5px" }}>
                        Attikan Estate
                    </h1>
                    <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
                        Dark chocolate, Almonds
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

                {/* Product Card 3 */}
                <div
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
                        src={image10}
                        alt="5 in 1 Explorer Pack"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px",
                        }}
                    />
                    <h1 style={{ fontSize: "22px", margin: "10px 0 5px" }}>
                        VIENNA ROAST
                    </h1>
                    <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>Cocoa, oaky, Bitter Sweet </p>
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

                {/* Product Card 4 */}
                <div
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
                        src={image11}
                        alt="5 in 1 Explorer Pack"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px",
                        }}
                    />
                    <h1 style={{ fontSize: "22px", margin: "10px 0 5px" }}>
                        FRENCH ROAST
                    </h1>
                    <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
                        Strong, Cocoa, Bitter Sweet
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
            </div>

            <section style={{
                display: "flex",
                marginTop: "50px",
                padding: "50px",
                backgroundColor: "#FFF9EF",
                gap: "30px",
                flexWrap: "wrap",
                textAlign: "left",
                alignItems: "flex-start",
                minHeight: "800px"

            }}>
                <div style={{
                    backgroundColor: "white",
                    padding: "30px",
                    borderRadius: "10px",
                    maxWidth: "700px",
                    flexGrow: 1,
                    marginLeft: "60px",
                    alignSelf: "flex-start",
                    marginTop: "50px",


                }}>
                    <h2 style={{ fontSize: "40px", color: "black", fontWeight: "bold" }}>Brew More. Save More!</h2>
                    <p style={{ fontSize: "21px", color: "#444", fontFamily: "poppins" }}>When you get a subscription from us, you:</p>
                    <ul style={{ padding: "0", listStyle: "none", lineHeight: "2.3", fontSize: "18px" }}>
                        <li><strong>01 /</strong> Save up to 20%</li>
                        <li><strong>02 /</strong> Enjoy convenience with doorstep deliveries</li>
                        <li><strong>03 /</strong> Experiment more with new and different coffees</li>
                        <li><strong>04 /</strong> Customise your plan completely</li>
                        <li><strong>05 /</strong> Stay stocked and never run out of coffee!</li>
                    </ul>
                    <button style={{
                        marginTop: "15px",
                        padding: "12px 25px",
                        backgroundColor: "#90C1CF",
                        border: "none",
                        color: "white",
                        fontSize: "1em",
                        cursor: "pointer",
                        borderRadius: "5px",
                        fontWeight: "bold"
                    }}
                    >SUBSCRIBE NOW</button>
                </div>
                <div>
                    <img src={image12} alt="Coffee bags and brewing set" style={{
                        maxWidth: "450px",
                        height: "73vh",
                        borderRadius: "10px",
                        marginLeft: "-30px",
                        marginTop: "50px"
                    }} />
                </div>
                <img src={image13} alt="" style={{ width: "20%", marginLeft: "1170px", marginTop: "-703px" }} />
                <img src={image14} alt="" style={{ width: "20%", marginLeft: "-1530px", marginTop: "-80px" }} />


                <div>
                    <section style={{ textAlign: "center", backgroundColor: "#FFF9EF", padding: "10px", fontFamily: "Cormorant", marginLeft: "-180px", marginTop: "60px" }}>
                        <h2 style={{ fontSize: "50px", color: "#333" }}>
                            Completely customise your subscription, <br /> in just a few clicks.
                        </h2>
                        <p style={{ fontSize: "35px", color: "#222", marginTop: "10px" }}>You get to pick:</p>

                        <div style={{ display: "flex", justifyContent: "center", gap: "100px", marginTop: "90px" }}>
                            <div style={{ textAlign: "center" }}>
                                <img src={image15} alt="Number" style={{ width: "150px" }} />
                                <p style={{ fontSize: "30px", color: "#333", fontFamily: "poppins" }}>Number</p>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <img src={image16} alt="Pack Size" style={{ width: "150px" }} />
                                <p style={{ fontSize: "30px", color: "#333", fontFamily: "poppins" }}>Pack Size</p>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <img src={image17} alt="Coffee" style={{ width: "150px" }} />
                                <p style={{ fontSize: "30px", color: "#333", fontFamily: "poppins" }}>Coffee</p>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <img src={image18} alt="Grind Size" style={{ width: "150px" }} />
                                <p style={{ fontSize: "30px", color: "#333", fontFamily: "poppins" }}>Grind Size</p>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <img src={image19} alt="Frequency" style={{ width: "150px" }} />
                                <p style={{ fontSize: "30px", color: "#333", fontFamily: "poppins" }}>Frequency</p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <div>
                <img src={image20} alt="" />
            </div>


            <div style={{ textAlign: "center", fontFamily: "poppins", fontSize: "30px", marginTop: "140px", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                <img src={image21} alt="" style={{ width: "150px" }} />
                < h1>Happy Customers</h1>
            </div>


            <div style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap", marginTop: "30px" }}>
                <div style={{ backgroundColor: "#FFF9EF", borderRadius: "10px", padding: "20px", width: "300px", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "400px" }}>
                    <p style={{ fontSize: "18px", color: "#000000", marginBottom: "15px", lineHeight: "1.6", minHeight: "120px", fontFamily: "poppins", width: "400px" }}>
                        "I've been drinking coffee for a year now but never tried Blue Tokai. I heard about Attikan a lot and it was worth the hype! I am not a fan of darker roasts but it was one of the smoothest coffees I’ve tried till now. I'm definitely ordering again."
                    </p>
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem", marginBottom: "10px", fontFamily: "poppins" }}>Keerthi Hardasani</p>
                    <div style={{ color: "#ffcc00", fontSize: "1.5rem" }}>★ ★ ★ ★ ★</div>
                </div>

                <div style={{ backgroundColor: "#FFF9EF", borderRadius: "10px", padding: "20px", width: "300px", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "400px" }}>
                    <p style={{ fontSize: "18px", marginBottom: "15px", lineHeight: "1.6", minHeight: "120px", fontFamily: "poppins", width: "400px" }}>
                        "Love the packaging, the coffee selection, the community events you do. The general love for coffee you want to share with the world is amazing to see. Keep shining! :)"
                    </p>
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#000000", marginBottom: "10px", fontFamily: "poppins" }}>Sahil Madan</p>
                    <div style={{ color: "#ffcc00", fontSize: "1.5rem" }}>★ ★ ★ ★ ★</div>
                </div>

                <div style={{ backgroundColor: "#FFF9EF", borderRadius: "10px", padding: "20px", width: "300px", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "400px" }}>
                    <p style={{ fontSize: "19px", marginBottom: "15px", lineHeight: "1.6", minHeight: "120px", fontFamily: "poppins", width: "400px" }}>
                        "Blue Tokai is hands down the best coffee brand out there! I've enjoyed each cup at their cafes and whenever I brew at home. I can’t get enough of their coffee and I recommend it to everyone!"
                    </p>
                    <p style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#000000", marginBottom: "10px", fontFamily: "poppins" }}>Krishna Sarbadhikary</p>
                    <div style={{ color: "#ffcc00", fontSize: "1.5rem" }}>★ ★ ★ ★ ★</div>
                </div>
            </div>
            <Footer />






        </div>
    );
};

export default LandingPage;
