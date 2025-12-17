import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookingStep2 from "./BookingStep2";

const BookingStep1 = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [otpVerified, setOtpVerified] = useState(false);

  const [mobile, setMobile] = useState(state.mobile || "");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [correctOtp] = useState("1234"); // mocking OTP

  const sendOtp = () => {
    if (mobile.length !== 10) return alert("Enter valid mobile number");
    setOtpSent(true);
    alert("OTP Sent: 1234 (demo)");
  };

  const verifyOtp = () => {
    if (otp === correctOtp) {
      setOtpVerified(true)
       alert("OTP Verified Successfully!");

      navigate("details", {
        state: {
          ...state,
          mobile,
        },
      });
    } else {
      alert("Incorrect OTP");
    }
  };

  return (
    <div className="mt-10 p-6 max-w-lg mx-auto">

      <h1 className="text-3xl font-bold mb-6">Verify Mobile Number</h1>

      <label className="font-semibold">Mobile Number</label>
      <input
        type="number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="w-full border p-3 rounded mt-2"
      />

      {!otpSent ? (
        <button
          onClick={sendOtp}
          className="w-full bg-green-600 text-white py-3 rounded-lg mt-5"
        >
          Send OTP
        </button>
      ) : (
        <>
          <label className="font-semibold mt-4 block">Enter OTP</label>
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border p-3 rounded mt-2"
          />

          <button
            required
            onClick={verifyOtp}
            className="w-full bg-green-700 text-white py-3 rounded-lg mt-5"
          >
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default BookingStep1;
