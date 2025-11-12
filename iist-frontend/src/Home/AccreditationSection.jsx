import React from "react";
import { Shield, Globe2, CheckCircle, Award } from "lucide-react";

export default function AccreditationSection() {
  return (
    <section className="bg-[#f9fbfd] py-10 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <span className="bg-yellow-400 text-black text-sm font-semibold px-4 py-1 rounded-full">
          International Recognition
        </span>
        <h2 className="text-4xl font-bold mt-4 mb-2 text-gray-900">
          Globally Recognized Accreditation
        </h2>
        <p className="text-gray-600 mb-12">
          IISD is proud to be accredited by eduglobe education UAE, ensuring our programs meet
          the highest international standards
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {/* Left Yellow Card */}
          <div className="bg-[#fff9ef] border border-yellow-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Award className="text-yellow-500 w-8 h-8 mr-3" />
              <h3 className="text-lg font-bold text-gray-800">eduglobe education UAE</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Our partnership with eduglobe education UAE marks IISD’s transformation into a truly
              international institution, recognized across the Middle East and beyond.
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center"><CheckCircle className="text-yellow-500 w-4 h-4 mr-2" /> International curriculum standards</li>
              <li className="flex items-center"><CheckCircle className="text-yellow-500 w-4 h-4 mr-2" /> Global certification validity</li>
              <li className="flex items-center"><CheckCircle className="text-yellow-500 w-4 h-4 mr-2" /> Cross-border recognition</li>
              <li className="flex items-center"><CheckCircle className="text-yellow-500 w-4 h-4 mr-2" /> Quality assurance framework</li>
            </ul>
          </div>

          {/* Right Info Cards */}
          <div className="grid gap-4">
            <div className="bg-white border rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                <Shield className="text-blue-600 w-5 h-5 mr-2" /> Quality Standards
              </h4>
              <p className="text-gray-600 text-sm">
                All programs adhere to international quality benchmarks and undergo regular assessments.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                <Globe2 className="text-blue-600 w-5 h-5 mr-2" /> Global Acceptance
              </h4>
              <p className="text-gray-600 text-sm">
                Our certifications are recognized by employers and institutions worldwide.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-gray-800 flex items-center mb-2">
                <CheckCircle className="text-blue-600 w-5 h-5 mr-2" /> Verified Credentials
              </h4>
              <p className="text-gray-600 text-sm">
                Digital verification system ensures authenticity of all certificates issued.
              </p>
            </div>
          </div>
        </div>

        {/* Blue Bottom Section */}
        <div className="bg-[#0d63d0] text-white rounded-2xl mt-16 p-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Award className="w-8 h-8 mb-2" />
            <h3 className="text-xl font-bold mb-2">
              International Recognition You Can Trust
            </h3>
            <p className="text-sm text-blue-100 max-w-2xl">
              With our eduglobe education UAE accreditation, every IISD certificate carries the
              weight of international recognition, opening doors to opportunities worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
