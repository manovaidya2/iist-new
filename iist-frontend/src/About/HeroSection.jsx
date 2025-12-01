import React from "react";

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-[80vh] flex items-center px-6 md:px-16 py-20 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.0) 100%), url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1920')",
      }}
    >
      <div className="max-w-2xl animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Transforming Lives Through Global Education
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-90">
          The International Institute of Skill Development (IISD) empowers learners worldwide with
          industry‑relevant skills and internationally recognized qualifications.
        </p>

        <a
          href="#contact"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
