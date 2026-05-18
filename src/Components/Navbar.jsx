// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Collection', path: '/gallery', icon: '👟' },
    { name: 'New Arrivals', path: '/gallery', icon: '✨' },
    { name: 'Sale', path: '/gallery', icon: '🔥' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-gray-900/95 via-purple-900/95 to-gray-900/95 backdrop-blur-xl shadow-2xl shadow-purple-500/20' 
          : 'bg-gradient-to-r from-gray-900/80 via-purple-900/80 to-gray-900/80 backdrop-blur-md'
      } border-b border-white/20`}>
        
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo with enhanced animation */}
            <Link 
              to="/" 
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="relative px-4 py-2">
                <span className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient group-hover:scale-105 transition-transform duration-300 inline-block">
                  SneakerShop
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </Link>

            {/* Navigation Links with hover effects */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group"
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="text-white/80 group-hover:text-white transition-all duration-300 font-medium flex items-center gap-2">
                    <span className="text-lg transform group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </span>
                    {link.name}
                  </span>
                  
                  {/* Animated underline */}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform transition-all duration-300 ${
                    hoveredLink === index ? 'scale-x-100' : 'scale-x-0'
                  } origin-left`}></span>
                  
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </Link>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-4">
              {/* Search Button */}
              <button className="relative group p-2 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="relative w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Cart Button with animation */}
              <button 
                onClick={() => navigate('/cart')}
                className="relative group overflow-hidden rounded-xl"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 animate-gradient-x group-hover:scale-110 transition-transform duration-500"></div>
                
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Button content */}
                <div className="relative px-6 py-2.5 flex items-center gap-2">
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M12 18v3" />
                  </svg>
                  <span className="text-white font-semibold">Cart</span>
                  
                  {/* Cart badge */}
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                    3
                  </span>
                </div>
              </button>

              {/* Profile Button */}
              <button className="relative group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Mobile Menu Button */}
              <button className="md:hidden relative w-10 h-10 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="relative w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding to prevent content from hiding under fixed navbar */}
      <div className="h-20"></div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
        
        .animate-gradient-x {
          animation: gradient 2s ease infinite;
          background-size: 200% auto;
        }
        
        .bg-size-200 {
          background-size: 200% 100%;
        }
      `}</style>
    </>
  );
};

export default Navbar;