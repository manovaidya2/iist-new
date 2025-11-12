import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-[#1a4e92] text-white py-24">
      <div className="container mx-auto px-4 text-center">
     <h1 className="text-5xl md:text-6xl font-display font-semibold text-foreground mb-6">
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
