import React from "react";
import { TrendingUp, Users2, Globe } from "lucide-react";

export default function GlobalScope() {
  return (
    <section className="bg-white py-10 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          The Global Scope of Skill Development
        </h2>

        {/* Top 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Economic Impact */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-left shadow-sm">
            <TrendingUp className="text-blue-600 w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Economic Impact</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              According to McKinsey, skilled workforce contributes to 40% of GDP growth in developed economies
            </p>
          </div>

          {/* Employment Reality */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-left shadow-sm">
            <Users2 className="text-blue-600 w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Employment Reality</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              World Economic Forum: 50% of all employees will need reskilling by 2025
            </p>
          </div>

          {/* Global Standard */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-left shadow-sm">
            <Globe className="text-blue-600 w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Standard</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              UNESCO recognizes skill-based education as essential for sustainable development
            </p>
          </div>
        </div>

        {/* Why Skills Matter Section */}
        <div className="bg-[#f6f9fc] rounded-xl p-10 text-center shadow-sm max-w-5xl mx-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Why Skills Matter</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            In today's rapidly evolving job market, practical skills are increasingly valued over traditional degrees.
            Countries like Germany, Switzerland, and Singapore have proven that structured skill education creates
            stronger economies, lower unemployment, and higher social mobility. IISD brings this proven model to a
            global audience through academically validated programs.
          </p>
        </div>
      </div>
    </section>
  );
}