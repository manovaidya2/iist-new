import React from "react";

export default function AdmissionForm() {
  return (
    <section className="bg-[#f9fafc] py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a4e92] mb-8 text-center">
          Student Admission Form
        </h2>

        <form className="space-y-10">
          {/* Personal Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-[#1a4e92] pl-3">
              Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a4e92] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a4e92] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Gender *
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a4e92] focus:outline-none">
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nationality *
                </label>
                <input
                  type="text"
                  placeholder="Enter nationality"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a4e92] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a4e92] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a4e92] focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">
                Address (City, State, PIN, Country) *
              </label>
              <textarea
                rows="3"
                placeholder="Enter your full address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a4e92] focus:outline-none"
              ></textarea>
            </div>
          </div>

          {/* Academic Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-[#1a4e92] pl-3">
              Academic Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Highest Qualification *
                </label>
                <input
                  type="text"
                  placeholder="Enter qualification"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a4e92] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Institution Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter institution name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a4e92] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Selected School *
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a4e92] focus:outline-none">
                  <option value="">Select school</option>
                  <option>School of Fashion & Apparel</option>
                  <option>School of Hospitality, Tourism & Aviation</option>
                  <option>School of Digital Technologies</option>
                  <option>School of Media, Design & Creative Arts</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Course / Program Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter program name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a4e92] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Level *
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a4e92] focus:outline-none">
                  <option value="">Select level</option>
                  <option>ISC Level 3</option>
                  <option>ISC Level 4</option>
                  <option>ISC Level 5</option>
                </select>
              </div>
            </div>
          </div>

          {/* Declaration */}
          <div className="bg-[#f1f5f9] rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Declaration
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              I hereby declare that the above information is true. I understand that enrollment does not
              guarantee job placement and that my certification depends on successful completion and
              passing of IISD's central assessment. I consent to the use of my data for academic and
              certification verification purposes only.
            </p>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="agree" className="w-5 h-5 accent-[#1a4e92]" />
              <label htmlFor="agree" className="text-gray-700 text-sm">
                I agree to the declaration above.
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#1a4e92] text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
