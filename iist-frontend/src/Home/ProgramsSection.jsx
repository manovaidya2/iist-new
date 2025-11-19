import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

export default function ProgramsSection() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await axiosInstance.get("/student-programs"); // backend endpoint
        setPrograms(res.data);
      } catch (error) {
        console.error("❌ Error fetching programs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  if (loading) return <div className="text-center py-20 text-gray-700">Loading programs...</div>;
  if (!programs.length) return <div className="text-center py-20 text-gray-500">No programs available.</div>;

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            World-Class Skill Development Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of internationally recognized certification programs designed for global careers
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.slice(0, 8).map((program) => (
            <div
              key={program._id}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow text-left"
            >
              {/* Image instead of icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-200 mb-4 overflow-hidden">
                {program.image ? (
                  <img
                    src={`https://api.iisd.io/uploads/images/${program.image}`}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    N/A
                  </div>
                )}
              </div>

  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
  {program.title}
</h3>


              <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                {program.about}
              </p>

              <Link
                to={`/school-details/${program._id}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <Link
            to="/school"
            className="px-6 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition"
          >
            View All Programs →
          </Link>
        </div>
      </div>
    </section>
  );
}
