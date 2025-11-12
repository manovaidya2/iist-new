import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaDownload, FaCertificate, FaCalendarAlt } from "react-icons/fa";

export default function StudentResult({ studentData }) {
  const resultRef = useRef();

  // ✅ PDF Download Function (unchanged)
  const handleDownloadPDF = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/students/download/${id}`, {
        method: "GET",
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Result.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error("Error downloading PDF", err);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 mb-10 w-full px-3 sm:px-6">
      <div
        ref={resultRef}
        className="bg-white shadow-2xl border border-gray-300 rounded-2xl w-full max-w-4xl overflow-hidden"
      >
        {/* Top Gradient Header */}
        <div className="bg-[#1a4e92] text-white text-center py-4 px-4 shadow-md">
          <h2 className="font-bold text-lg sm:text-2xl tracking-wide">ONLINE RESULT</h2>
          <p className="text-xs sm:text-sm mt-1 opacity-90">
            Range of programs and research opportunities across multiple campuses.
          </p>
        </div>

        {/* Main Content */}
        <div className="p-4 sm:p-8 md:p-10">
          {/* Course Title */}
          <h3 className="text-center font-semibold text-lg sm:text-2xl text-gray-800 mb-6 sm:mb-8">
            {studentData.result.course} - SEMESTER
          </h3>

          {/* Student Info */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-blue-100 rounded-xl p-5 mb-8 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm sm:text-base text-gray-700">
              <p><strong>Name:</strong> {studentData.result.name}</p>
              <p><strong>Roll No:</strong> {studentData.result.rollNo}</p>
              <p><strong>Father's Name:</strong> {studentData.result.fatherName}</p>
              <p><strong>Enrollment No:</strong> {studentData.result.enrollmentNo}</p>
              <p><strong>Sr. No:</strong> {studentData.result.srNo}</p>
              <p><strong>Session:</strong> {studentData.result.session}</p>
            </div>
          </div>

          {/* Subjects Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs sm:text-sm mb-6 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-100 text-gray-900">
                  <th className="border px-2 py-2">S. No.</th>
                  <th className="border px-2 py-2">Subject</th>
                  <th className="border px-2 py-2">Full Marks</th>
                  <th className="border px-2 py-2">Passing Marks</th>
                  <th className="border px-2 py-2">Marks Obtained</th>
                </tr>
              </thead>
              <tbody>
                {studentData.result.subjects.map((s, i) => (
                  <tr
                    key={i}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition`}
                  >
                    <td className="border px-2 py-2 text-center font-medium">{s.sno}</td>
                    <td className="border px-2 py-2">{s.name}</td>
                    <td className="border px-2 py-2 text-center">{s.full}</td>
                    <td className="border px-2 py-2 text-center">{s.pass}</td>
                    <td className="border px-2 py-2 text-center font-semibold text-blue-800">
                      {s.obtained}
                    </td>
                  </tr>
                ))}
                <tr className="font-bold bg-blue-50 border-t-2 border-blue-300">
                  <td colSpan={2} className="border px-2 py-2 text-center">
                    Total
                  </td>
                  <td className="border px-2 py-2 text-center">
                    {studentData.result.totalFull}
                  </td>
                  <td className="border px-2 py-2 text-center">
                    {studentData.result.totalPass}
                  </td>
                  <td className="border px-2 py-2 text-center text-blue-800">
                    {studentData.result.totalObt}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Result Status */}
          <div className="flex flex-wrap justify-end gap-3 mb-8">
            <div className="bg-gradient-to-r from-red-100 to-red-200 text-red-700 px-5 py-2 rounded-full font-semibold text-sm shadow">
              RESULT
            </div>
            <div className="bg-[#1a4e92] text-white px-6 py-2 rounded-full font-semibold text-sm shadow">
              {studentData.result.status}
            </div>
          </div>

          {/* Remarks */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-sm font-semibold text-gray-700 mb-6">
            <p>Percentage: {studentData.result.percentage}</p>
            <p>Result: {studentData.result.status}</p>
            <p>Grade: {studentData.result.grade}</p>
          </div>

          {/* Notes */}
          <div className="text-xs sm:text-sm text-gray-600 space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-inner">
            <p>
              <strong>Grade System:</strong> A++: 85%+, A+: 75–84%, A: 60–74%, B: 50–59%, 
              C: 40–49%, D: Below 40%.
            </p>
            <p>
              <strong>Note:</strong> Delhi University will not be held accountable for any
              errors in marks. The original grade report will be the final one.
            </p>
            <p>
              For immediate assistance, please contact:{" "}
              <a
                href="mailto:digital@dgu.ac.in"
                className="text-blue-700 underline"
              >
                digital@dgu.ac.in
              </a>{" "}
              or{" "}
              <a
                href="mailto:dguniversityofficial@gmail.com"
                className="text-blue-700 underline"
              >
                dguniversityofficial@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <button
          onClick={() => handleDownloadPDF(studentData._id)}
          className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 shadow-md transition-all text-sm sm:text-base"
        >
          <FaDownload className="text-white" /> Download Result
        </button>

        <button
          className="flex items-center gap-2 px-6 py-2 bg-[#1a4e92] text-white font-semibold rounded-lg hover:bg-indigo-700 shadow-md transition-all text-sm sm:text-base"
        >
          <FaCertificate className="text-white" /> Download Certificate
        </button>
      </div>

      {/* Result Declaration Schedule */}
      <div className="mt-10 w-full max-w-4xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6 sm:p-8 shadow-sm text-left">
        <div className="flex items-center gap-2 mb-3">
          <FaCalendarAlt className="text-blue-700 text-xl" />
          <h4 className="text-lg sm:text-xl font-semibold text-blue-800">
            Result Declaration Schedule
          </h4>
        </div>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Results are typically declared within <strong>30 days</strong> of examination
          completion.
        </p>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          For queries, contact:{" "}
          <a
            href="mailto:results@iisdglobal.org"
            className="text-blue-800 underline font-medium"
          >
            results@iisdglobal.org
          </a>
        </p>
      </div>
    </div>
  );
}
