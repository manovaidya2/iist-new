import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";

export default function MediumAdmin() {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null); // for modal

  // =======================
  // FETCH ALL FORMS
  // =======================
  const fetchForms = async () => {
    try {
      setLoading(true);
      const res = await api.get("/medium/all");
      setForms(res.data.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch forms");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Medium of Instruction - Admin
      </h1>

      {loading && <p className="text-center">Loading forms...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && forms.length === 0 && (
        <p className="text-center text-gray-700">No forms submitted yet.</p>
      )}

      {!loading && forms.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-blue-100">
              <tr>
                <th className="border p-2">Full Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Course</th>
                <th className="border p-2">Batch</th>
                <th className="border p-2">Purpose</th>
                <th className="border p-2">Submitted At</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((form) => (
                <tr key={form._id} className="hover:bg-gray-100">
                  <td className="border p-2">{form.fullName}</td>
                  <td className="border p-2">{form.email}</td>
                  <td className="border p-2">{form.courseName}</td>
                  <td className="border p-2">{form.batch}</td>
                  <td className="border p-2">{form.purpose}</td>
                  <td className="border p-2">{new Date(form.createdAt).toLocaleString()}</td>
                  <td className="border p-2">
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                      onClick={() => setSelectedForm(form)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ================== Modal ================== */}
      {selectedForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-3xl w-full relative overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold mb-4">{selectedForm.fullName} - Details</h2>

            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold"
              onClick={() => setSelectedForm(null)}
            >
              X
            </button>

            <div className="grid grid-cols-2 gap-4">
              <Detail label="Full Name" value={selectedForm.fullName} />
              <Detail label="Father Name" value={selectedForm.fatherName} />
              <Detail label="DOB" value={selectedForm.dob} />
              <Detail label="Gender" value={selectedForm.gender} />
              <Detail label="Mobile" value={selectedForm.mobile} />
              <Detail label="Email" value={selectedForm.email} />
              <Detail label="Aadhaar" value={selectedForm.aadhaar} />
              <Detail label="Address" value={selectedForm.address} />
              <Detail label="Course Name" value={selectedForm.courseName} />
              <Detail label="Semester" value={selectedForm.semester} />
              <Detail label="Enrollment" value={selectedForm.enrollment} />
              <Detail label="Batch" value={selectedForm.batch} />
              <Detail label="Admission Year" value={selectedForm.admissionYear} />
              <Detail label="Completion Year" value={selectedForm.completionYear} />
              <Detail label="Purpose" value={selectedForm.purpose} />
              <Detail label="Language" value={selectedForm.language} />
              <Detail label="Reason" value={selectedForm.reason} />
              <Detail label="Date" value={selectedForm.date} />
              <Detail label="Place" value={selectedForm.place} />
              <Detail label="Signature" value={selectedForm.signature} isFile />
              <Detail label="Photo" value={selectedForm.photo} isFile />
              <Detail label="ID Proof" value={selectedForm.idProof} isFile />
              <Detail label="Transcript" value={selectedForm.transcript} isFile />
              <Detail label="Fee Receipt" value={selectedForm.feeReceipt} isFile />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const Detail = ({ label, value, isFile }) => {
  if (!value) return null;

  return (
    <div className="mb-2">
      <span className="font-semibold">{label}: </span>
      {isFile ? (
        <a
          href={`https://api.iisd.io/uploads/${value}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View File
        </a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};
