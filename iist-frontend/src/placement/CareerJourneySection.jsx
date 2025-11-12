import React from "react";
import { FaUserPlus, FaBriefcase } from "react-icons/fa";

export default function CareerJourneySection() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-[#1a4e92] to-[#0056b3] text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to Start Your Career Journey?
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Register with our placement cell and get access to exclusive job opportunities
          and global career support from our industry partners.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Register Button */}
          <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#1a4e92] font-semibold text-lg px-8 py-4 rounded-full shadow-xl hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 transition-transform duration-300">
            <FaUserPlus className="text-[#1a4e92]" />
            Register for Placement
          </button>

          {/* View Openings Button */}
          <button className="flex items-center justify-center gap-3 border-2 bg-blue-900 border-black-900 text-white-900 font-semibold text-lg px-8 py-4 rounded-full hover:bg-blue-100 hover:text-[#1a4e92] hover:scale-105 transition-transform duration-300">
            <FaBriefcase />
            View Current Openings
          </button>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-full z-0"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f0efefff"
          fillOpacity="1"
          d="M0,256L60,224C120,192,240,128,360,128C480,128,600,192,720,192C840,192,960,128,1080,101.3C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
