import React from "react";

export default function WorldLeadersSection() {
  return (
    <section className="bg-white py-10 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          World Leaders on Skill Development
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-10 max-w-3xl mx-auto">
          Global leaders have consistently emphasized the critical role of skill development in
          nation-building and economic progress
        </p>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-left shadow-sm">
            <p className="text-gray-800 italic mb-3 border-l-4 border-blue-600 pl-3">
              "Skill development is the key to economic growth"
            </p>
            <h4 className="font-semibold text-gray-900 text-sm md:text-base">
              Dr. APJ Abdul Kalam
            </h4>
            <p className="text-gray-500 text-sm">Former President of India</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-left shadow-sm">
            <p className="text-gray-800 italic mb-3 border-l-4 border-blue-600 pl-3">
              "Education is the most powerful weapon to change the world"
            </p>
            <h4 className="font-semibold text-gray-900 text-sm md:text-base">Nelson Mandela</h4>
            <p className="text-gray-500 text-sm">Former President of South Africa</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-left shadow-sm">
            <p className="text-gray-800 italic mb-3 border-l-4 border-blue-600 pl-3">
              "Skills training transformed Singapore into a developed nation"
            </p>
            <h4 className="font-semibold text-gray-900 text-sm md:text-base">Lee Kuan Yew</h4>
            <p className="text-gray-500 text-sm">Former PM of Singapore</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-left shadow-sm">
            <p className="text-gray-800 italic mb-3 border-l-4 border-blue-600 pl-3">
              "Vocational training is Germany’s competitive advantage"
            </p>
            <h4 className="font-semibold text-gray-900 text-sm md:text-base">Angela Merkel</h4>
            <p className="text-gray-500 text-sm">Former Chancellor of Germany</p>
          </div>
        </div>

        {/* Academic Philosophy */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Academic Philosophy</h3>

        <div className="bg-[#f9fbfd] rounded-lg shadow-sm max-w-3xl mx-auto p-8">
         <h4 className="text-blue-700 font-semibold text-2xl md:text-3xl mb-4">
  Skill + Structure + Assessment = Qualification
</h4>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Skills are not validated by experience alone — they are validated by measurable
            competence, and competence is validated through trusted evaluation. IISD provides the
            academic framework that transforms informal skill learning into formal, recognized
            qualifications.
          </p>
        </div>
      </div>
    </section>
  );
}