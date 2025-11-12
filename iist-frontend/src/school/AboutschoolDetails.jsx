import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import axiosInstance from "../api/axiosInstance";

export default function AboutschoolDetails() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const res = await axiosInstance.get(`/student-programs/${id}`);
        setProgram(res.data);
      } catch (error) {
        console.error("Error fetching program details:", error);
      }
    };
    fetchProgram();
  }, [id]);

  if (!program) {
    return <p className="text-center py-20 text-gray-500">Loading...</p>;
  }

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* About the Field */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a4e92] mb-4">
              About the Field
            </h2>
            <p
              className="text-gray-700 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: program.about }}
            />
          </div>

          {/* 🔹 Stylish Static Illustration Card */}
          <div className="relative flex justify-center">
            <div className="relative w-[400px] h-[280px] md:w-[500px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl bg-[#1a4e92] flex items-center justify-center">
              {/* Abstract shape background */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

              {/* Illustration Icon / SVG */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/906/906175.png"
                alt="Education Illustration"
                className="w-32 md:w-44 opacity-90 z-10 animate-float"
              />

              {/* Gradient Glow Circle */}
              <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            {/* Title Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-[#1a4e92] text-white px-6 py-3 rounded-lg shadow-lg font-semibold text-sm md:text-base">
              {program.title}
            </div>
          </div>
        </div>

        {/* Industry Scope & Future */}
        {program.industryFields && program.industryFields.length > 0 && (
          <div className="bg-[#f9fafc] rounded-3xl shadow-sm p-8 md:p-10 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a4e92] mb-6">
              Industry Scope & Future
            </h3>

            <ul className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {program.industryFields.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-800 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition"
                >
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                  <span className="text-[15px] leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
