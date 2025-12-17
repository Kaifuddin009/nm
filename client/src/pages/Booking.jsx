
import { Outlet, useLocation } from "react-router-dom";
import BookingStep1 from "../components/Booking/BookingStep1";

export default function BookingPage() {
  const location = useLocation();
  const showStep1 = location.pathname ==='/booking' || location.pathname === '/booking/details'
  return (
    <div className="p-6 max-w-lg mx-auto">
     {showStep1 && <BookingStep1 />}
      <Outlet />   {/* This will show BookingStep2 below */}
    </div>
  );
}
