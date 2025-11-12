import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

export default function SchoolsSection() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await axiosInstance.get("/student-programs");
        setPrograms(res.data);
      } catch (error) {
        console.error("❌ Error fetching programs:", error);
      }
    };
    fetchPrograms();
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our Schools & Programs
        </h2>

        {/* 🔹 Dynamic school cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {programs.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No programs available yet.
            </p>
          ) : (
            programs.map((program) => (
              <div
                key={program._id}
                className="bg-white border border-gray-200 p-6 flex flex-col items-start gap-4 hover:shadow-xl transition rounded-xl"
              >
                {/* 🖼️ Image instead of icon */}
                <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={`http://localhost:5000/uploads/images/${program.image}`}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 📘 Program Title */}
                <h3 className="font-semibold text-xl md:text-2xl text-gray-900 mb-2 line-clamp-2">
  {program.title}
</h3>


               

                {/* 🔗 View Program Button */}
                <Link
                  to={`/school-details/${program._id}`}
                  className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-yellow-400 transition w-full text-center font-medium"
                >
                  View Program
                </Link>
              </div>
            ))
          )}
        </div>

        {/* 🔹 Bottom Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <Link
            to="/admission-form"
            className="bg-[#1a4e92] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Student Admission Form
          </Link>
          <Link
            to="/certificate-verification"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Certificate Verification
          </Link>
        </div>
      </div>
    </section>
  );
}
