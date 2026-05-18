import React from 'react';
import { Heart } from 'lucide-react'; // Using lucide-react for the heart icon
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ image, price, title, category, colors }) => {
    const navigate = useNavigate();
    const handleMoreInfo = (shoeId) => {
    navigate(`/product/${shoeId}`);
  };
  return (
    <div onClick={() => handleMoreInfo(1)} className="group relative flex w-full max-w-[350px] flex-col bg-white font-sans cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-square w-full bg-[#ebedee] flex items-center justify-center overflow-hidden">
        {/* Heart Icon */}
        <button className="absolute top-4 right-4 z-10 p-1 hover:scale-110 transition-transform">
          <Heart size={20} strokeWidth={1.5} className="text-black" />
        </button>
        
        {/* Product Image */}
        <img 
          src={image} 
          alt={title} 
          className="w-4/5 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="mt-3 flex flex-col space-y-1 px-1">
        <p className="text-[14px] font-bold text-black">${price}</p>
        <h3 className="text-[14px] font-medium leading-tight text-black hover:underline">
          {title}
        </h3>
        <p className="text-[13px] text-gray-600">{category}</p>
        <p className="text-[13px] text-gray-500">{colors} colors</p>
      </div>
    </div>
  );
};

export default ProductCard;