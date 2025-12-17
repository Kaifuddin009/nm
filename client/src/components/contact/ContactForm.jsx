import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="bg-white rounded-xl shadow-lg p-8 space-y-6">
      <div>
        <label className="block font-semibold text-[#00301a] mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#38d99c]"
          required
        />
      </div>

      <div>
        <label className="block font-semibold text-[#00301a] mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your contact number"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#38d99c]"
          required
        />
      </div>

      <div>
        <label className="block font-semibold text-[#00301a] mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#38d99c]"
        />
      </div>

      <div>
        <label className="block font-semibold text-[#00301a] mb-2">
          Address
        </label>
        <input
          required
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Enter your address"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#38d99c]"
        />
      </div>

      <div>
        <label className="block font-semibold text-[#00301a] mb-2">
          Your Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          placeholder="Tell us about your event…"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#38d99c]"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-[#00301a] hover:bg-[#08744a] text-white font-semibold py-3 rounded-lg transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
