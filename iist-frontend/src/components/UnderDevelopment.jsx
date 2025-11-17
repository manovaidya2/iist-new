import React from "react";

export default function UnderDevelopment() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-[#0b65d7] mb-4">
        🚧 Website Under Development
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-6">
        We are working hard to bring you an amazing experience.<br />
        Please check back soon!
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="mailto:info@example.com"
          className="px-6 py-3 bg-[#0b65d7] text-white rounded-lg font-semibold hover:bg-[#0955b6] transition"
        >
          Contact Us
        </a>
        <a
          href="/"
          className="px-6 py-3 border border-gray-400 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Home
        </a>
      </div>
    </div>
  );
}
