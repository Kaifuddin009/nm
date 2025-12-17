import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingStep2 = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    address: "",
    eventDate: "",
    eventTime: "",
    notes: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const payNow = () => {
    if (
    !form.name ||
    !form.email ||
    !form.city ||
    !form.address ||
    !form.eventDate ||
    !form.eventTime
  ) {
    return alert("Please fill all required details before proceeding to payment.");
  }
    const payAmount = state.totalPrice * 0.1;

    navigate("/booking/success", {
      state: {
        ...state,
        ...form,
        payAmount,
        bookingId: "BK" + Math.floor(Math.random() * 1000000),
      },
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">Event Details</h1>

      {/* USER INPUT */}
      <div className="space-y-4">
        {["name","email","city","address","eventDate","eventTime","notes"].map((field)=>(
          <input
            key={field}
            name={field}
            placeholder={field.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}
            type={field.includes("Date") ? "date" : field.includes("Time") ? "time" : "text"}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
        ))}
      </div>

      {/* AUTO FILLED SUMMARY */}
      <div className="mt-8 p-4 border rounded-lg bg-gray-100">
        <h2 className="font-bold text-xl mb-3">Booking Summary</h2>

        <p><strong>Mobile:</strong> {state.mobile}</p>
        <p><strong>Mehendi Type:</strong> {state.type}</p>
        <p><strong>Person:</strong> {state.users}</p>
        <p><strong>Time Required:</strong> {state.duration} hrs</p>
        <p><strong>Total Amount:</strong> ₹{state.totalPrice}</p>
        <p className="text-green-700 font-bold text-lg mt-2">
          Advance (10%): ₹{(state.totalPrice * 0.1).toFixed(0)}
        </p>
      </div>

      <button
        onClick={payNow}
        className="w-full bg-green-700 text-white py-3 rounded-lg mt-6 font-semibold"
      >
        Pay ₹{(state.totalPrice * 0.1).toFixed(0)}
      </button>
    </div>
  );
};

export default BookingStep2;
