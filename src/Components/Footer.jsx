// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: [
      { name: 'New Arrivals', path: '/new-arrivals' },
      { name: 'Men Collection', path: '/men' },
      { name: 'Women Collection', path: '/women' },
      { name: 'Kids Collection', path: '/kids' },
      { name: 'Sale', path: '/sale' },
    ],
    Support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Returns & Exchanges', path: '/returns' },
      { name: 'Size Guide', path: '/size-guide' },
      { name: 'Shipping Info', path: '/shipping' },
      { name: 'Track Order', path: '/track-order' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
      { name: 'Contact', path: '/contact' },
    ],
    Legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'Accessibility', path: '/accessibility' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com', color: 'hover:bg-gradient-to-r from-purple-500 to-pink-500' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com', color: 'hover:bg-gradient-to-r from-blue-500 to-cyan-500' },
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com', color: 'hover:bg-gradient-to-r from-blue-600 to-blue-800' },
    { name: 'YouTube', icon: '📺', url: 'https://youtube.com', color: 'hover:bg-gradient-to-r from-red-500 to-red-700' },
    { name: 'TikTok', icon: '🎵', url: 'https://tiktok.com', color: 'hover:bg-gradient-to-r from-black to-gray-800' },
    { name: 'Discord', icon: '💬', url: 'https://discord.com', color: 'hover:bg-gradient-to-r from-indigo-500 to-purple-500' },
  ];

  const paymentMethods = [
    { name: 'Visa', icon: '💳' },
    { name: 'Mastercard', icon: '💳' },
    { name: 'PayPal', icon: '💰' },
    { name: 'Apple Pay', icon: '📱' },
    { name: 'Google Pay', icon: '🤖' },
    { name: 'American Express', icon: '💎' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10 animate-gradient-x"></div>
      
      {/* Top decorative border */}
      <div className="relative h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient-x"></div>

      <div className="relative container mx-auto px-6 py-12 lg:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="group inline-block">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="relative">
                  <span className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient group-hover:scale-105 transition-transform duration-300 inline-block">
                    SneakerShop
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed">
              Your premier destination for premium sneakers. We bring you the latest drops, 
              exclusive releases, and timeless classics from the world's most sought-after brands.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Subscribe to Newsletter
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-300 placeholder:text-gray-500"
                />
                <button className="relative group overflow-hidden rounded-lg px-6 py-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative text-white font-semibold">Subscribe</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-all duration-300 group flex items-center gap-2"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          
          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={social.name}
              >
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${social.color}`}></div>
                <div className="relative w-10 h-10 flex items-center justify-center bg-white/5 rounded-full group-hover:scale-110 transition-all duration-300">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-gray-400">Secure Payments</p>
            <div className="flex gap-3 flex-wrap justify-center">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="px-3 py-1.5 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <span className="text-sm group-hover:scale-105 inline-block transition-transform duration-300">
                    {method.icon} {method.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} SneakerShop. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Made with <span className="text-red-500 animate-pulse inline-block">❤️</span> for sneaker lovers
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-6 right-6 group"
        >
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </button>
      </div>

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
      `}</style>
    </footer>
  );
};

export default Footer;