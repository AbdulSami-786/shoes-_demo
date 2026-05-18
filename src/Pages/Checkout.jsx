// src/pages/Checkout.jsx

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { shoes } from '../data/shoes';

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const shoe = shoes.find(s => s.id === parseInt(id));
  const [isProcessing, setIsProcessing] = useState(false);

  if (!shoe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:scale-105 transition-transform"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handlePurchase = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('Purchase successful! Thank you for shopping!');
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <button
          onClick={() => navigate('/')}
          className="mb-6 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2"
        >
          ← Back
        </button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product summary */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="flex gap-4 mb-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden">
                  <img
                    src={shoe.image}
                    alt={shoe.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{shoe.name}</h3>
                  <p className="text-gray-400">${shoe.price}</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Subtotal</span>
                  <span>${shoe.price}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-xl font-bold mt-4">
                  <span>Total</span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ${shoe.price}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Card Number</label>
                  <input
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handlePurchase}
                  disabled={isProcessing}
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                    isProcessing
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105'
                  }`}
                >
                  {isProcessing ? 'Processing...' : 'Complete Purchase'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;