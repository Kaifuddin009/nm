import { useState } from "react";


export default function MobileNumberForm({ onSuccess }) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const sendOtp = async () => {
    setLoading(true);
    try {
      await api.post("/auth/send-otp", { phone });
      onSuccess(phone);
    } catch (err) {
      alert("Error sending OTP");
    }
    setLoading(false);
  };

  return (
    <div className="booking-card">
      <h2>Enter Mobile Number</h2>

      <input
        type="text"
        placeholder="Enter mobile number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="input"
      />

      <button onClick={sendOtp} disabled={loading} className="btn-primary">
        {loading ? "Sending..." : "Send OTP"}
      </button>
    </div>
  );
}
