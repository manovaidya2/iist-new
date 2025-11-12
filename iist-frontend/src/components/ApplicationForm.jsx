import React from "react";
import logo from "../images/IISD.855d404de3a326ca6293.webp";

export default function ApplicationForm() {
  return (
    <div className="my-10 px-4 sm:px-6 md:px-0">
      <div className="max-w-4xl mx-auto p-6 border-[10px] border-dashed border-[#ea5a21]">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="IISD Logo" className="w-28 h-28" />
        </div>

        {/* Headings */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
          भारतीय कौशल विकास संस्थान
        </h1>
        <h2 className="text-center text-xl sm:text-2xl font-medium text-blue-800 mb-3">
          INDIAN INSTITUTE OF SKILL DEVELOPMENT
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-500 mb-6">
          (FOR SKILLED & EXPERIENCED CANDIDATES)
          <br />
          APPLICATION FORM FOR ESTABLISHMENT OR AFFILIATION OF
          <br />
          VOCATIONAL, SKILL TRAINING & EDUCATION CENTRE
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Name, Gender, DOB */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
            <div className="flex-1 flex flex-col">
              <label className="mb-1 text-base font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full md:w-[95%] p-3 border border-gray-300 rounded text-base"
              />
            </div>
            <div className="flex flex-col justify-start md:justify-center">
              <label className="mb-1 text-base font-medium">Gender</label>
              <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-1 sm:space-y-0 text-base">
                <label><input type="radio" name="gender" /> Male</label>
                <label><input type="radio" name="gender" /> Female</label>
                <label><input type="radio" name="gender" /> Other</label>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <label className="mb-1 text-base font-medium">Date of Birth</label>
              <input
                type="date"
                className="w-full md:w-[95%] p-3 border border-gray-300 rounded text-base"
              />
            </div>
          </div>

          {/* Parents */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
            <div className="flex-1 flex flex-col">
              <label className="mb-1 text-base font-medium">Father's Name</label>
              <input
                type="text"
                placeholder="Enter father's name"
                className="w-full md:w-[95%] p-3 border border-gray-300 rounded text-base"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="mb-1 text-base font-medium">Mother's Name</label>
              <input
                type="text"
                placeholder="Enter mother's name"
                className="w-full md:w-[95%] p-3 border border-gray-300 rounded text-base"
              />
            </div>
          </div>

          {/* Qualifications */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
            <div className="flex-1 flex flex-col">
              <label className="mb-1 text-base font-medium">Academic Qualification</label>
              <input
                type="text"
                placeholder="Enter academic qualification"
                className="w-full md:w-[95%] p-3 border border-gray-300 rounded text-base"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="mb-1 text-base font-medium">Technical Qualification</label>
              <input
                type="text"
                placeholder="Enter technical qualification (if any)"
                className="w-full md:w-[95%] p-3 border border-gray-300 rounded text-base"
              />
            </div>
          </div>

          {/* Institute Name & Address */}
          <div className="flex flex-col">
            <label className="mb-1 text-base font-medium">Institute Name & Address</label>
            <input
              type="text"
              placeholder="Name & Address of Existing institute"
              className="w-full md:w-[95%] p-3 border border-gray-300 rounded text-base"
            />
          </div>

          {/* Nationality, Address, Country */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
            <div className="flex-1 flex flex-col">
              <label className="mb-1 text-base font-medium">Nationality</label>
              <input
                type="text"
                placeholder="Enter your nationality"
                className="w-full md:w-[95%] p-3 border border-gray-300 rounded text-base"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="mb-1 text-base font-medium">Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full md:w-[95%] p-3 border border-gray-300 rounded text-base"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="mb-1 text-base font-medium">Country</label>
              <input
                type="text"
                placeholder="Enter your Country"
                className="w-full md:w-[95%] p-3 border border-gray-300 rounded text-base"
              />
            </div>
          </div>

          {/* City, Phone, Email */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
            <div className="flex-1 flex flex-col">
              <label className="mb-1 text-base font-medium">City</label>
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full md:w-[95%] p-3 border border-gray-300 rounded text-base"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="mb-1 text-base font-medium">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full md:w-[95%] p-3 border border-gray-300 rounded text-base"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="mb-1 text-base font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-[95%] p-3 border border-gray-300 rounded text-base"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#ea5a21] text-white font-semibold py-3 px-10 rounded text-lg hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
