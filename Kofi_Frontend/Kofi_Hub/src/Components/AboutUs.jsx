import React from "react";
import Navbar from "./Navbar";
import image22 from "../assets/banner.png";
import image23 from "../assets/Asset_4_800x 1.png";
import image24 from "../assets/Asset_7_800x 1.png";
import image25 from "../assets/Asset_7_1_800x 1.png";
import image26 from "../assets/who-we-are-patter_1370x 1.png";
import image27 from "../assets/heading-arrow_954X 4.png";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div>
                <img src={image22} alt="" style={{ width: "100%", height: "760px" }} />
            </div>
            <div>
                <h1 style={{ textAlign: "center", fontFamily: "patua One", fontWeight: 300, marginTop: "88px", fontSize: "55px" }}>The Story Behind Every Cup</h1>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "center", marginTop: "65px" }}>Our journey is a tale of passion for coffee, and at the heart of it all lie our core values: <strong>transparency</strong>  , <strong>traceability</strong>,and <strong>uncompromising quality</strong>.</p>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "center", marginTop: "65px" }}>Step by step, we embark on this with the coffee producers, each one meticulously tending to the plants with care and expertise. Through the laborious yet rewarding process of harvesting, processing, and roasting, the coffee transforms, evolving into the delightful brew you savour.</p>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "center", marginTop: "65px" }}>We take immense pride in being deeply involved at every step to ensure that every single bean meets our exacting standards. The coffee we roast is the coffee we like to drink, and we hope you like it too.</p>
            </div>

            <div style={{ backgroundColor: "#FFF9EF", height: "1100px", marginTop: "100px" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "150px",
                        paddingTop: "90px",
                    }}
                >
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px" }}>
                        <img src={image23} alt="" style={{ width: "240px", height: "240px", marginTop: "50px" }} />
                        <p style={{ fontFamily: "poppins", fontWeight: "bold", fontSize: "32px" }}>Beliefs</p>
                    </div>
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px" }}>
                        <img src={image24} alt="" style={{ width: "240px", height: "240px", marginTop: "50px" }} />
                        <p style={{ fontFamily: "poppins", fontWeight: "bold", fontSize: "32px" }}>Roasteries</p>
                    </div>
                    <div style={{ textAlign: "center", fontFamily: "Patua One", fontSize: "19px" }}>
                        <img src={image25} alt="" style={{ width: "240px", height: "240px", marginTop: "50px" }} />
                        <p style={{ fontFamily: "poppins", fontWeight: "bold", fontSize: "32px" }}>Farms</p>
                    </div>
                </div>
            </div>

            <div>
                <img src={image26} alt="" style={{ width: "100%", height: "440px", marginTop: "-900px" }} />
            </div>

            <div style={{ display: "flex" }}>
                <h1 style={{ fontFamily: "poppins", fontSize: "70px", marginTop: "80px", marginLeft: "10px" }}>Beliefs</h1>
                <img src={image27} alt="" style={{ width: "78%", height: "43px", marginTop: "113px", marginLeft: "70px" }} />
            </div>
            <div>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "left", marginTop: "10px", marginLeft: "10px" }}>Our mission since we started has stayed simple: introduce our customers to the estates we directly buy our great tasting coffee from, roast the beans with care, and make high quality coffee more accessible through our cafes and our website. The coffee we roast is the coffee we like to drink, and we hope you like it too.At Blue Tokai Coffee Roasters, we follow a simple set of beliefs.</p>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "left", marginTop: "60px", marginLeft: "10px", fontWeight: "bold" }}>At KOFI HUB Coffee Roasters, we follow a simple set of beliefs.</p>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "left", marginTop: "60px", marginLeft: "10px" }}> <i>Transparency</i>  is much more than just where we get our beans from.</p>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "left", marginTop: "60px", marginLeft: "10px" }}>The first thing we did when we started our company was to highlight our award winning farms. This idea of transparency organically evolved to the way we worked in other areas too - our baristas are always present to discuss brewing tips, our customer service team are there to walk you through your coffee questions, and our roasting team to show you how they work</p>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "left", marginTop: "60px", marginLeft: "10px" }}> <i>A culture of constant learning is the key to always pushing coffee forward</i></p>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "left", marginTop: "60px", marginLeft: "10px" }}>We are consistently researching, testing and implementing best practices throughout our business to raise the bar. Making refractometers essential for our cafe brewing, holding advanced sensory learnings for junior roasters, and experimenting with processing at the farm level are just some of the ways that our highly skilled team is constantly evolving the way Indian coffee is treated, experienced or communicated about.</p>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "left", marginTop: "60px", marginLeft: "10px" }}><i>Sourcing the best coffee beans does not guarantee good coffee.</i></p>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "left", marginTop: "60px", marginLeft: "10px" }}>Although we have a dedicated sourcing team for green beans and have invested in establishing quality roasting parameters, we know that a lot more steps still have to fall into place to brew a good cup. This is why we have worked hard to create coffee training centers to impart leading procedures such as equipping baristas with assessing and reporting tools for precision brewing, and cupping every single batch that is roasted to ensure consistent quality.</p>
            </div>
            <div style={{ display: "flex", marginTop: "20px" }}>
                <h1 style={{ fontFamily: "poppins", fontSize: "70px", marginTop: "80px", marginLeft: "10px" }}>Roastries</h1>
                <img src={image27} alt="" style={{ width: "78%", height: "43px", marginTop: "113px", marginLeft: "70px" }} />
            </div>
            <div>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "left", marginTop: "30px", marginLeft: "10px" }}>when we started roasting in 2013, we had a small 1kg machine that had us roasting for twelve to fourteen hours straight on most nights because of how small it was. Though we have grown, in the size of our roasting machines (we now roast on two 12kg and one 25kg Probat machines), and the team of roasters, we continue to spend as much time, energy and resources on constantly pushing our roasting quality forward.</p>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "left", marginTop: "70px", marginLeft: "10px" }}>We are consistently researching, testing and implementing best practices throughout our business to raise the bar. Evaluating hundreds of green bean samples by cupping them every harvest season, before making our final selections is standard procedure at Blue Tokai Coffee Roasters. Conducting advanced sensory trainings for our roasters, and experimenting with processing methods at the farm level are just some of the ways that our highly skilled team is constantly evolving.</p>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "left", marginTop: "70px", marginLeft: "10px" }}>Although we have a dedicated sourcing team for green beans and have invested in establishing quality roasting parameters, we know that a lot more steps still have to fall into place to brew a good cup. This is why we work closely with our Q-Grade certified Director of Coffee to create industry leading procedures such as cupping every single batch that is roasted to ensure consistent quality.</p>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "left", marginTop: "70px", marginLeft: "10px" }}>Our belief in transparency extends to our roasteries in Gurgaon, Mumbai and Bangalore, and we encourage our customers to visit us. To take the interaction with your coffee a level further, we will soon be running on-going tours of the roastery. We roast from Monday to Friday and look forward to having you drop by to see some of your favourite beans being roasted.</p>
            </div>
            <div style={{ display: "flex", marginTop: "20px" }}>
                <h1 style={{ fontFamily: "poppins", fontSize: "70px", marginTop: "80px", marginLeft: "10px" }}>Farms</h1>
                <img src={image27} alt="" style={{ width: "78%", height: "43px", marginTop: "113px", marginLeft: "70px" }} />
            </div>
            <div>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "left", marginTop: "20px", marginLeft: "10px" }}>When we first started in 2013, we worked with a handful of producers who shared our belief that India was ripe for a specialty coffee revolution. After 11 years, we're glad to have had that belief turn into a blooming industry, with more Indians enjoying homegrown specialty coffee than ever before.</p>
                <p style={{ fontSize: "25px", fontFamily: "poppins", textAlign: "left", marginTop: "70px", marginLeft: "10px" }}>Now, we hold long-standing relationships with over 80 of India's best farms, each raising the bar for what a cup of carefully grown coffee can be. We're honoured to source from them, and bring you the coffee they grow, along with the stories of the love and care with which it comes to be.</p>
            </div>

            <Link to="/Farms">
                <button style={{
                    width: "15%",
                    height: "50px",
                    borderRadius: "5px",
                    backgroundColor: "#90C1CF",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                    border: "none",
                    cursor: "pointer",
                    marginTop: "20px"
                }}
                > View All Farms
                </button>

            </Link>
            
            <Footer />
        </div>
    );
}

export default AboutUs;
