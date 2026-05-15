import { React } from 'react';
import Home from './Pages/Home';

const App = () => {
  return (
 <>
 
      {/* Navbar */}
<nav className="relative overflow-hidden flex items-center justify-between px-8 md:px-16 py-6 border-b border-white/10 backdrop-blur-2xl bg-black/30 group">

  {/* DARK ANIMATED GRADIENT BG */}
  <div className="absolute inset-0 -z-10">
    
    {/* Moving Gradient Layer */}
    <div className="absolute inset-0 bg-[linear-gradient(120deg,#050816,#0f172a,#111827,#1e1b4b,#050816)] bg-[length:300%_300%] animate-gradient"></div>

    {/* Glow Orbs */}
    <div className="absolute -top-20 left-0 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl animate-float"></div>

    <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float-delay"></div>

    <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl animate-float-slow"></div>

    {/* Hover Shine Effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]"></div>
  </div>

  {/* Logo */}
  <div className="text-3xl font-black tracking-[0.3em] text-white cursor-pointer hover:scale-110 transition duration-500">
    FLYKICKS
  </div>

  {/* Nav Links */}
  <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
    
    {["Home", "Collection", "New Arrivals", "Brands", "Contact"].map((item) => (
      <a
        key={item}
        href="#"
        className="relative hover:text-white transition duration-300 group/link"
      >
        {item}

        {/* Animated Underline */}
        <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover/link:w-full"></span>

        {/* Hover Glow */}
        <span className="absolute inset-0 opacity-0 group-hover/link:opacity-100 blur-xl bg-white/10 transition duration-500"></span>
      </a>
    ))}
  </div>

  {/* Button */}
  <button className="relative overflow-hidden px-6 py-3 rounded-full bg-white text-black font-semibold transition duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]">
    
    <span className="relative z-10">Shop Now</span>

    {/* Animated Shine */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-120%] hover:translate-x-[120%] transition duration-1000"></div>
  </button>
</nav>
 <Home/>
 </>
  );
};

export default App;