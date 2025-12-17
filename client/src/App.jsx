import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import AboutUs from './pages/AboutUs'
import ContactSection from './pages/ContactSection';
import MehendiDetail from './components/MehendiDetail';
import BookingStep2 from './components/Booking/BookingStep2';
import BookingSuccess from './components/Booking/BookingSuccess';
import BookingPage from "./pages/Booking";
const App = () => {
  return (
    <div className='w-full min-w-full max-w-full overflow-x-hidden'>
      <Navbar/>
<Routes>
  <Route path='/' element={
    <>
         <Home/>
        <Service/>
        <AboutUs/>
        <ContactSection/>
        
    </>
  }/>
  <Route path="/service/:type" element={<MehendiDetail />} />
  <Route path="/booking" element={<BookingPage />}>
      <Route path="details" element={<BookingStep2 />} />
      <Route path="success" element={<BookingSuccess />} />
  </Route>
</Routes>

    </div>
  )
}

export default App
