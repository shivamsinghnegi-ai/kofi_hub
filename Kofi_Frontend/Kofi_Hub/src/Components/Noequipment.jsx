import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import image1 from '../assets/banner1.png';
import image2 from '../assets/DALL·E 2025-02-24 15.11.54 - A close-up of a pink ceramic mug with vertical ridges, featuring a drip coffee bag hanging over the rim. Hot water is being poured into the bag, brewi.webp';
import image3 from '../assets/Cold_coffee.webp';
import img3 from "../assets/balu-col-ig_large 1.png";
import img4 from "../assets/leftcols_538x 2.png";
import img5 from "../assets/heading-arrow_954X 4.png";
import img6 from "../assets/banner2.png";
import img7 from "../assets/image.png";
import img8 from "../assets/image1.png";
import img9 from "../assets/image2.png";
import img10 from "../assets/image3.png";
import img11 from "../assets/bannner3.png";
import img12 from "../assets/cold.png";
import img13 from "../assets/cold2.png";
import img14 from "../assets/cold3.png";
import img15 from "../assets/cold4.png";




const Noequipment = () => {

    return (
        <>
            <Navbar />
            <div>
                <img src={image1} alt="" style={{ width: "100%" }} />
            </div>
            <div style={{ backgroundColor: "#FFF9EF", height: "925px" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "180px",
                        paddingTop: "70px",
                    }}
                >
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px", marginTop: "85px" }}>
                        <img src={image2} alt="" style={{ width: "330px", height: "330px", borderRadius: "280px" }} />
                        <p style={{ fontSize: "35px" }}>HOT WATER</p>
                    </div>
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px", marginTop: "88px" }}>
                        <img src={image3} alt="" style={{ width: "330px", height: "330px", borderRadius: "280px" }} />
                        <p style={{ fontSize: "35px" }}>COLD WATER</p>
                    </div>

                </div>
                <img src={img3} alt="" style={{ marginLeft: "980px", marginTop: "8px", width: "35%" }} />
                <img src={img4} alt="" style={{ width: "29%", marginTop: "-480px" }} />

            </div>

            <div style={{ display: "flex" }}>
                <h1 style={{ fontFamily: "Cormorant", fontWeight: 500, fontSize: "73px", marginTop: "90px" }}>Hot Water Brewing</h1>
                <img src={img5} alt="" style={{ width: "58%", height: "43px", marginTop: "120px", marginLeft: "70px", }} />
            </div>
            <p style={{ fontFamily: "poppins", fontSize: "30px", marginTop: "30px" }}>Like your coffee warm, nuanced and ready in minutes? The world of hot water brewing awaits you. For a hassle-free start, pick up our Easy Pour, and fix yourself a delicious brew in four easy steps.</p>
            <img src={img6} alt="" style={{ width: "100%", marginTop: "70px" }} />

            <div style={{ display: "flex" }}>
                <h1 style={{ fontFamily: "Cormorant", fontWeight: 500, fontSize: "73px", marginTop: "90px" }}>EASY POUR</h1>
                <img src={img5} alt="" style={{ width: "60%", height: "43px", marginTop: "110px", marginLeft: "70px", }} />
            </div>


            {/*---------------------------------------- PRODUCT CARDS -------------------------------------------------------------*/}
            <div style={{ display: "flex", justifyContent: "space-evenly", gap: "30px" }}>
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
                        src={img7}
                        alt="Attikan Estate"
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
                        Dark chocolate, Figs, ..
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
                        src={img8}
                        alt="Attikan Estate"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px",
                        }}
                    />
                    <h1 style={{ fontSize: "22px", margin: "10px 0 5px" }}>
                        Vienna Toast
                    </h1>
                    <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
                        Cocoa , oaky ,Bitter sweet..
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
                        src={img9}
                        alt="Attikan Estate"
                        style={{
                            width: "100%",
                            height: "388px",
                            borderRadius: "10px",
                        }}
                    />
                    <h1 style={{ fontSize: "22px", margin: "10px 0 5px" }}>
                        French Roast
                    </h1>
                    <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
                        Strong , Cocoa , Bitter Sweet
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
                        src={img10}
                        alt="Attikan Estate"
                        style={{
                            width: "100%",
                            height: "388px",
                            borderRadius: "10px",
                        }}
                    />
                    <h1 style={{ fontSize: "22px", margin: "10px 0 5px" }}>
                        Silver Oak Cafe Blend
                    </h1>
                    <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
                        Hazelnut, Honey, Grapes
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

            <div style={{ display: "flex" }}>
                <h1 style={{ fontFamily: "Cormorant", fontWeight: 500, fontSize: "70px", marginTop: "100px" }}>Cold Water Brewing </h1>
                <img src={img5} alt="" style={{ width: "58%", height: "43px", marginTop: "120px", marginLeft: "70px", }} />
            </div>
            <p style={{ fontFamily: "poppins", fontSize: "30px", marginTop: "30px",lineHeight:"1.7" }}>Want to brew smooth, refreshing cups of coffee without special equipment? Cold water brewing is the way to go. Just steep our cold brew bags overnight, and wake up to great-tasting coffee that you can savour all day.Each bag makes 3 glasses.</p>
            <img src={img11} alt="" style={{ width: "100%", marginTop: "70px" }} />

            <div style={{ display: "flex" }}>
                <h1 style={{ fontFamily: "Cormorant", fontWeight: 500, fontSize: "72px", marginTop: "100px" }}>Cold Brew Sachets</h1>
                <img src={img5} alt="" style={{ width: "60%", height: "43px", marginTop: "120px", marginLeft: "70px", }} />
            </div>


                {/*---------------------------------------- PRODUCT CARDS -------------------------------------------------------------*/}
                <div style={{ display: "flex", justifyContent: "space-evenly", gap: "30px" }}>
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
                        src={img12}
                        alt="Attikan Estate"
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
                        Dark chocolate, Figs, ..
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
                        src={img13}
                        alt="Attikan Estate"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px",
                        }}
                    />
                    <h1 style={{ fontSize: "22px", margin: "10px 0 5px" }}>
                        Vienna Toast
                    </h1>
                    <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
                        Cocoa , oaky ,Bitter sweet..
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
                        src={img14}
                        alt="Attikan Estate"
                        style={{
                            width: "100%",
                            height: "388px",
                            borderRadius: "10px",
                        }}
                    />
                    <h1 style={{ fontSize: "22px", margin: "10px 0 5px" }}>
                        French Roast
                    </h1>
                    <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
                        Strong , Cocoa , Bitter Sweet
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
                        src={img15}
                        alt="Attikan Estate"
                        style={{
                            width: "100%",
                            height: "388px",
                            borderRadius: "10px",
                        }}
                    />
                    <h1 style={{ fontSize: "22px", margin: "10px 0 5px" }}>
                        Silver Oak Cafe Blend
                    </h1>
                    <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
                        Hazelnut, Honey, Grapes
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

            <Footer />



                        





        </>
    )

}

export default Noequipment