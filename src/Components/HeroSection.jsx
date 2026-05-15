import React, { useState } from "react";

const HeroSection = () => {
  const shoes = [
    {
      id: 1,
      title: "Nike Red Air",
      price: "$149",
      color: "from-red-500 to-red-700",
      image: "./sho1.png",
    },

    {
      id: 2,
      title: "Golden Runner",
      price: "$199",
      color: "from-yellow-300 to-yellow-600",
      image: "./sho2.png",
    },

    {
      id: 3,
      title: "Pink Street",
      price: "$179",
      color: "from-pink-400 to-pink-600",
      image: "./sho3.png",
    },

    {
      id: 4,
      title: "Blue Motion",
      price: "$159",
      color: "from-cyan-400 to-blue-700",
      image: "./sho4.png",
    },
  ];

  const [activeShoe, setActiveShoe] = useState(shoes[1]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-gradient-to-r ${activeShoe.color} opacity-20 blur-[140px] rounded-full transition-all duration-1000`}
        ></div>

        <div
          className={`absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-gradient-to-r ${activeShoe.color} opacity-20 blur-[140px] rounded-full transition-all duration-1000`}
        ></div>

        {/* Smoke */}
        <div className="absolute inset-0 opacity-20">
          <div className="smoke smoke1"></div>
          <div className="smoke smoke2"></div>
          <div className="smoke smoke3"></div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-8 md:px-16 py-10">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h1 className="text-[90px] md:text-[140px] leading-[0.8] font-black uppercase text-white">
            AIR
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mt-6 max-w-md">
            Premium futuristic sneakers crafted with bold aesthetics,
            next-generation comfort, and elite streetwear vibes.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">
            <button
              className={`px-10 py-4 rounded-full bg-gradient-to-r ${activeShoe.color} text-black font-bold uppercase tracking-wider hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(250,204,21,0.4)]`}
            >
              Buy Now
            </button>

            <button className="px-10 py-4 rounded-full border border-white/40 text-white font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition duration-300">
              More Info
            </button>
          </div>

          {/* Product Info */}
          <div className="mt-12">
            <p className="text-gray-400 uppercase tracking-[4px] text-sm">
              Selected Shoe
            </p>

            <h2 className="text-4xl font-black mt-3">
              {activeShoe.title}
            </h2>

            <p className="text-2xl mt-2 text-gray-300">
              {activeShoe.price}
            </p>
          </div>
        </div>

        {/* CENTER SHOE */}
        <div className="relative flex-1 flex items-center justify-center mt-20 lg:mt-0">
          {/* Vertical Bars */}
          <div className="absolute flex gap-5 z-0">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className={`w-[70px] md:w-[90px] h-[600px] bg-gradient-to-b ${activeShoe.color} opacity-90 rounded-sm transition-all duration-700`}
              ></div>
            ))}
          </div>

          {/* Shoe Glow */}
          <div
            className={`absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-r ${activeShoe.color} blur-[120px] opacity-30`}
          ></div>

          {/* Main Shoe */}
          <img
            key={activeShoe.id}
            src={activeShoe.image}
            alt={activeShoe.title}
            className="relative z-20 
            w-[340px] 
            md:w-[620px] 
            h-[220px] 
            md:h-[420px] 
            object-contain 
            rotate-[-12deg] 
            drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]
            animate-shoe-enter
            animate-float"
          />

          {/* Huge Text */}
          <h1 className="absolute bottom-0 text-[120px] md:text-[220px] font-black text-white/5 uppercase tracking-[20px] z-0">
            AIR
          </h1>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden lg:flex flex-col items-center gap-6 border border-white/20 rounded-[50px] px-4 py-6 backdrop-blur-xl bg-white/5 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
          {shoes.map((shoe) => (
            <button
              key={shoe.id}
              onClick={() => setActiveShoe(shoe)}
              className={`w-[90px] h-[90px] rounded-full border flex items-center justify-center cursor-pointer transition-all duration-500 overflow-hidden
              ${
                activeShoe.id === shoe.id
                  ? `border-yellow-400 bg-gradient-to-r ${shoe.color} shadow-[0_0_30px_rgba(250,204,21,0.6)] scale-110`
                  : "border-white/20 bg-black/40 hover:border-yellow-400 hover:scale-105"
              }`}
            >
              <img
                src={shoe.image}
                alt={shoe.title}
                className="w-[65px] h-[65px] object-contain transition duration-300"
              />
            </button>
          ))}
        </div>
      </section>

      {/* CUSTOM CSS */}
      <style>
        {`
          /* FLOAT */
          @keyframes float {
            0% {
              transform: translateY(0px) rotate(-12deg);
            }

            50% {
              transform: translateY(-18px) rotate(-12deg);
            }

            100% {
              transform: translateY(0px) rotate(-12deg);
            }
          }

          .animate-float {
            animation: float 5s ease-in-out infinite;
          }

          /* SMOOTH SHOE ENTRY */
          @keyframes shoeEnter {
            0% {
              opacity: 0;
              transform: translateY(-220px) scale(0.8) rotate(-20deg);
              filter: blur(12px);
            }

            60% {
              opacity: 1;
              transform: translateY(20px) scale(1.03) rotate(-10deg);
              filter: blur(0px);
            }

            100% {
              opacity: 1;
              transform: translateY(0px) scale(1) rotate(-12deg);
              filter: blur(0px);
            }
          }

          .animate-shoe-enter {
            animation: shoeEnter 1s cubic-bezier(0.22, 1, 0.36, 1);
          }

          /* SMOKE */
          .smoke {
            position: absolute;
            width: 500px;
            height: 500px;
            background: radial-gradient(
              circle,
              rgba(255, 255, 255, 0.15),
              transparent 70%
            );
            filter: blur(60px);
          }

          .smoke1 {
            top: 10%;
            left: 10%;
            animation: smokeMove 15s infinite alternate ease-in-out;
          }

          .smoke2 {
            top: 40%;
            right: 5%;
            animation: smokeMove 18s infinite alternate-reverse ease-in-out;
          }

          .smoke3 {
            bottom: 0%;
            left: 30%;
            animation: smokeMove 20s infinite alternate ease-in-out;
          }

          @keyframes smokeMove {
            0% {
              transform: translate(0, 0) scale(1);
            }

            100% {
              transform: translate(60px, -40px) scale(1.2);
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;