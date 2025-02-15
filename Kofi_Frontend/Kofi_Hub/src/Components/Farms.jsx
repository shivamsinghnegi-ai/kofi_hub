import React from "react";
import Navbar from "./Navbar";
import image28 from "../assets/allfarm-banner_1370x 1.png";
import image29 from "../assets/Rectangle_59_800x 1.png";
import image30 from "../assets/Rectangle_61_1afeabb3-5659-4b9f-bfa3-58fc6b12bb44_800x 1.png";
import image31 from "../assets/IMG_8680_3_800x.png";
import image32 from "../assets/IMG_8681_2_800x.png";
import image33 from "../assets/Rectangle_83_800x.png";
import image34 from "../assets/Rectangle_60_79376239-e60b-40ab-a8d8-d2ee7fef1c9e_800x.png";
import Footer from "./Footer";

const Farms = () => {
    // Farms data with unique images
    const farmsData = [
        { title: "HIDDEN FALLS ESTATE", description: "Hidden Falls Estate gets its name from a beautiful yet elusive waterfall that is hidden among an outcrop of huge rocks.", image: image29 },
        { title: "ATTIKAN ESTATE", description: "Located to the south of Mysore, Karnataka, the Biligiri Ranjan Hills, or “white hills”, are named after the mist that hangs over this region.", image: image30 },
        { title: "RAM ESTATE", description: "Currently managed by the 5th generation of the family, Ram Estate has been growing coffee since the 1860s.", image: image31 },
        { title: "RATNAGIRI ESTATE", description: "Located to the south of Mysore, Karnataka, the Biligiri Ranjan Hills are named after the mist that hangs over this region.", image: image32 },
        { title: "YELLIEMADALOO ESTATE", description: "Yelliemadaloo Estate, lies along the banks of the stream it’s named after, located on the slopes of the picturesque Durgadabetta.", image: image33 },
        { title: "ARAKU VALLEY", description: "The Araku Valley Farmers Collective is run and implemented by the non-profit TechnoServe.", image: image34 }
    ];

    return (
        <div>
            <Navbar />

            {/* Full-width Banner Image */}
            <div>
                <img src={image28} alt="" style={{ width: "100%", height: "650px" }} />
            </div>

            {/* Grid Container */}
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                padding: "50px 130px",
                gap: "30px",
                marginTop:"30px"
            }}>
                {farmsData.map((farm, index) => (
                    <div key={index} style={{
                        width: "41%",
                        textAlign: "center",
                    }}>
                        <img src={farm.image} alt="" style={{ width: "100%", borderRadius: "8px" }} />
                        <div style={{ fontFamily: "Patua One", fontWeight: 400, marginTop: "23px" }}>
                            <h1 style={{ margin: "0 auto", fontWeight: "300" }}>{farm.title}</h1>
                            <p style={{ fontFamily: "Poppins", maxWidth: "100%" }}>
                                {farm.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Farms;
