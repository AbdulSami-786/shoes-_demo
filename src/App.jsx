import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import  Home from './Pages/Home';
import Navbar from './Components/Navbar';
import ShoeGallery from './Components/ShoeGallery';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/gallery" element={<ShoeGallery />} />
        
      </Routes>
      <Footer/>
    </Router>
    </>
  );
};

export default App;