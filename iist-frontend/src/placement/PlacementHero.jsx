import React from "react";

export default function PlacementHero() {
  return (
    <section
      className="w-full min-h-[80vh] flex items-center px-6 md:px-16 py-24 bg-cover bg-center bg-no-repeat text-white relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1590650046871-92c887180603?w=1920')",
      }}
    >
      <div className="max-w-3xl animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          IISD Placement Cell
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
          Connecting skilled professionals with global opportunities through industry partnerships, career guidance, and placement support.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#apply" className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300">
            Apply Now
          </a>
          <a href="#contact" className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300">
            Contact Us
          </a>
        </div>
      </div>
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-900 via-transparent to-blue-900"></div>
    </section>
  );
}
