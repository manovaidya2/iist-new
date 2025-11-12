import React from "react";
import { Globe2, Users, Award } from "lucide-react";
import bg from "../images/hero-banner.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#004a9f]/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[100vh] px-6 md:px-10 pt-10 md:pt-0">
        {/* Accreditation Tag */}
        <div className="mb-4 bg-white/20 backdrop-blur-sm text-xs md:text-sm px-3 py-1 rounded-full inline-flex items-center gap-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Accredited by eduglobe education UAE
        </div>

        {/* Title */}
        <h1
          className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight max-w-4xl"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          International Institute of <br />
          <span className="text-[#ffc52d]">Skill Development</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base md:text-lg lg:text-xl max-w-2xl text-white/90">
          Empowering global learners with industry-relevant skills and
          internationally recognized certifications
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button className="bg-[#ffc52d] hover:bg-[#eab718] text-black font-semibold px-5 py-2 rounded-lg shadow transition inline-flex items-center gap-2 text-sm md:text-base">
            Explore Programs →
          </button>
          <button className="bg-white text-gray-900 font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-100 transition text-sm md:text-base">
            Learn More
          </button>
        </div>

        {/* Stats Cards */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/20 w-52 text-center">
            <Globe2 className="mx-auto mb-2 text-[#ffc52d]" size={24} />
            <h3 className="text-xl font-bold text-white">50+</h3>
            <p className="text-white font-semibold text-sm">Countries</p>
            <p className="text-xs text-white/80">Global Recognition</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/20 w-52 text-center">
            <Users className="mx-auto mb-2 text-[#ffc52d]" size={24} />
            <h3 className="text-xl font-bold text-white">10,000+</h3>
            <p className="text-white font-semibold text-sm">Students Trained</p>
            <p className="text-xs text-white/80">Across the globe</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/20 w-52 text-center">
            <Award className="mx-auto mb-2 text-[#ffc52d]" size={24} />
            <h3 className="text-xl font-bold text-white">98%</h3>
            <p className="text-white font-semibold text-sm">Program Success</p>
            <p className="text-xs text-white/80">Certification rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
