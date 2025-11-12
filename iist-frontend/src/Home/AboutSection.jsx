import React from "react";
import { Globe2, Target, BadgeCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#f9fbff] py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div>
          {/* Small Tag */}
          <div className="inline-flex items-center gap-2 bg-[#e9f1ff] text-[#004aad] px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <span className="bg-[#004aad] text-white px-2 py-1 rounded-full text-xs">★</span>
            About IISD
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] leading-snug mb-6 font-['Playfair_Display']">
            Transforming Lives Through <br />
            <span className="text-[#004aad]">Global Education</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            The International Institute of Skill Development (IISD) is a globally
            recognized institution committed to bridging the skill gap through
            quality training and internationally accredited certification
            programs.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            With recognition from eduglobe education UAE, we have evolved into a
            premier international education provider, offering industry-relevant
            programs that prepare students and professionals for successful global
            careers.
          </p>

          {/* Stats */}
          <div className="flex gap-6 mt-8">
            <div className="bg-[#e9f1ff] rounded-xl px-8 py-5 flex items-center justify-center gap-2">
              <h3 className="text-[#004aad] text-3xl font-bold">50+</h3>
              <p className="text-gray-600 font-medium">Countries</p>
            </div>
            <div className="bg-[#e9f1ff] rounded-xl px-8 py-5 flex items-center justify-center gap-2">
              <h3 className="text-[#004aad] text-3xl font-bold">100+</h3>
              <p className="text-gray-600 font-medium">Programs</p>
            </div>
          </div>
        </div>

        {/* Right Section - Cards */}
        <div className="flex flex-col gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start w-full">
            <div className="bg-[#004aad]/10 p-4 rounded-xl text-[#004aad]">
              <Target size={30} />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-[#1a1a1a] mb-1">Our Mission</h4>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals worldwide with practical, job-oriented
                skills that meet international industry standards and drive career
                success.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start w-full">
            <div className="bg-[#004aad]/10 p-4 rounded-xl text-[#004aad]">
              <Globe2 size={30} />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-[#1a1a1a] mb-1">Global Reach</h4>
              <p className="text-gray-600 leading-relaxed">
                Operating across multiple continents, we bring world-class
                education to learners everywhere through our extensive network of
                centers.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-start w-full">
            <div className="bg-[#004aad]/10 p-4 rounded-xl text-[#004aad]">
              <BadgeCheck size={30} />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-[#1a1a1a] mb-1">Quality Assurance</h4>
              <p className="text-gray-600 leading-relaxed">
                Every program is designed with industry input and meets
                international quality standards, ensuring graduates are
                career-ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
