import Design1 from "../assets/Carousel1.jpg";
import Design2 from "../assets/Carousel2.jpg";
import Design3 from "../assets/Carousel3.jpg";
import Design4 from "../assets/Carousel1.jpg"; 
import Design5 from "../assets/Carousel2.jpg";
import Design6 from "../assets/Carousel3.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const designs = [
  { img: Design1, price: "₹499", type:'Wedding' },
  { img: Design2, price: "₹699", type:'Enagement' },
  { img: Design3, price: "₹899", type:'Bridal' },
  { img: Design4, price: "₹550", type:'Feet' },
  { img: Design5, price: "₹799", type:'Hand' },
  { img: Design6, price: "₹999", type:'Arabic' },
  { img: Design6, price: "₹999", type:'Kids' },
  { img: Design6, price: "₹999", type:'Western' },
];

const Card = () => {
  const navigate = useNavigate();
  const [selected, setSelected] =useState(false);
  return (
    <section className="w-full px-6 md:px-16" id="service">

      {/* Title 
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-wide">
        OUR DESIGNS
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {designs.map((item, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            
            {/* Image */}
            <img 
              src={item.img} 
              alt="design" 
              className="w-full h-64 object-cover"
            />

            <div className="p-2 text-2xl font-bold playfair-display-unique">
                {item.type}
            </div>

            {/* Content */}
            <div className="p-2 text-center flex items-center justify-between">
              <p className="text-xl font-semibold text-gray-800">
                Price: <span className="text-green-600">{item.price}</span>
              </p>

              <button 
              onClick={()=>navigate(`/service/${item.type}`,{state:item})}
              className=" bg-[#00301a] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#08744a] transition">
                Explore
              </button>
            </div>

          </div>
        ))}
      </div>
        
      
    
    </section>
  );
};

export default Card;
