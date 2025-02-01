import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ServiceIcons from './components/ServiceIcons';
import Hotels from './components/Hotels';
import CarsRent from './components/CarsRent';
import Drives from './components/Drives';
import Boats from './components/Boats';

import hotelBg from "../src/assets/hotel.jpg";
import carBg from "../src/assets/car.jpeg";
import boatBg from "../src/assets/boat.jpg";
import planeBg from "../src/assets/plane.jfif";
import driveBg from "../src/assets/drive.jpg";
import tripBg from "../src/assets/tour.webp";

const backgroundImages = {
  '/': hotelBg,
  '/hotels': hotelBg,
  '/cars-rent': carBg,
  '/boats': boatBg,
  '/flights': planeBg,
  '/drives': driveBg,
  '/trips': tripBg
};

const Layout = ({ children }) => {
  const location = useLocation();
  const currentBackground = backgroundImages[location.pathname] || hotelBg;

  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0 transition-all duration-500"
        style={{
          backgroundImage: `url(${currentBackground})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          opacity: 0.9
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 to-blue-300/20 z-0" />
      <div className="relative z-10">
        <Navbar />
        <ServiceIcons />
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/cars-rent" element={<CarsRent />} />
          <Route path="/drives" element={<Drives />} />
          <Route path="/boats" element={<Boats />} />
          <Route path="/flights" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;