import React from "react";
import { FaSearch, FaDownload, FaCheckCircle } from "react-icons/fa";

export default function ResultsPortalSection() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-[#e8f1ff] via-[#f5f8ff] to-[#ffffff] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a4e92] mb-4 tracking-tight">
            Online Results Portal
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#1a4e92] to-[#0056b3] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Check your examination results and download your official IISD certificates instantly.
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 md:p-10 border border-blue-100 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#1a4e92] mb-3">
            Search Results
          </h3>
          <p className="text-gray-500 mb-8">
            Enter your details to view examination results
          </p>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Student ID */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Student ID / Enrollment Number
              </label>
              <input
                type="text"
                placeholder="IISD/2024/XXXXX"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1a4e92] outline-none transition-all"
              />
            </div>

            {/* DOB */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#1a4e92] outline-none transition-all"
              />
            </div>

            {/* Exam Session */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Exam Session
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-[#1a4e92] outline-none transition-all">
                <option value="">Select exam session</option>
                <option>January 2025</option>
                <option>March 2025</option>
                <option>June 2025</option>
                <option>September 2025</option>
                <option>December 2025</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-10">
            <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#1a4e92] to-[#0056b3] text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mx-auto">
              <FaSearch className="text-white text-xl" />
              Search Results
            </button>
          </div>
        </div>

        {/* ✅ Result Found Section */}
        <div className="mt-16 text-left bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[#1a4e92] to-[#0056b3] text-white px-6 py-4 flex items-center gap-3">
            <FaCheckCircle className="text-2xl" />
            <h3 className="text-2xl font-bold">Result Found</h3>
          </div>

          <div className="p-8 space-y-6">
            {/* Student Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="font-semibold">Student Name:</p>
                <p className="text-lg text-[#1a4e92] font-medium">[Name will appear here]</p>
              </div>
              <div>
                <p className="font-semibold">Student ID:</p>
                <p className="text-lg text-[#1a4e92] font-medium">IISD/2024/XXXXX</p>
              </div>
              <div>
                <p className="font-semibold">Program:</p>
                <p className="text-lg text-[#1a4e92] font-medium">Fashion Design Diploma</p>
              </div>
              <div>
                <p className="font-semibold">Level:</p>
                <p className="text-lg text-[#1a4e92] font-medium">ISC Level 4</p>
              </div>
              <div>
                <p className="font-semibold">Exam Session:</p>
                <p className="text-lg text-[#1a4e92] font-medium">June 2024</p>
              </div>
              <div>
                <p className="font-semibold">Result Status:</p>
                <p className="text-lg text-green-600 font-semibold">PASSED</p>
              </div>
              <div>
                <p className="font-semibold">Grade:</p>
                <p className="text-lg text-[#ff9900] font-bold">A+ (Distinction)</p>
              </div>
            </div>

            {/* Subject-wise Marks */}
            <div className="mt-8">
              <h4 className="text-2xl font-semibold text-[#1a4e92] mb-4">
                Subject-wise Marks
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-center">
                  <thead className="bg-[#1a4e92] text-white">
                    <tr>
                      <th className="px-6 py-3 text-left">Subject</th>
                      <th className="px-6 py-3">Marks</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-3">Theory</td>
                      <td className="px-6 py-3 font-medium">85 / 100</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3">Practical</td>
                      <td className="px-6 py-3 font-medium">85 / 100</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3">Project Work</td>
                      <td className="px-6 py-3 font-medium">85 / 100</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3">Viva Voce</td>
                      <td className="px-6 py-3 font-medium">85 / 100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-10">
              <button className="flex items-center gap-3 bg-gradient-to-r from-[#1a4e92] to-[#0056b3] text-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition-all font-semibold">
                <FaDownload /> Download Result
              </button>
              <button className="flex items-center gap-3 bg-gradient-to-r from-[#28a745] to-[#218838] text-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition-all font-semibold">
                <FaDownload /> Download Certificate
              </button>
            </div>

            {/* Result Declaration Info */}
            <div className="mt-12 bg-[#f0f7ff] border border-blue-100 rounded-xl p-6 text-center">
              <h5 className="text-xl font-semibold text-[#1a4e92] mb-2">
                Result Declaration Schedule
              </h5>
              <p className="text-gray-700 mb-2">
                Results are typically declared within <strong>30 days</strong> of examination completion.
              </p>
              <p className="text-gray-600">
                For queries, contact:{" "}
                <a
                  href="mailto:results@iisdglobal.org"
                  className="text-[#1a4e92] font-medium underline"
                >
                  results@iisdglobal.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#1a4e92"
          fillOpacity="1"
          d="M0,256L60,224C120,192,240,128,360,128C480,128,600,192,720,192C840,192,960,128,1080,101.3C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
