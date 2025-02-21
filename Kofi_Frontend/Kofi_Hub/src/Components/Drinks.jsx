import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../assets/can.png"; 
import img2 from "../assets//Diwali2024.png";
import img3 from "../assets/balu-col-ig_large 1.png";
import img4 from "../assets/leftcols_538x 2.png";
import img5 from "../assets/heading-arrow_954X 4.png";


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
                        <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px",marginTop:"55px" }}>
                            <img src={img1} alt="" style={{ width: "300px", height: "300px" }} />
                            <p style={{ fontSize: "35px" }}>COLD BREW</p>
                        </div>
                        
                    </div>
                    <img src={img3} alt="" style={{marginLeft:"980px",marginTop:"-158px", width:"35%"}} />
                    <img src={img4} alt="" style={{width:"29%",marginTop:"-480px"}}/>

                </div>

                <div style={{display:"flex"}}>
                    <h1 style={{fontFamily:"Cormorant",fontWeight:500,fontSize:"80px",marginTop:"70px"}}>Cold Brews Cans</h1>
                    <img src={img5} alt="" style={{ width: "58%", height: "43px", marginTop: "96px", marginLeft: "70px" }}/>
                </div>

                <div>
                    <p style={{fontSize:"30px",fontFamily:"poppins",marginTop:"-20px"}}>From the classics to unique new variants — pop open a cold brew can, sit back and enjoy. Our cold brews are steeped for 18 hours for a smooth brew.</p>
                </div>

                {/* Drinks Cards */}
                <div style={{ display: "flex", gap: "55px", flexWrap: "wrap", justifyContent: "center",marginTop:"70px" }}>
                    {drinks.map((drink) => (
                        <div
                            key={drink._id}
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
                                src={drink.image}
                                alt={drink.name}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "10px",
                                }}
                            />
                            <h1 style={{ fontSize: "22px", margin: "10px 5px", color: "#000" }}>
                                {drink.name}
                            </h1>
                            <p style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>
                                {drink.description}
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
            
            <Footer />
        </>
    );
};

export default Drinks;
