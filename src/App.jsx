import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import global from "../src/assets/hotel.jpg";
import ServiceIcons from './components/ServiceIcons';
import Hotels from './components/Hotels';
import CarsRent from './components/CarsRent';
import Drives from './components/Drives';
import Boats from './components/Boats';

const Layout = ({ children }) => (
  <div className="relative min-h-screen">
    <div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${global})`,
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
         
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;