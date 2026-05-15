import React from "react";

const Spotlight = () => {
  const items = [
    {
      name: "Air Jordan 1",
      image: "./icon1.png",
    },
    {
      name: "Air Max",
      image: "./icon2.png",
    },
    {
      name: "Graphic Tees",
      image: "./icon3.png",
    },
    {
      name: "Dunk",
      image: "./icon4.png",
    },
    {
      name: "Air Force 1",
      image: "./icon5.png",
    },
    {
      name: "24.7 Collection",
      image: "./icon6.png",
    },
    {
      name: "Vomero 5",
      image: "./icon7.png",
    },
    {
      name: "Rejuven8",
      image: "./icon8.png",
    },
    {
      name: "ACG",
      image: "./icon9.png",
    },
    {
      name: "Pegasus",
      image: "./icon10.png",
    },
    {
      name: "Vomero Plus",
      image: "./icon11.png",
    },
    {
      name: "Metcon",
      image: "./icon12.png",
    },
    {
      name: "Fan Gear",
      image: "./icon13.png",
    },
    {
      name: "Jordan Retro",
      image: "./icon14.png",
    },
    {
      name: "Sabrina 3",
      image: "./icon15.png",
    },
    {
      name: "Tatum 4",
      image: "./icon16.png",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-6">
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight text-black">
          Spotlight
        </h1>

        <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
          Classic silhouettes and cutting-edge innovation to build your game
          from the ground up.
        </p>
      </div>

      {/* Icons Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-y-16 gap-x-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Image */}
            <div className="w-24 h-24 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2">
              <img
                src={item.image}
                alt={item.name}
                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Text */}
            <h3 className="mt-3 text-sm md:text-base font-semibold text-black text-center leading-tight">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spotlight;