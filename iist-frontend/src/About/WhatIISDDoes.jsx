import React from "react";
import { Layers, CheckCircle, FileCheck, Award } from "lucide-react";

export default function WhatIISDDoes() {
  const features = [
    {
      id: 1,
      icon: <Layers size={36} className="text-[#004a9f]" />,
      title: "Designs Programs",
      description:
        "Creates standardized skill-based programs aligned with international qualification frameworks.",
    },
    {
      id: 2,
      icon: <CheckCircle size={36} className="text-[#004a9f]" />,
      title: "Approves Institutions",
      description:
        "Grants academic association to qualified institutions for program delivery and compliance with IISD standards.",
    },
    {
      id: 3,
      icon: <FileCheck size={36} className="text-[#004a9f]" />,
      title: "Conducts Assessments",
      description:
        "Administers centralized examinations to ensure standardized evaluation and uniform academic outcomes.",
    },
    {
      id: 4,
      icon: <Award size={36} className="text-[#004a9f]" />,
      title: "Issues Certificates",
      description:
        "Provides internationally recognized certificates with secure digital verification and global acceptance.",
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-[#004a9f] mb-12 text-center"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          What IISD Does
        </h2>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group text-left"
            >
              {/* Icon */}
              <div className="mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#004a9f] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
