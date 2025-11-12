import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function FranchiseeRequirements() {
  const requirements = [
    "Minimum 2000 sq ft dedicated training space",
    "Investment capacity for infrastructure setup",
    "Commitment to IISD's academic standards",
    "Experienced management team",
    "Strong local community connections",
    "Passion for skill-based education"
  ];

  return (
    <section className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-[#1a4e92] mb-6 text-center">
        Franchisee Requirements
      </h2>
      <ul className="space-y-4">
        {requirements.map((item, index) => (
          <li key={index} className="flex items-start space-x-4">
            <FaCheckCircle className="text-[#1a4e92] mt-1 flex-shrink-0" size={24} />
            <span className="text-gray-800 text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
