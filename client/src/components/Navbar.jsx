import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { TbXboxX } from "react-icons/tb";

const Navbar = () => {
  const [open, setOpen] = useState(false);
const navigate = useNavigate();

const navItems = [
  { label: "Services", hash: "services" },
  { label: "About Us", hash: "about" },
  { label: "Contact", hash: "contact" },
];
const handledev =(hash) =>{
  setOpen(false)
  navigate(`/#${hash}`)
}; 


  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#00301a] text-white shadow-lg">

      {/* FULL-WIDTH NAVBAR */}
      <nav className="w-full max-w-none mx-auto px-2
                      h-16 md:h-20 flex items-center justify-between">

        {/* LOGO ALWAYS ON LEFT */}
        <li className="flex items-center">
          <Link 
          to="/"
          onClick={()=>{
            setTimeout(()=>{
              window.scrollTo({top:0, behavior:'smooth'})
            })
          }}
          className="hover:text-[#08744a] playfair-display-unique text-2xl md:text-4xl">
            NoorMehendi
          </Link>
        </li>

        {/* DESKTOP NAV RIGHT */}
        <div className="hidden md:flex items-center space-x-8 text-base ">
{navItems.map((item) => (
            <button
              key={item.hash}
              onClick={() => handledev(item.hash)}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={()=>navigate('/custom-booking')}
            className="px-4 py-2 bg-white hover:bg-[#08744a] 
                       text-black font-semibold rounded-md"
          >
            Book Now
          </button>
        </div>

        {/* MOBILE BUTTONS RIGHT */}
        <div className="flex md:hidden items-center">

          <Link
            to = "/booking"
            className="px-3 py-1.5 bg-[#38d99c] text-black 
                       font-semibold rounded-md text-sm mr-3"
          >
            Book
          </Link>

          {open ? (
            <TbXboxX 
              size={30} 
              onClick={() => setOpen(false)} 
              className="cursor-pointer"
            />
          ) : (
            <CiMenuBurger 
              size={30} 
              onClick={() => setOpen(true)} 
              className="cursor-pointer"
            />
          )}
        </div>

      </nav>

      {/* MOBILE MENU FULL WIDTH */}
      {open && (
        <div className="md:hidden w-full bg-[#00301a] px-6 pb-4 pt-2 
                        space-y-4 text-lg font-medium">
          {navItems.map((item) => (
            <button
              key={item.hash}
              onClick={()=>handledev(item.hash)}
              className="w-full block border-b border-white/20 pb-2"
              
            >
              {item.label}
            </button>
          ))}

        </div>
      )}

    </header>
  );
};

export default Navbar;
