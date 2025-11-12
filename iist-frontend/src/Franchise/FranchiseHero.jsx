import React from "react";
import { FaHandshake, FaUsers, FaChartLine } from "react-icons/fa";

export default function FranchiseHero() {
  return (
    <section className="bg-[#1a4e92] text-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              IISD Franchisee Opportunities
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Partner with IISD to bring world-class skill education to your region. Build a profitable business while making a meaningful impact on your community.
            </p>
            <a
              href="#apply"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
            >
              Apply for Franchisee
            </a>

            {/* Feature highlights */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-4 rounded-full mb-2">
                  <FaHandshake className="text-2xl" />
                </div>
                <p className="text-center text-sm">Trusted Partnership</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-4 rounded-full mb-2">
                  <FaUsers className="text-2xl" />
                </div>
                <p className="text-center text-sm">Community Impact</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-4 rounded-full mb-2">
                  <FaChartLine className="text-2xl" />
                </div>
                <p className="text-center text-sm">Profit Growth</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:w-1/2">
            <img
              src="https://www.example.com/franchise-hero.png"
              alt="IISD Franchisee"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
