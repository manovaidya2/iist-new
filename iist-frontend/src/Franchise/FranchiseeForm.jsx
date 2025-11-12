import React from "react";

export default function FranchiseeForm() {
  return (
    <section className="max-w-5xl mx-auto p-8 bg-white shadow-xl rounded-2xl my-16">
      <h2 className="text-3xl font-bold text-[#1a4e92] mb-6 text-center">
        Apply for Franchisee
      </h2>
      <p className="text-gray-700 mb-8 text-center">
        Fill out the form below and our team will contact you within 48 hours
      </p>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-gray-800 font-semibold mb-2">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4e92] focus:border-[#1a4e92] outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-800 font-semibold mb-2">
            Email *
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4e92] focus:border-[#1a4e92] outline-none"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-800 font-semibold mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            placeholder="+91 XXX XXX XXXX"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4e92] focus:border-[#1a4e92] outline-none"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-gray-800 font-semibold mb-2">
            City *
          </label>
          <input
            type="text"
            placeholder="Your city"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4e92] focus:border-[#1a4e92] outline-none"
          />
        </div>

        {/* State / Region */}
        <div>
          <label className="block text-gray-800 font-semibold mb-2">
            State / Region *
          </label>
          <input
            type="text"
            placeholder="Your state"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4e92] focus:border-[#1a4e92] outline-none"
          />
        </div>

        {/* Investment Capacity */}
        <div>
          <label className="block text-gray-800 font-semibold mb-2">
            Investment Capacity
          </label>
          <input
            type="text"
            placeholder="e.g., 50 Lakhs - 1 Crore"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4e92] focus:border-[#1a4e92] outline-none"
          />
        </div>

        {/* Previous Business Experience */}
        <div className="lg:col-span-2">
          <label className="block text-gray-800 font-semibold mb-2">
            Previous Business Experience
          </label>
          <textarea
            placeholder="Tell us about your background and experience"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4e92] focus:border-[#1a4e92] outline-none"
            rows={4}
          />
        </div>

        {/* Additional Information */}
        <div className="lg:col-span-2">
          <label className="block text-gray-800 font-semibold mb-2">
            Additional Information
          </label>
          <textarea
            placeholder="Any questions or additional details"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4e92] focus:border-[#1a4e92] outline-none"
            rows={3}
          />
        </div>

        {/* Submit Button */}
        <div className="lg:col-span-2 text-center">
          <button
            type="submit"
            className="bg-[#1a4e92] text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-[#163c70] transition duration-300"
          >
            Submit Application
          </button>
        </div>
      </form>
    </section>
  );
}
