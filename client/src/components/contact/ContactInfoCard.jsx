import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactInfoCard = () => {
  return (
    <div className="bg-[#00301a] text-white rounded-xl shadow-xl p-8 space-y-8">
      <div>
        <h3 className="text-2xl font-bold playfair-display-unique mb-3">
          Contact Information
        </h3>
        <p className="text-gray-200">
          For bookings, bridal queries, or general questions, reach out to us anytime.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <FiPhone size={28} className="text-[#38d99c]" />
        <div>
          <h4 className="font-semibold text-lg">Phone</h4>
          <p className="text-gray-200">+91 98765 43210</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <FiMail size={28} className="text-[#38d99c]" />
        <div>
          <h4 className="font-semibold text-lg">Email</h4>
          <p className="text-gray-200">noormehendi@example.com</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <FiMapPin size={28} className="text-[#38d99c]" />
        <div>
          <h4 className="font-semibold text-lg">Our Studio</h4>
          <p className="text-gray-200">
            Noor Mehendi Studio,  
            Near City Center Mall,  
            Bhopal, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
