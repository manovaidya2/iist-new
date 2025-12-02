import React from "react";

export default function HeroSection() {
  return (
    <section
      className="text-white py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1920')",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6">
          Schools & Programs
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-light">
          IISD programs are organized under 10 globally aligned Schools, each offering 
          structured skill-based qualifications mapped to international competency levels.
        </p>

        <div className="mt-10">
          <button className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-gray-200 transition text-lg">
            Explore Programs
          </button>
        </div>
      </div>
    </section>
  );
}
