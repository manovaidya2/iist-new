// src/pages/StudentProgramList.jsx
import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function StudentProgramList() {
  const [programs, setPrograms] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const res = await axiosInstance.get("/student-programs");
      setPrograms(res.data);
    } catch (error) {
      console.error("❌ Error fetching programs:", error);
    }
  };

  return (
    <section className="max-w-7xl mx-auto p-8 mt-10 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-[#1a4e92] mb-8 text-center">
        Student Programs
      </h1>

      {/* 📋 Table View */}
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead className="bg-[#1a4e92] text-white">
          <tr>
            <th className="border p-3">#</th>
            <th className="border p-3 text-left">Title</th>
            <th className="border p-3">Created</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((p, i) => (
            <tr key={p._id} className="hover:bg-gray-50 transition">
              <td className="border p-3 text-center">{i + 1}</td>
              <td
                className="border p-3 text-[#1a4e92] font-semibold cursor-pointer"
                onClick={() => setSelected(p)}
              >
                {p.title}
              </td>
              <td className="border p-3 text-center">
                {new Date(p.createdAt).toLocaleDateString()}
              </td>
              <td className="border p-3 text-center">
                <button
                  onClick={() => setSelected(p)}
                  className="text-sm bg-[#1a4e92] text-white px-4 py-1 rounded-md hover:bg-[#163d75]"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🧾 Details Section */}
      {selected && (
        <div className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-bold text-[#1a4e92] mb-4">
            {selected.title}
          </h2>

          {selected.image && (
  <div className="flex justify-center mb-6">
    <img
      src={`https://api.iisd.io/uploads/images/${selected.image}`}
      alt="Program"
      className="w-48 h-32 object-cover rounded-xl"
    />
  </div>
)}


          <div
            className="prose max-w-none mb-6"
            dangerouslySetInnerHTML={{ __html: selected.about }}
          />

          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Industry Scope:
          </h3>
          <ul className="list-disc list-inside mb-4">
            {selected.industryFields.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Qualification Levels:
          </h3>
          <ul className="mb-4">
            {selected.qualificationLevels.map((q, i) => (
              <li key={i}>
                <strong>{q.level}</strong> — {q.duration} — {q.title}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Program List:
          </h3>
          <ul className="mb-4">
            {selected.programList.map((p, i) => (
              <li key={i}>
                <strong>{p.program}</strong> — {p.level} — {p.duration}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Brochures:
          </h3>
          <ul>
            {selected.brochures.map((b, i) => (
              <li key={i}>
                <a
                  href={`https://api.iisd.io/uploads/brochures/${b}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a4e92] underline"
                >
                  {b}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <button
              onClick={() => setSelected(null)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
