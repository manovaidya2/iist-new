import React, { useState } from "react";
import axios from "../api/axiosInstance";

export default function PlacementApplicationForm() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle text + file inputs
  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    setForm({
      ...form,
      [name]:
        type === "file"
          ? files[0]
          : type === "checkbox"
          ? checked
          : value,
    });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();

      // append all fields
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      const response = await axios.post(
        "/placement/submit",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMessage("Application submitted successfully!");
      setForm({});
      e.target.reset();

    } catch (error) {
      console.log("Error submitting form:", error);
      setMessage("Something went wrong! Try again.");
    } finally {
      setLoading(false);
    }
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

        {message && (
          <p
            className={`text-center mb-4 font-semibold ${
              message.includes("success")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* SECTION A */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 border-l-4 border-blue-600 pl-2 mb-6">
            A. Student Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "fullName", label: "Full Name" },
              { name: "guardianName", label: "Father’s / Guardian’s Name" },
              { name: "dob", label: "Date of Birth", type: "date" },
              { name: "gender", label: "Gender" },
              { name: "mobile", label: "Mobile Number" },
              { name: "email", label: "Email ID" },
              { name: "aadhaar", label: "Aadhaar Number" },
              { name: "address", label: "Address" },
            ].map((f) => (
              <div key={f.name} className="flex flex-col">
                <label className="text-gray-700 mb-1 font-medium">
                  {f.label}
                </label>
                <input
                  type={f.type || "text"}
                  name={f.name}
                  required
                  onChange={handleChange}
                  className="border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION B */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 border-l-4 border-blue-600 pl-2 mb-6">
            B. Academic & Course Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "courseName", label: "Course Name" },
              { name: "levelModule", label: "Level / Semester / Module" },
              { name: "enrollmentNumber", label: "Enrollment Number" },
              { name: "batchSession", label: "Batch / Session" },
              { name: "yearOfPassing", label: "Year of Passing" },
              { name: "academicPerformance", label: "Academic Performance" },
            ].map((f) => (
              <div key={f.name} className="flex flex-col">
                <label className="text-gray-700 mb-1 font-medium">
                  {f.label}
                </label>
                <input
                  type="text"
                  name={f.name}
                  required
                  onChange={handleChange}
                  className="border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION C */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 border-l-4 border-blue-600 pl-2 mb-6">
            C. Skills & Career Preferences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "technicalSkills", label: "Technical Skills" },
              { name: "softSkills", label: "Soft Skills" },
              { name: "preferredJobRole", label: "Preferred Job Role" },
              { name: "preferredIndustry", label: "Preferred Industry" },
              { name: "preferredLocation", label: "Preferred Location" },
              { name: "expectedSalary", label: "Expected Salary" },
              { name: "availability", label: "Availability (Joining Date)" },
            ].map((f) => (
              <div key={f.name} className="flex flex-col">
                <label className="text-gray-700 mb-1 font-medium">
                  {f.label}
                </label>
                <input
                  type="text"
                  name={f.name}
                  required
                  onChange={handleChange}
                  className="border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION D */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 border-l-4 border-blue-600 pl-2 mb-6">
            D. Work Experience (If Any)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "previousOrg", label: "Previous Organization" },
              { name: "role", label: "Role / Designation" },
              { name: "duration", label: "Duration" },
              { name: "responsibilities", label: "Responsibilities" },
              { name: "reasonForLeaving", label: "Reason for Leaving" },
            ].map((f) => (
              <div key={f.name} className="flex flex-col">
                <label className="text-gray-700 mb-1 font-medium">
                  {f.label}
                </label>
                <input
                  type="text"
                  name={f.name}
                  required
                  onChange={handleChange}
                  className="border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION E */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 border-l-4 border-blue-600 pl-2 mb-6">
            E. Documents to be Attached
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "resume", label: "Resume" },
              { name: "idProof", label: "ID Proof" },
              { name: "photo", label: "Passport Size Photo" },
              { name: "marksheets", label: "Marksheets" },
              { name: "experienceCertificates", label: "Experience Certificates" },
            ].map((f) => (
              <div
                key={f.name}
                className="border-dashed border-2 border-gray-300 rounded-xl p-6 text-center"
              >
                <label className="text-gray-600 cursor-pointer font-medium">
                  Upload {f.label}
                  <input
                    type="file"
                    name={f.name}
                    required
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION F */}
        <div className="mb-10 bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            F. Declaration by Student
          </h2>
          <p className="text-gray-700 leading-7 mb-4">
            I hereby declare that all the information provided above is true and
            correct to the best of my knowledge.
          </p>

          {/* Checkbox */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              name="agreeToDeclaration"
              required
              onChange={handleChange}
              className="w-5 h-5 mr-3"
            />
            <label className="text-gray-700 font-medium">
              I agree to the above declaration.
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Signature Upload */}
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1 font-medium">
                Upload Signature
              </label>
              <input
                type="file"
                name="signature"
                required
                onChange={handleChange}
                className="border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-1 font-medium">Date</label>
              <input
                type="date"
                name="declarationDate"
                required
                onChange={handleChange}
                className="border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-1 font-medium">Place</label>
              <input
                type="text"
                name="place"
                required
                onChange={handleChange}
                className="border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold px-10 py-3 rounded-xl shadow-lg transition-all`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
}
