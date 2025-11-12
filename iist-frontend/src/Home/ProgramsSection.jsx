import React from "react";
import {
  Laptop,
  GraduationCap,
  Stethoscope,
  Palette,
  Scissors,
  Briefcase,
  Shield,
} from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Computer Science & IT",
      description:
        "Master cutting-edge technologies and programming languages with industry-aligned curriculum.",
      icon: <Laptop className="w-6 h-6 text-white" />,
      bg: "bg-blue-600",
    },
    {
      title: "Teacher Training",
      description:
        "Professional development programs for educators with global teaching methodologies.",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      bg: "bg-green-600",
    },
    {
      title: "Healthcare Management",
      description:
        "Comprehensive training in hospital administration and healthcare systems.",
      icon: <Stethoscope className="w-6 h-6 text-white" />,
      bg: "bg-red-500",
    },
    {
      title: "Beauty & Wellness",
      description:
        "International certification programs in cosmetics and wellness industry.",
      icon: <Palette className="w-6 h-6 text-white" />,
      bg: "bg-pink-500",
    },
    {
      title: "Arts & Design",
      description:
        "Creative skill development in fine arts, painting, and digital design.",
      icon: <Palette className="w-6 h-6 text-white" />,
      bg: "bg-purple-600",
    },
    {
      title: "Fashion & Tailoring",
      description:
        "Professional courses in fashion design, pattern making, and garment construction.",
      icon: <Scissors className="w-6 h-6 text-white" />,
      bg: "bg-indigo-600",
    },
    {
      title: "Business Management",
      description:
        "Global business strategies, entrepreneurship, and organizational leadership.",
      icon: <Briefcase className="w-6 h-6 text-white" />,
      bg: "bg-orange-500",
    },
    {
      title: "Safety Management",
      description:
        "International safety standards, risk management, and workplace safety protocols.",
      icon: <Shield className="w-6 h-6 text-white" />,
      bg: "bg-orange-600",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            World-Class Skill Development Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of internationally recognized
            certification programs designed for global careers
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow text-left"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-lg ${program.bg} mb-4`}
              >
                {program.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {program.description}
              </p>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <button className="px-6 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition">
            View All Programs →
          </button>
        </div>
      </div>
    </section>
  );
}
