import { useState, useEffect } from "react";

import Carousel1 from "../assets/carousel4.jpg";
import Carousel2 from "../assets/carousel2.jpg";
import Carousel3 from "../assets/carousel5.jpg";

const images = [Carousel1, Carousel2, Carousel3];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-screen overflow-hidden">
      
      {/* IMAGES */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 
            ${current === index ? "opacity-100" : "opacity-0"}`}
          alt="carousel"
        />
      ))}

      {/* DOTS INDICATOR */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition 
              ${current === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
