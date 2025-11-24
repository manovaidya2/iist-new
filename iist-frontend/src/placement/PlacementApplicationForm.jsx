import React, { useState } from "react";

export default function PlacementApplicationForm() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8 border border-blue-100"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          IISD – Placement Application Form
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Fill out the details carefully to apply for IISD placement assistance.
        </p>

        {/* Section A */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 border-l-4 border-blue-600 pl-2 mb-6">
            A. Student Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "fullName",
              "guardianName",
              "dob",
              "gender",
              "mobile",
              "email",
              "aadhaar",
              "address",
            ].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                onChange={handleChange}
                placeholder={field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                className="border rounded-xl px-4 py-3 w-full shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
            ))}
          </div>
        </div>

        {/* Section B */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 border-l-4 border-blue-600 pl-2 mb-6">
            B. Academic & Course Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "courseName",
              "levelModule",
              "enrollmentNumber",
              "batchSession",
              "yearOfPassing",
              "academicPerformance",
            ].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                onChange={handleChange}
                placeholder={field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                className="border rounded-xl px-4 py-3 w-full shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
            ))}
          </div>
        </div>

        {/* Section C */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 border-l-4 border-blue-600 pl-2 mb-6">
            C. Skills & Career Preferences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "technicalSkills",
              "softSkills",
              "preferredJobRole",
              "preferredIndustry",
              "preferredLocation",
              "expectedSalary",
              "availability",
            ].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                onChange={handleChange}
                placeholder={field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                className="border rounded-xl px-4 py-3 w-full shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
            ))}
          </div>
        </div>

        {/* Section D */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 border-l-4 border-blue-600 pl-2 mb-6">
            D. Work Experience (if any)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "previousOrg",
              "role",
              "duration",
              "responsibilities",
              "reasonForLeaving",
            ].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                onChange={handleChange}
                placeholder={field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                className="border rounded-xl px-4 py-3 w-full shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
            ))}
          </div>
        </div>

        {/* Section E */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 border-l-4 border-blue-600 pl-2 mb-6">
            E. Documents to be Attached
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "resume",
              "idProof",
              "photo",
              "marksheets",
              "experienceCertificates",
            ].map((field) => (
              <div key={field} className="border-dashed border-2 border-gray-300 rounded-xl p-6 text-center">
                <label className="text-gray-600 cursor-pointer">
                  Upload {field
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  <input
                    type="file"
                    name={field}
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Declaration */}
        <div className="mb-10 bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            F. Declaration by Student
          </h2>
          <p className="text-gray-700 leading-7 mb-4">
            I hereby declare that all the information provided above is true and
            correct to the best of my knowledge. I voluntarily apply to the IISD
            Placement Cell and agree to follow all guidelines, schedules,
            training sessions, and placement protocols issued by IISD.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["signature", "declarationDate", "place"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                onChange={handleChange}
                placeholder={field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                className="border rounded-xl px-4 py-3 w-full shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-xl shadow-lg transition-all"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
