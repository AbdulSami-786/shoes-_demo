
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { shoes } from '../data/shoes';

const HeroSection = () => {
  const [activeShoe, setActiveShoe] = useState(shoes[0]);
  const navigate = useNavigate();

  // Handle buying a shoe
  const handleBuyNow = (shoeId) => {
    navigate(`/checkout/${shoeId}`);
  };

  // Handle more info button
  const handleMoreInfo = (shoeId) => {
    navigate(`/product/${shoeId}`);
  };

  // Handle sidebar shoe selection
  const handleShoeSelect = (shoe) => {
    setActiveShoe(shoe);
    navigate(`/product/${shoe.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[90vh]">
          
          {/* Left sidebar - Shoe selection */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Collection
              </h3>
              <div className="space-y-3">
                {shoes.map((shoe) => (
                  <button
                    key={shoe.id}
                    onClick={() => handleShoeSelect(shoe)}
                    className={`w-full p-3 rounded-xl transition-all duration-300 ${
                      activeShoe.id === shoe.id
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/30 scale-105'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={shoe.image}
                        alt={shoe.name}
                        className="w-10 h-10 object-cover rounded-lg"
                      />
                      <div className="text-left">
                        <p className="text-sm font-semibold truncate">{shoe.name}</p>
                        <p className="text-xs text-gray-400">${shoe.price}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main content - Active shoe display */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Shoe image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-3xl overflow-hidden aspect-square border border-white/10 shadow-2xl">
                  <img
                    src={activeShoe.image}
                    alt={activeShoe.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>

              {/* Shoe details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {activeShoe.name}
                  </h1>
                  <p className="text-2xl font-semibold text-gray-300">
                    ${activeShoe.price}
                  </p>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed">
                  {activeShoe.description}
                </p>

                {/* Color options */}
                <div className="flex gap-2">
                  {activeShoe.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border border-white/20 cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => handleBuyNow(activeShoe.id)}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => handleMoreInfo(activeShoe.id)}
                    className="px-8 py-3 bg-white/10 backdrop-blur-lg rounded-xl font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/10"
                  >
                    More Info
                  </button>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-gray-400 text-sm">Material</p>
                    <p className="font-medium">{activeShoe.details.material}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Sole</p>
                    <p className="font-medium">{activeShoe.details.sole}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
