import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00301a] text-white mt-20">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-bold playfair-display-unique">
            NoorMehendi
          </h2>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Professional Mehendi services for weddings, festivals, and special
            occasions. Trusted by hundreds of happy clients.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-[#38d99c]">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-[#38d99c]">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-[#38d99c]">
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li>
              <Link
                to="/booking/custom"
                className="text-[#38d99c] font-semibold"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>Bridal Mehendi</li>
            <li>Arabic Mehendi</li>
            <li>Custom Designs</li>
            <li>Festival Mehendi</li>
            <li>Group Bookings</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <FaPhoneAlt /> +91 9XXXXXXXXX
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope /> noormehendi@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt /> Available across your city
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} NoorMehendi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
