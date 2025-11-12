import React from "react";
import { FaBook, FaRibbon, FaUsers, FaGlobe, FaChartLine, FaCheck } from "react-icons/fa";

export default function WhyPartnerSection() {
  const features = [
    {
      icon: <FaBook className="text-blue-600 text-2xl" />,
      title: "Proven Curriculum",
      description: "Access to internationally recognized skill-based programs",
    },
    {
      icon: <FaRibbon className="text-blue-600 text-2xl" />,
      title: "Brand Recognition",
      description: "Leverage IISD's global academic reputation",
    },
    {
      icon: <FaUsers className="text-blue-600 text-2xl" />,
      title: "Training Support",
      description: "Comprehensive faculty training and development",
    },
    {
      icon: <FaGlobe className="text-blue-600 text-2xl" />,
      title: "Marketing Materials",
      description: "Ready-to-use promotional content and resources",
    },
    {
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
      title: "Business Model",
      description: "Tested and profitable operational framework",
    },
    {
      icon: <FaCheck className="text-blue-600 text-2xl" />,
      title: "Ongoing Support",
      description: "Continuous assistance from IISD headquarters",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Why Partner with IISD?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mr-4 mt-1">
                {feature.icon}
              </div>
              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
