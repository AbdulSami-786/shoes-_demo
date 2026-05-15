import React from 'react';

const ShopSection = () => {
  const looks = [
    { id: 1, img: 'sec1.jpeg', items: 3 },
    { id: 2, img: 'sec2.jpeg', items: 2 },
    { id: 3, img: 'sec3.jpeg', items: 1 },
    { id: 4, img: 'sec4.jpeg', items: 1 },
  ];

  return (
    <section className="px-6 py-10 max-w-[1440px] mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-black tracking-tighter uppercase italic">
          Shop Your Style
        </h2>
        <p className="text-sm mt-2 text-gray-800">
          From the FIFA World Cup 26™ to your daily rotation.
        </p>
        <button className="mt-4 px-4 py-2 border border-black font-bold text-sm flex items-center gap-4 hover:bg-black hover:text-white transition-colors group">
          SEE ALL 
          <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {looks.map((look) => (
          <div key={look.id} className="relative aspect-[3/4] overflow-hidden group cursor-pointer bg-gray-100">
            {/* Background Image */}
            <img 
              src={look.img} 
              alt="Style item" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Item Badge */}
            <div className="absolute bottom-3 left-3 bg-white/95 px-2 py-1 flex items-center gap-2 border border-gray-200">
              <span className="text-[11px] font-bold text-black uppercase">
                {look.items} {look.items > 1 ? 'items' : 'item'}
              </span>
              <svg 
                className="w-3 h-3" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Progress Bar */}
      <div className="mt-6 w-full h-[3px] bg-gray-200 relative">
        <div className="absolute top-0 left-0 h-full w-1/2 bg-black transition-all duration-300"></div>
      </div>
    </section>
  );
};

export default ShopSection;