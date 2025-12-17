import { useLocation } from "react-router-dom";

const BookingSuccess = () => {
  const { state } = useLocation();

  const message = `
Dear ${state.name},

Your Mehendi booking is confirmed!

Booking ID: ${state.bookingId}
Mobile: ${state.mobile}
Event Date: ${state.eventDate}
Design: ${state.type}
Hands Count: ${state.users}
Time Required: ${state.duration} hrs
Total Amount: ₹${state.totalPrice}
Advance Paid: ₹${state.payAmount}

Thank you for choosing us.
  `;

  const sendWhatsApp = () => {
    const url = `https://wa.me/${state.mobile}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="mt-40 p-6 text-center max-w-xl mx-auto">

      <h1 className="text-4xl font-bold text-green-700">Payment Successful 🎉</h1>

      <p className="mt-4 text-lg">Your booking has been confirmed!</p>

      <button
        onClick={sendWhatsApp}
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        Send WhatsApp Confirmation
      </button>
    </div>
  );
};

export default BookingSuccess;
