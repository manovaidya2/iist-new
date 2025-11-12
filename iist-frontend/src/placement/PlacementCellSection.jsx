import React from "react";
import { FaUserGraduate, FaBuilding, FaGlobeAsia, FaChartLine } from "react-icons/fa";

export default function PlacementCellSection() {
  const stats = [
    {
      icon: <FaUserGraduate className="text-4xl text-[#1a4e92]" />,
      value: "15,000+",
      label: "Students Placed",
    },
    {
      icon: <FaBuilding className="text-4xl text-[#1a4e92]" />,
      value: "500+",
      label: "Partner Companies",
    },
    {
      icon: <FaGlobeAsia className="text-4xl text-[#1a4e92]" />,
      value: "25+",
      label: "Countries",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#1a4e92]" />,
      value: "87%",
      label: "Success Rate",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f5f8fc] to-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a4e92] mb-4">
          IISD Placement Cell
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
          Connecting skilled professionals with global opportunities through
          industry partnerships, career guidance, and placement support.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-[#e8f0fb] p-4 rounded-full shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a4e92]">
                  {item.value}
                </h3>
                <p className="text-gray-700 font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
