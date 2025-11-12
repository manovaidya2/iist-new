import React, { useState } from "react";

export default function SelectExamDate() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedExam, setSelectedExam] = useState(null);

  const exams = [
    { id: 1, title: "Exam 1", duration: "2 Hours" },
    { id: 2, title: "Exam 2", duration: "2 Hours" },
    { id: 3, title: "Exam 3", duration: "2 Hours" },
    { id: 4, title: "Exam 4", duration: "2 Hours" },
  ];

  const handleSelectExam = (id) => {
    setSelectedExam(id);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-5xl">
        {/* Course Selection */}
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          Select Course
        </h2>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="w-full max-w-md border border-gray-300 rounded-md p-3 text-gray-700 text-base focus:outline-none focus:ring-0 focus:border-gray-300 shadow-sm"
        >
          <option value="">Select Course</option>
          <option value="course1">Course 1</option>
          <option value="course2">Course 2</option>
          <option value="course3">Course 3</option>
        </select>

        {/* Examination Table */}
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
          Select Examination Date
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left text-base text-gray-800">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2 w-16 text-center">
                  S. No.
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Exam Title
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Exam Date
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Exam Duration
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam, index) => (
                <tr key={exam.id} className="text-base">
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {exam.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="date"
                      placeholder="dd-----yyyy"
                      className="w-full border border-gray-300 rounded-md p-2 text-base focus:outline-none focus:ring-0 focus:border-gray-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {exam.duration}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleSelectExam(exam.id)}
                      className={`${
                        selectedExam === exam.id
                          ? "bg-yellow-500"
                          : "bg-[#ffc107]"
                      } text-white font-semibold px-5 py-2 rounded-md hover:bg-yellow-500`}
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-[#ffc107] hover:bg-yellow-500 text-white font-semibold py-2 px-8 rounded-md text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
