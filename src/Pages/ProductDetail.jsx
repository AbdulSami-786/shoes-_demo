// src/pages/ProductDetail.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { shoes } from '../data/shoes';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const shoe = shoes.find(s => s.id === parseInt(id));

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden aspect-square border border-white/10 shadow-2xl">
              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {shoe.name}
            </h1>
            
            <p className="text-3xl font-semibold text-gray-300">
              ${shoe.price}
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              {shoe.description}
            </p>

            {/* Color options */}
            <div className="flex gap-2">
              {shoe.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border border-white/20"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>

            {/* Product specifications */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <p className="text-gray-400 text-sm">Material</p>
                <p className="font-medium">{shoe.details.material}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <p className="text-gray-400 text-sm">Sole</p>
                <p className="font-medium">{shoe.details.sole}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <p className="text-gray-400 text-sm">Fit</p>
                <p className="font-medium">{shoe.details.fit}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                <p className="text-gray-400 text-sm">Weight</p>
                <p className="font-medium">{shoe.details.weight}</p>
              </div>
            </div>

            <button
              onClick={() => navigate(`/checkout/${shoe.id}`)}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;