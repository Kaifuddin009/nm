// MehendiDetail.jsx
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiStar, FiCheck, FiClock, FiUser, FiClipboard } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

const MehendiDetail = () => {
  const { type } = useParams();
  const location = useLocation();
  const item = location.state; // kept as you had it

  const navigate = useNavigate();
  const [users, setUsers] = useState(1);
  const [duration, setDuration] = useState(1);

  // Guard: if item not provided, don't attempt to read fields
  if (!item) return <h2 className="p-6 text-xl">No design found</h2>;

  // parse basePrice safely (kept behavior)
  const basePrice = Number(String(item.price || "0").replace(/₹/g, "").replace(/,/g, ""));

  // Calculate duration based on users
  useEffect(() => {
    const base = 1; // 1 hour base
    const userTime = users * 1; // each user adds 1 hour
    setDuration(base + userTime);
  }, [users]);

  // Calculate total price (kept behavior)
  const totalPrice = basePrice * users;

  // Gallery state — use item.img and optional item.gallery or placeholders
  const initialGallery = [
    item.img,
    ...(item.gallery && Array.isArray(item.gallery) ? item.gallery : []),
  ];
  // if only one image provided, add gentle placeholders (re-use main)
  while (initialGallery.length < 4) initialGallery.push(item.img);

  const [mainImage, setMainImage] = useState(initialGallery[0]);

  // small helper for price formatting
  const format = (n) => {
    if (isNaN(n)) return "0";
    return n.toLocaleString("en-IN");
  };

  return (
    <div className="md:mt-16 mt-6 p-6 md:p-12 mx-auto font-poppins ">
      <div className="">
        {/* Left: Gallery */}
        <motion.div
          initial={{ opacity: 1, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className=""
        >
          


          <div className="flex flex-col lg:flex-row ">

            <img
              src={mainImage}
              alt={`${item.type} main`}
              className="md:mt-0 mt-10 w-110 h-140 object-cover rounded-2xl"
              />

              
              <div className="ml-0 lg:ml-5 mt-6 lg:mt-0">

              <h1 className="text-4xl font-bold">{item.type} Mehendi</h1>

              
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="bg-white p-6 rounded-2xl shadow"
              >
                <div className="md:flex justify-between items-center">

                <h3 className="text-xl font-semibold mb-3">About this design</h3>
                
                </div>
                <p className="text-gray-700 leading-relaxed]">
                  {item.description ||
                    `This ${item.type} mehendi blends traditional motifs with modern accents.
                   Hand-drawn by experienced artists, the design lasts long and looks vibrant on
                   photos. Perfect for brides, close family and festive celebrations.`}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-3">
                    <FiCheck className="text-green-600 mt-1" />
                    <div>
                      <div className="font-medium">Natural Henna</div>
                      <div className="text-sm text-gray-500">Safe for all skin types</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FiClock className="text-green-600 mt-1" />
                    <div>
                      <div className="font-medium">Quick Application</div>
                      <div className="text-sm text-gray-500">Efficient & neat</div>
                    </div>
                    
                  </div>
                  
                </div>
                
              </motion.div>
      <div className="md:flex justify-between">
{/* small features strip */}
          <div className="grid grid-cols-3 gap-3 md:flex md:flex-col md:gap-2">
            
            <div className="mt-3 flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:bg-black  hover:text-white">
              <FiCheck className="text-green-600" />
              <div className="text-sm">Skin-safe Henna</div>
            </div>
            <div className="mt-3 flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:bg-black  hover:text-white">
              <FiClock className="text-green-600" />
              <div className="text-sm">On-time Artist</div>
          </div>
            <div className="mt-3 flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:bg-black hover:text-white">
              <RiShieldCheckFill className="text-green-600" />
              <div className="text-sm ">Verified Artist</div>
            </div>
            
            
            <div className="mt-3 col-span-1 flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:bg-black hover:text-white  md:col-span-auto md:w-auto">
              <FaRupeeSign className="text-green-600" />
              <div className="text-sm ">Secure Payment</div>
            </div>
            <div className="mt-3 col-span-1 flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:bg-black hover:text-white  md:col-span-auto md:w-auto">
              <MdOutlineCancel className="text-green-600 shrink-0" />
              <div className="text-sm "> (24hrs) Free Cancellation</div>
            </div>
            
          </div>
            
       
{/* Price card */}
            <div className="mt-6 lg:mt-2 lg:w-90 p-5 text-white rounded-2xl bg-[#00301a] shadow-lg">
        
              <div className="text-sm text-white ">Starting From</div>
              <div className="text-3xl font-bold mt-1 text-white">₹{format(basePrice)}</div>

              <div className="mt-3 text-sm text-white">
                <div className="flex justify-between">
                  <div>Persons</div>
                  <div className="font-medium">{users}</div>
                </div>

                <div className="flex justify-between mt-2">
                  <div>Estimated Time</div>
                  <div className="font-medium">{duration.toFixed(1)} hrs</div>
                </div>

                <div className="flex justify-between mt-2">
                  <div>Total</div>
                  <div className="font-bold">₹{format(totalPrice)}</div>
                </div>
              </div>

              {/* Users counter (kept behavior) */}
              <div className="mt-4 flex items-center gap-3 justify-center">
                <button
                  onClick={() => setUsers(Math.max(1, users - 1))}
                  className="px-3 py-1 rounded text-black bg-gray-100 hover:bg-gray-200 cursor-pointer"
                  aria-label="Decrease users"
                >
                  -
                </button>
                <div className="font-semibold">{users}</div>
                <button
                  onClick={() => setUsers(users + 1)}
                  className="px-3 py-1 rounded text-black bg-gray-100 hover:bg-gray-200 cursor-pointer"
                  aria-label="Increase users"
                >
                  +
                </button>
              </div>
<div className="text-sm mt-1 text-white">Pay 10% to confirm</div>
              <button
                onClick={() =>
                  navigate("/booking", {
                    state: {
                      mobile: "",
                      type: item.type,
                      users,
                      duration,
                      totalPrice,
                    },
                  })
                }
                className="mt-4 w-full bg-white text-green-600 py-2 rounded-lg font-semibold hover:bg-green-100 shadow cursor-pointer"
              >
                Book Now
              </button>
            </div>
       </div>
       
    </div>
    </div>
 </motion.div>

        {/* Middle: Details */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="lg:col-span-2"
        >
          

            
          

          {/* Detailed description, artist card, reviews */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-3 space-y-6 w-full ">
              

              {/* Artist card */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className=" p-6 rounded-2xl shadow flex items-center gap-4"
              >
                <img
                  src={item.artistImg || initialGallery[1]}
                  alt="artist"
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-semibold">{item.artistName || "Artist Name"}</h4>
                    <span className="text-xs text-green-600">Verified</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.artistBio || "Expert Mehendi artist with 6+ years of experience."}
                  </p>
                  <div className="mt-3 text-sm flex gap-3">
                    <div className="flex items-center gap-1 text-gray-600">
                      <FiStar className="text-yellow-500" /> 4.9
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <FiUser /> {item.bookings || 240}+ bookings
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="w-full p-6 rounded-2xl shadow "
              >
                <h3 className="text-xl font-semibold mb-3">Customer Reviews</h3>

                <div className="space-y-4">
                  {[
                    {
                      name: "Riya",
                      rating: 5,
                      text: "Amazing detailing and timely artist. Loved the bridal designs!",
                    },
                    {
                      name: "Sana",
                      rating: 5,
                      text: "Quick and professional. Henna color lasted nicely.",
                    },
                    {
                      name: "Aisha",
                      rating: 4,
                      text: "Great design, slight delay but overall pleased with the result.",
                    },
                  ].map((r, i) => (
                    <div key={i} className=" w-full bg-gray-100 border rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{r.name}</div>
                        <div className="flex items-center gap-1">
                          <FiStar />
                          <span className="text-sm">{r.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-2">{r.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
          
            {/* Right column: FAQ + Call to action */}
            <div className="">
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-5 p-6 rounded-2xl shadow"
              >
                <h3 className="text-lg font-semibold mb-3">FAQ</h3>
                <div className="text-md text-gray-700 space-y-3">
                  <div>
                    <div className="font-medium">How long does mehendi last?</div>
                    <div className="text-gray-600">Usually 7-14 days depending on aftercare.</div>
                  </div>
                  <div>
                    <div className="font-medium">Do you provide bridal design?</div>
                    <div className="text-gray-600">Yes — custom bridal packages available.</div>
                  </div>
                  <div>
                    <div className="font-medium">Do you travel?</div>
                    <div className="text-gray-600">Yes — travel charges may apply for remote locations.</div>
                  </div>
                </div>
              </motion.div>

            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MehendiDetail;
