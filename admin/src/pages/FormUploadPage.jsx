import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const formList = [
  "Student Admission Form",
  "Exam Form",
  "Self Declaration",
  "Certificate Reissue Form",
  "Internship Form",
  "Instruction Form",
];

export default function FormUploadPage() {
  const [selectedForm, setSelectedForm] = useState("");
  const [pdf, setPdf] = useState(null);
  const [message, setMessage] = useState("");
  const [uploadedForms, setUploadedForms] = useState([]);

  // ✅ Fetch uploaded forms on page load
const fetchUploadedForms = async () => {
  try {
    const res = await axiosInstance.get("/forms");
    const forms = res.data.data || [];

    // Sort by createdAt ascending → oldest first
    forms.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    setUploadedForms(forms);
  } catch (err) {
    console.error("Error fetching uploaded forms:", err);
  }
};

  useEffect(() => {
    fetchUploadedForms();
  }, []);

  // ✅ Handle Upload
  const handleUpload = async () => {
    if (!selectedForm || !pdf) {
      setMessage("Please select a form and upload PDF.");
      return;
    }

    const fd = new FormData();
    fd.append("formName", selectedForm);
    fd.append("pdf", pdf);

    try {
      await axiosInstance.post("/forms/upload", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Uploaded successfully!");
      setSelectedForm("");
      setPdf(null);

      // Refresh table after upload
      fetchUploadedForms();
    } catch (err) {
      console.log(err);
      setMessage("Upload failed!");
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Form PDF Upload Manager</h1>

      {/* Upload Form */}
      <div className="mb-6">
        <div className="mb-4">
          <label className="block font-semibold mb-2">Select Form</label>
          <select
            className="w-full p-3 border rounded bg-gray-100"
            value={selectedForm}
            onChange={(e) => setSelectedForm(e.target.value)}
          >
            <option value="">-- Choose Form --</option>
            {formList.map((form, index) => (
              <option key={index} value={form}>
                {form}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Upload PDF</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setPdf(e.target.files[0])}
            className="w-full"
          />
        </div>

        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Upload PDF
        </button>

        {message && <p className="mt-4 font-semibold">{message}</p>}
      </div>

      {/* Uploaded Forms Table */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Uploaded PDFs</h2>
        {uploadedForms.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">#</th>
                  <th className="border px-4 py-2">Form Name</th>
                  <th className="border px-4 py-2">File Name</th>
                  <th className="border px-4 py-2">Download</th>
                </tr>
              </thead>
              <tbody>
                {uploadedForms.map((form, index) => (
                  <tr key={form._id} className="text-center">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{form.formName}</td>
                    <td className="border px-4 py-2">{form.pdfFile}</td>
                   <td className="border px-4 py-2">
  <a
    href={`https://api.iisd.io/uploads/forms/${form.pdfFile}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    Download
  </a>
</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No forms uploaded yet.</p>
        )}
      </div>
    </div>
  );
}
