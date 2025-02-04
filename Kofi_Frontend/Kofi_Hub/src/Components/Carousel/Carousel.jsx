import React, { useState, useEffect } from "react";
import "./Carousel.css";
import image1 from "../../assets/Desktop_9_1370x (2).png";
import image2 from "../../assets/Category-Page-Banner_1370x (2).png";
import image3 from "../../assets/Gifting_websitebanner_1370x350_7563a259-58fd-4777-9d25-5bd889d21851_1370x (3).png";


function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const slides = [image1, image2, image3]; 
  const totalSlides = slides.length;

  const moveSlide = (step) => {
    setCurrentIndex((prevIndex) => (prevIndex + step + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => moveSlide(1), 3000); 
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
    
      <div className="carousel">
        <div
          className="carousel-slide"
          style={{
            display: "flex",
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%" }}
            />
          ))}
        </div>
      </div>


      <button className="prev" onClick={() => moveSlide(-1)}>
        ❮
      </button>
      <button className="next" onClick={() => moveSlide(1)}>
        ❯
      </button>
    </div>
  );
}

export default Carousel;
