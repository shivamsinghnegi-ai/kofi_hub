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
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px" }}>
                        <img src={image2} alt="" style={{ width: "190px", height: "190px" }} />
                        <p>READY TO DRINK</p>
                    </div>
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px" }}>
                        <img src={image3} alt="" style={{ width: "190px", height: "190px" }} />
                        <p>NO EQUIPMENT BREWING</p>
                    </div>
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px" }}>
                        <img src={image4} alt="" style={{ width: "190px", height: "190px" }} />
                        <p>BREWING EQUIPMENT</p>
                    </div>
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px" }}>
                        <img src={image5} alt="" style={{ width: "190px", height: "190px" }} />
                        <p>ROASTED COFFEE RECOMMENDATION</p>
                    </div>
                </div>
            </div>

            <div>
                <img src={image6} alt="" style={{ width: "100%" }} />
            </div>
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

                        textAlign: "center",
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
                    flexGrow:1,
                    marginLeft:"60px",
                    alignSelf: "flex-start",  
                    marginTop:"50px",

              
                }}>
                    <h2 style={{ fontSize: "40px", color: "black", fontWeight: "bold" }}>Brew More. Save More!</h2>
                    <p style={{ fontSize: "21px", color: "#444",fontFamily:"poppins" }}>When you get a subscription from us, you:</p>
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
                        backgroundColor:"#90C1CF",
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
                        marginLeft:"-30px",
                        marginTop:"50px"
                    }} />
                </div>
                <img src={image13} alt=""style={{ width: "20%", marginLeft: "1170px", marginTop: "-703px" }}/>
                <img src={image14} alt=""style={{ width: "20%", marginLeft: "-1530px",marginTop:"-80px"}} />
                

                <div>
                   <h1 style={{fontFamily:"cormorant",fontSize:"35px",marginTop:"40px"}}>Completely customise your subscription,in just a few clicks.</h1>
                </div>
            </section>





        </div>
    );
};

export default LandingPage;
