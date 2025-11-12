import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { FaCertificate, FaListAlt, FaClock, FaGraduationCap } from "react-icons/fa";

export default function QualificationPrograms() {
  const { id } = useParams(); // 👈 Get program ID from URL
  const [programData, setProgramData] = useState(null);

  // Fetch single student program
  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const res = await axiosInstance.get(`/student-programs/${id}`);
        setProgramData(res.data);
      } catch (error) {
        console.error("Error fetching student program:", error);
      }
    };
    fetchProgram();
  }, [id]);

  if (!programData) {
    return (
      <div className="text-center py-20 text-gray-600 text-lg">Loading...</div>
    );
  }

  return (
    <section className="bg-[#f9fafc] py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Title Section */}
        <h1 className="text-4xl font-extrabold text-center text-[#1a4e92] mb-8">
          {programData.title}
        </h1>

        {/* Qualification Levels Offered */}
        {programData.qualificationLevels?.length > 0 && (
          <div className="bg-white rounded-3xl shadow-md p-8 md:p-10 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FaCertificate className="text-[#1a4e92] text-3xl" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a4e92]">
                Qualification Levels Offered
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a4e92] text-white">
                    <th className="py-3 px-5 rounded-l-lg font-semibold">Level</th>
                    <th className="py-3 px-5 font-semibold">Duration</th>
                    <th className="py-3 px-5 rounded-r-lg font-semibold">Title</th>
                  </tr>
                </thead>
                <tbody>
                  {programData.qualificationLevels.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-blue-50 transition"
                    >
                      <td className="py-3 px-5 font-medium text-gray-800">{item.level}</td>
                      <td className="py-3 px-5 text-gray-700 flex items-center gap-2">
                        <FaClock className="text-[#1a4e92]" /> {item.duration}
                      </td>
                      <td className="py-3 px-5 text-gray-700">{item.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Program List */}
        {programData.programList?.length > 0 && (
          <div className="bg-white rounded-3xl shadow-md p-8 md:p-10 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FaListAlt className="text-[#1a4e92] text-3xl" />
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a4e92]">
                Program List
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a4e92] text-white">
                    <th className="py-3 px-5 rounded-l-lg font-semibold">Program Name</th>
                    <th className="py-3 px-5 font-semibold">Level</th>
                    <th className="py-3 px-5 rounded-r-lg font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {programData.programList.map((program, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-blue-50 transition"
                    >
                      <td className="py-3 px-5 flex items-center gap-2 text-gray-800 font-medium">
                        <FaGraduationCap className="text-[#1a4e92]" />
                        {program.program}
                      </td>
                      <td className="py-3 px-5 text-gray-700">{program.level}</td>
                      <td className="py-3 px-5 text-gray-700">{program.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
