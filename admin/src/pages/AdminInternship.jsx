import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";

const AdminInternship = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  const fetchForms = async () => {
    try {
      const res = await api.get("/internship/all");
      setForms(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  if (loading) return <p className="p-6 text-lg font-semibold">Loading...</p>;
return (
  <div className="p-6 bg-gray-50 min-h-screen">

    <h2 className="text-3xl font-bold mb-6 text-gray-800 tracking-wide">
      Internship Applications
    </h2>

    {/* Premium Table */}
    <div className="overflow-x-auto rounded-2xl shadow-lg border bg-white">
      <table className="w-full text-left border-collapse">
        <thead className="bg-blue-600 text-white sticky top-0 z-20 shadow">
          <tr>
            <th className="p-4 border-r">#</th>
            <th className="p-4 border-r">Student</th>
            <th className="p-4 border-r">Course</th>
            <th className="p-4 border-r">Mobile</th>
            <th className="p-4 border-r">Email</th>
            <th className="p-4 border-r">Submitted</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {forms.map((form, index) => (
            <tr
              key={form._id}
              className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition-all duration-200 border-b"
            >
              <td className="p-4">{index + 1}</td>

              <td className="p-4">
                <p className="font-semibold">{form.fullName}</p>
                <p className="text-xs text-gray-500">
                  {form.gender}, DOB: {form.dob}
                </p>
              </td>

              <td className="p-4">
                <p className="font-semibold">{form.courseName}</p>
                <p className="text-xs text-gray-500">
                  Level: {form.levelModule}
                </p>
              </td>

              <td className="p-4">{form.mobile}</td>
              <td className="p-4">{form.email}</td>

              <td className="p-4 text-sm">
                {new Date(form.createdAt).toLocaleString()}
              </td>

              <td className="p-4">
                <button
                  onClick={() => setSelected(form)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Modal */}
    {selected && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
        onClick={() => setSelected(null)}
      >
        <div
          className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-8 relative animate-[slideUp_0.3s_ease]
                     max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-3 right-4 text-3xl text-gray-600 hover:text-black"
          >
            ×
          </button>

          <h2 className="text-2xl font-bold mb-5 text-gray-800">
            Internship Application Details
          </h2>

          <div className="space-y-6 pb-6">

            {/* Student Section */}
            <div className="bg-gray-50 p-5 rounded-xl shadow-inner">
              <h3 className="text-xl font-semibold mb-2">A. Student Details</h3>
              <div className="grid grid-cols-2 gap-3 text-gray-700">
                <p><b>Name:</b> {selected.fullName}</p>
                <p><b>Guardian:</b> {selected.guardianName}</p>
                <p><b>DOB:</b> {selected.dob}</p>
                <p><b>Gender:</b> {selected.gender}</p>
                <p><b>Mobile:</b> {selected.mobile}</p>
                <p><b>Email:</b> {selected.email}</p>
                <p><b>Aadhaar:</b> {selected.aadhaar}</p>
                <p className="col-span-2"><b>Address:</b> {selected.address}</p>
              </div>
            </div>

            {/* Academic Section */}
            <div className="bg-gray-50 p-5 rounded-xl shadow-inner">
              <h3 className="text-xl font-semibold mb-2">B. Academic Details</h3>
              <div className="grid grid-cols-2 gap-3 text-gray-700">
                <p><b>Course:</b> {selected.courseName}</p>
                <p><b>Level:</b> {selected.levelModule}</p>
                <p><b>Enrollment No:</b> {selected.enrollmentNumber}</p>
                <p><b>Batch:</b> {selected.batchSession}</p>
                <p><b>Status:</b> {selected.currentStatus}</p>
              </div>
            </div>

            {/* Training Section */}
            <div className="bg-gray-50 p-5 rounded-xl shadow-inner">
              <h3 className="text-xl font-semibold mb-2">C. Training Preferences</h3>
              <div className="grid grid-cols-2 gap-3 text-gray-700">
                <p><b>Sector:</b> {selected.preferredSector}</p>
                <p><b>Location:</b> {selected.preferredLocation}</p>
                <p><b>Duration:</b> {selected.trainingDuration}</p>
                <p><b>Mode:</b> {selected.mode}</p>
                <p><b>Type:</b> {selected.type}</p>
                <p className="col-span-2"><b>Experience:</b> {selected.experience}</p>
                <p className="col-span-2"><b>Details:</b> {selected.experienceDetails}</p>
              </div>
            </div>

            {/* Files */}
            <div className="bg-gray-50 p-5 rounded-xl shadow-inner">
              <h3 className="text-xl font-semibold mb-3">Uploaded Files</h3>

              <div className="space-y-3">
                {selected.idProof && (
                  <a
                    href={`https://api.iisd.io/${selected.idProof}`}
                    target="_blank"
                    className="block text-blue-600 hover:text-blue-800 underline"
                  >
                    📄 ID Proof
                  </a>
                )}

                {selected.photo && (
                  <a
                    href={`https://api.iisd.io/${selected.photo}`}
                    target="_blank"
                    className="block text-blue-600 hover:text-blue-800 underline"
                  >
                    🖼 Photo
                  </a>
                )}

                {selected.resume && (
                  <a
                    href={`https://api.iisd.io/${selected.resume}`}
                    target="_blank"
                    className="block text-blue-600 hover:text-blue-800 underline"
                  >
                    📑 Resume
                  </a>
                )}

                {selected.marksheets?.map((m, i) => (
                  <a
                    key={i}
                    href={`https://api.iisd.io/${m}`}
                    target="_blank"
                    className="block text-blue-600 hover:text-blue-800 underline"
                  >
                    📘 Marksheet {i + 1}
                  </a>
                ))}

                {selected.consent && (
                  <a
                    href={`https://api.iisd.io/${selected.consent}`}
                    target="_blank"
                    className="block text-blue-600 hover:text-blue-800 underline"
                  >
                    📝 Consent
                  </a>
                )}

                {selected.signature && (
                  <a
                    href={`https://api.iisd.io/${selected.signature}`}
                    target="_blank"
                    className="block text-blue-600 hover:text-blue-800 underline"
                  >
                    ✍️ Signature
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    )}
  </div>
);

};

export default AdminInternship;
