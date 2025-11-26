import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function PlacementFormsAdmin() {
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);

  // Fetch all forms
  const getForms = async () => {
    try {
      const res = await axiosInstance.get("/placement/all");
      setForms(res.data.data);
    } catch (error) {
      console.error("Error fetching forms:", error);
    }
  };

  useEffect(() => {
    getForms();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Placement Applications (Admin Panel)
      </h1>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-lg p-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3">Name</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Email</th>
              <th className="p-3">Course</th>
              <th className="p-3">View</th>
            </tr>
          </thead>

          <tbody>
            {forms.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{item.fullName}</td>
                <td className="p-3">{item.mobile}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.courseName}</td>

                <td className="p-3 text-center">
                  <button
                    onClick={() => setSelectedForm(item)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* VIEW DETAILS MODAL */}
      {selectedForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]">


          <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">

            <h2 className="text-2xl font-bold mb-4 text-blue-700">
              Placement Application Details
            </h2>

            {/* Close Button */}
            <button
              onClick={() => setSelectedForm(null)}
              className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md"
            >
              Close
            </button>

            <div className="space-y-4">

              {/* SECTION A */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">A. Personal Details</h3>
                <p><b>Full Name:</b> {selectedForm.fullName}</p>
                <p><b>Guardian Name:</b> {selectedForm.guardianName}</p>
                <p><b>DOB:</b> {selectedForm.dob}</p>
                <p><b>Gender:</b> {selectedForm.gender}</p>
                <p><b>Mobile:</b> {selectedForm.mobile}</p>
                <p><b>Email:</b> {selectedForm.email}</p>
                <p><b>Aadhaar:</b> {selectedForm.aadhaar}</p>
                <p><b>Address:</b> {selectedForm.address}</p>
              </div>

              {/* SECTION B */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">B. Academic Details</h3>
                <p><b>Course:</b> {selectedForm.courseName}</p>
                <p><b>Level/Module:</b> {selectedForm.levelModule}</p>
                <p><b>Enrollment:</b> {selectedForm.enrollmentNumber}</p>
                <p><b>Batch:</b> {selectedForm.batchSession}</p>
                <p><b>Year of Passing:</b> {selectedForm.yearOfPassing}</p>
                <p><b>Performance:</b> {selectedForm.academicPerformance}</p>
              </div>

              {/* SECTION C */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">C. Job Preferences</h3>
                <p><b>Technical Skills:</b> {selectedForm.technicalSkills}</p>
                <p><b>Soft Skills:</b> {selectedForm.softSkills}</p>
                <p><b>Job Role:</b> {selectedForm.preferredJobRole}</p>
                <p><b>Industry:</b> {selectedForm.preferredIndustry}</p>
                <p><b>Location:</b> {selectedForm.preferredLocation}</p>
                <p><b>Expected Salary:</b> {selectedForm.expectedSalary}</p>
                <p><b>Availability:</b> {selectedForm.availability}</p>
              </div>

              {/* SECTION D */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">D. Work Experience</h3>
                <p><b>Previous Org:</b> {selectedForm.previousOrg}</p>
                <p><b>Role:</b> {selectedForm.role}</p>
                <p><b>Duration:</b> {selectedForm.duration}</p>
                <p><b>Responsibilities:</b> {selectedForm.responsibilities}</p>
                <p><b>Reason for Leaving:</b> {selectedForm.reasonForLeaving}</p>
              </div>

              {/* SECTION E – FILES */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">E. Uploaded Files</h3>

                {["resume", "idProof", "photo", "marksheets", "experienceCertificates", "signature"]
                  .map((f) => (
                    selectedForm[f] && (
                      <p key={f}>
                        <b>{f}:</b>{" "}
                       <a
  href={`https://api.iisd.io/${selectedForm[f]
    .replace(/\\/g, "/")
    .replace("backend/", "")}`}
  target="_blank"
  rel="noreferrer"
  className="text-blue-600 underline"
>
  View / Download
</a>

                      </p>
                    )
                  ))}
              </div>

              {/* SECTION F */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700">F. Declaration</h3>
                <p><b>Date:</b> {selectedForm.declarationDate}</p>
                <p><b>Place:</b> {selectedForm.place}</p>
                <p><b>Agreed:</b> {selectedForm.agreeToDeclaration ? "Yes" : "No"}</p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
