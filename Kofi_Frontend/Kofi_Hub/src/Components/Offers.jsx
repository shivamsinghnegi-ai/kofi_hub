import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image1 from "../assets/image 7.png";
import image2 from "../assets/coffee1.png";
import image3 from "../assets/coffee2.png";
import image4 from "../assets/coffee3.png";
import image5 from "../assets/coffee4.png";
import image6 from "../assets/coffee5.png";
import image7 from "../assets/coffee6.png";
import image8 from "../assets/coffee7.png";
import image9 from "../assets/coffee8.png";
import image10 from "../assets/recommened-co-fi-images_1250x 1.png";
import image11 from "../assets/heat.png";
import image12 from "../assets/Easy.png";
import image13 from "../assets/Glass.png";
import image14 from "../assets/Dishwasher.png";
import image15 from "../assets/coffeelogo.png";
import image16 from "../assets/time.png";
import image17 from "../assets/Amount.png";
import image18 from "../assets/Water.png";
import image19 from "../assets/Temp.png";
import image20 from "../assets/Grind.png";
import image21 from "../assets/Brew.png";
import ProductCard from "../Components/ProductCard";

const products = [
    { id: 1, name: "Attikan Estate", image: image2,description:"Dark chocolate, Figs, .." },
    { id: 2, name: "Vienna Toast", image: image3,description:"Cocoa , oaky ,Bitter sweet" },
    { id: 3, name: "French Roast", image: image4,description:"Strong , Cocoa , Bitter Sweet" },
    { id: 4, name: "Silver Oak Cafe Blend", image: image5,description:"Hazelnut, Honey, Grapes" },
    { id: 5, name: "Attikan Estate", image: image6,description:"Dark chocolate, Figs, .." },
    { id: 6, name: "Vienna Toast", image: image7,description:"Cocoa , oaky ,Bitter sweet" },
    { id: 7, name: "French Roast", image: image8 ,description:"Strong , Cocoa , Bitter Sweet"},
    { id: 8, name: "Silver Oak Cafe Blend", image: image9,description:"Hazelnut, Honey, Grapes" }
];

const guideData = [
    { id: 1, icon: image16, boldText: "4 MINS", text: "BREW TIME" },
    { id: 2, icon: image17, boldText: "20G", text: "COFFEE AMOUNT" },
    { id: 3, icon: image18, boldText: "240ML", text: "WATER VOLUME" },
    { id: 4, icon: image19, boldText: "94°C", text: "WATER TEMPERATURE" },
    { id: 5, icon: image20, boldText: "COARSE", text: "GRIND SIZE" },
];

const Offers = () => {
    return (
        <>
            <Navbar />
            <div>
                <img src={image1} alt="Offer Banner" style={{ width: "100%", height: "620px" }} />
            </div>
            <div>
                <h1 style={{ fontSize: "69px", fontFamily: "Cormorant", fontWeight: 600, textAlign: "center", marginTop: "70px" }}>
                    Recommended Coffees
                </h1>
            </div>

            {/* ------------------PRODUCT CARDS------------------ */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "38px",
                    padding: "8px",
                    marginLeft: "-40px",
                }}
            >
                {products.map((products) => (
                    <ProductCard key={products._id} product={products} />
                ))}
            </div>


            <div style={{ backgroundColor: "#FFF9EF", height: "1000px", marginTop: "70px" }}>
                <h1 style={{  fontWeight: "bold", fontFamily: "poppins", paddingTop: "70px", paddingLeft: "20px", fontSize: "55px" }}>
                    Start your home <br />
                    <span style={{ fontWeight: "bold", fontFamily: "poppins", }}>brewing journey with</span>{" "} <br />
                    <span style={{ fontWeight: "900", fontFamily: "poppins", }}>our</span>{" "}
                    <span style={{ fontFamily: "cormorant", fontWeight: "500" }}>French Press</span>
                </h1>
                <div style={{ fontFamily: "poppins", marginLeft: "820px", marginTop: "-277px" }}>
                    <p
                        style={{
                            fontSize: "22px",
                            lineHeight: "1.6",
                            maxWidth: "650px",

                        }}
                    >
                        The French Press is a great equipment to start with as a first step
                        in your specialty coffee journey.
                    </p>
                    <p
                        style={{
                            fontSize: "22px",
                            lineHeight: "1.6",
                            maxWidth: "650px",
                            marginTop: "40px"
                        }}
                    >
                        Our French Press is a classic and affordable piece of equipment that
                        brews a strong full-bodied cup of coffee. This one is highly
                        versatile, as in addition to making a strong cup of coffee, you can
                        also use it for frothing milk, and even for making cold brew coffee.
                    </p>

                </div>
                <img src={image10} alt="" style={{ width: "92%", marginTop: "-25px" }} />

            </div>

            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        gap: "70px",
                        paddingTop: "100px",
                    }}
                >
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "21px" }}>
                        <img src={image11} alt="" style={{ width: "160px", height: "160px" }} />
                        <p style={{ maxWidth: "180px" }}>Heat-Resistance
                            Glass body </p>
                    </div>
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "21px" }}>
                        <img src={image12} alt="" style={{ width: "160px", height: "160px" }} />
                        <p style={{ maxWidth: "180px" }}>Easy-to-Clean
                            Filter Mish</p>
                    </div>
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "21px", cursor: "pointer" }}>
                        <img src={image13} alt="" style={{ width: "160px", height: "160px" }} />
                        <p style={{ maxWidth: "180px" }}>Glass and Stainless
                            Steel body</p>
                    </div>


                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px" }}>
                        <img src={image14} alt="" style={{ width: "160px", height: "160px" }} />
                        <p style={{ maxWidth: "130px" }}>Dishwasher
                            safe</p>
                    </div>

                </div>
            </div>



            <div style={{ backgroundColor: "#FFF9EF", height: "1000px", marginTop: "90px" ,paddingLeft:"80px" }}>
                <img src={image15} alt="" style={{ width: "160px", height: "160px", marginLeft: "40px", marginTop: "60px" }} />
                <h1 style={{ fontFamily: "cormorant", marginTop: "90px", marginLeft: "50px", fontSize: "50px" }}>FRENCH PRESS</h1>
                <h1 style={{ fontFamily: "cormorant", marginTop: "23px", marginLeft: "50px", fontSize: "40px", fontWeight: "300" }}>How to Brew</h1>

                <div>

                    <div style={{  padding: "48px 45px", maxWidth: "600px", borderRadius: "10px" }}>
                        {guideData.map((item) => (
                            <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                                <img src={item.icon} alt={item.text} style={{ width: "40px", height: "40px", marginRight: "15px" }} />
                                <p style={{ fontSize: "20px", fontFamily: "Poppins, sans-serif", margin: 0 }}>
                                    <strong>{item.boldText}</strong><span>/</span> {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                </div>
                <img src={image21} alt=""  style={{height:"600px",width:"550px", marginLeft:"700px",marginTop:"-565px"}}/>
            </div>

            <div style={{marginTop:"-110px"}}>
            <Footer/>
            </div>
            
 
          
        </>
    );
}

export default Offers;
