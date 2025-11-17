// src/pages/OnDemandForms.jsx
import React, { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

export default function OnDemandForms() {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  const [selected, setSelected] = useState(null); // for detail modal

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("/demand-form/all");
      if (res?.data?.success) {
        setForms(res.data.data || []);
      } else {
        setForms(res.data || []);
      }
    } catch (err) {
      console.error("Fetch forms error:", err);
      setError(
        err.response?.data?.message || err.message || "Failed to fetch forms"
      );
    } finally {
      setLoading(false);
    }
  };

  const changeStatus = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      const res = await axios.put(`/demand-form/status/${id}`, {
        status: newStatus,
      });
      if (res?.data?.success) {
        setForms((prev) =>
          prev.map((f) =>
            f._id === id ? { ...f, status: res.data.data.status } : f
          )
        );
      }
    } catch (err) {
      console.error("Update status error:", err);
      alert(
        "Failed to update status: " +
          (err.response?.data?.message || err.message)
      );
    } finally {
      setUpdatingId(null);
    }
  };

  const handleOpenDetail = (form) => {
    setSelected(form);
  };

  const handleCloseDetail = () => setSelected(null);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">On-Demand Forms</h1>

        <button
          onClick={fetchForms}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-700"
        >
          Refresh
        </button>
      </div>

      {loading && <div className="text-sm text-gray-500">Loading forms...</div>}
      {error && (
        <div className="text-sm text-red-600 mb-4">Error: {error}</div>
      )}

      {!loading && forms.length === 0 && (
        <div className="text-gray-500">No forms found.</div>
      )}

      {/* TABLE */}
     <div className="overflow-x-auto mt-6 shadow-sm rounded-2xl border border-gray-200 bg-white">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-gray-50 text-left text-sm text-gray-700 border-b border-gray-200 sticky top-0 z-10">
        <th className="p-4">Photo</th>
        <th className="p-4">Name</th>
        <th className="p-4">Skill / Qualification</th>
        <th className="p-4">Status</th>
        <th className="p-4">Date</th>
        <th className="p-4 text-center">Actions</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {forms.map((f) => (
        <tr
          key={f._id}
          className="hover:bg-gray-50 transition-all duration-150"
        >
          {/* PHOTO */}
          <td className="p-4">
            <div className="w-14 h-14 bg-gray-100 rounded-xl overflow-hidden shadow-sm">
              {f.photo ? (
                <img
                  alt="photo"
                  src={
                    f.photo.startsWith("http")
                      ? f.photo
                      : `${
                          axios.defaults.baseURL?.replace(/\/api$/, "") || ""
                        }${f.photo.startsWith("/") ? "" : "/"}${f.photo}`
                  }
                  onError={(e) => (e.target.style.display = "none")}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 text-xs">
                  No Photo
                </div>
              )}
            </div>
          </td>

          {/* NAME */}
          <td className="p-4 text-gray-800 font-semibold">
            {f.studentName}
          </td>

          {/* SKILL */}
          <td className="p-4 text-sm text-gray-600">
            {f.skillName || f.qualification || "-"}
          </td>

          {/* STATUS */}
          <td className="p-4">
            <div className="flex items-center gap-2 text-sm">
              {f.status === "Approved" && (
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                  Approved
                </span>
              )}
              {f.status === "Rejected" && (
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-medium">
                  Rejected
                </span>
              )}
              {f.status === "Pending" && (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-xs font-medium">
                  Pending
                </span>
              )}
            </div>
          </td>

          {/* DATE */}
          <td className="p-4 text-sm text-gray-500">
            {new Date(f.createdAt).toLocaleDateString()}
          </td>

          {/* ACTIONS */}
          <td className="p-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => handleOpenDetail(f)}
                className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
              >
                View
              </button>

              <button
                disabled={updatingId === f._id}
                onClick={() => changeStatus(f._id, "Approved")}
                className="px-3 py-1.5 text-sm rounded-lg border border-green-600 text-green-700 hover:bg-green-50 transition disabled:opacity-50"
              >
                Approve
              </button>

              <button
                disabled={updatingId === f._id}
                onClick={() => changeStatus(f._id, "Rejected")}
                className="px-3 py-1.5 text-sm rounded-lg border border-red-600 text-red-700 hover:bg-red-50 transition disabled:opacity-50"
              >
                Reject
              </button>
              <button
  disabled={updatingId === f._id}
  onClick={async () => {
    if (window.confirm("Are you sure you want to delete this form?")) {
      setUpdatingId(f._id);
      try {
        const res = await axios.delete(`/demand-form/delete/${f._id}`);
        if (res.data.success) {
          setForms((prev) => prev.filter((form) => form._id !== f._id));
          alert("Form deleted successfully");
        } else {
          alert("Failed to delete form");
        }
      } catch (err) {
        console.error(err);
        alert("Error deleting form");
      } finally {
        setUpdatingId(null);
      }
    }
  }}
  className="px-3 py-1.5 text-sm rounded-lg border border-red-600 text-red-700 hover:bg-red-50 transition disabled:opacity-50"
>
  Delete
</button>

            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      {/* MODAL (same as your code) */}
{selected && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-6"
    style={{ backdropFilter: "blur(4px)", background: "rgba(0,0,0,0.45)" }}
    onClick={handleCloseDetail}
  >
    <div
      className="
        bg-white rounded-2xl w-full max-w-3xl 
        h-auto max-h-[90vh]  
        overflow-y-auto  
        p-6 relative shadow-xl
      "
      onClick={(e) => e.stopPropagation()}
    >

      {/* HEADER */}
      <div className="flex items-start justify-between pb-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">
          {selected.studentName}
        </h2>
        <button
          onClick={handleCloseDetail}
          className="text-gray-500 hover:text-gray-700 text-lg"
        >
          ✕
        </button>
      </div>

      {/* CONTENT */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* PERSONAL */}
        <div className="bg-gray-50 p-4 rounded-xl border">
          <h3 className="font-medium text-sm text-gray-600 mb-2">
            Personal Details
          </h3>
          <ul className="text-sm space-y-1 text-gray-700">
            <li><strong>Father:</strong> {selected.fatherName || "-"}</li>
            <li><strong>Mother:</strong> {selected.motherName || "-"}</li>
            <li><strong>Gender:</strong> {selected.gender || "-"}</li>
            <li><strong>DOB:</strong> {selected.dob || "-"}</li>
            <li><strong>Phone:</strong> {selected.phone || "-"}</li>
            <li><strong>Email:</strong> {selected.email || "-"}</li>
            <li><strong>Address:</strong> {selected.address || "-"}</li>
            <li><strong>Country:</strong> {selected.country || "-"}</li>
          </ul>
        </div>

        {/* EDUCATION / JOB */}
        <div className="bg-gray-50 p-4 rounded-xl border">
          <h3 className="font-medium text-sm text-gray-600 mb-2">
            Education / Job Details
          </h3>
          <ul className="text-sm space-y-1 text-gray-700">
            <li><strong>Qualification:</strong> {selected.qualification || "-"}</li>
            <li><strong>Skill interested:</strong> {selected.skillName || "-"}</li>
            <li><strong>Experience:</strong> {selected.experience || "-"}</li>
            <li><strong>Last job:</strong> {selected.lastJob || "-"}</li>
            <li><strong>Form date:</strong> {selected.date || "-"}</li>
          </ul>
        </div>

        {/* PHOTO */}
        <div className="md:col-span-2 bg-gray-50 p-4 rounded-xl border">
          <h3 className="font-medium text-sm text-gray-600">Photo</h3>
          <div className="mt-3">
            {selected.photo ? (
              <img
                alt="photo"
                className="w-48 h-48 object-cover rounded-xl border shadow-sm"
                src={
                  selected.photo.startsWith("http")
                    ? selected.photo
                    : `${
                        axios.defaults.baseURL?.replace(/\/api$/, "") || ""
                      }${selected.photo.startsWith("/") ? "" : "/"}${
                        selected.photo
                      }`
                }
                onError={(e) => (e.target.style.display = "none")}
              />
            ) : (
              <div className="w-48 h-48 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                No Photo
              </div>
            )}
          </div>
        </div>

        {/* SIGNATURE */}
        <div className="md:col-span-2 bg-gray-50 p-4 rounded-xl border">
          <h3 className="font-medium text-sm text-gray-600">Signature</h3>
          <div className="mt-3">
            {selected.signature ? (
              <div className="p-4 bg-white rounded-xl shadow-sm inline-block border">
                <img
                  alt="signature"
                  src={
                    selected.signature.startsWith("data:")
                      ? selected.signature
                      : `data:image/png;base64,${selected.signature}`
                  }
                  className="max-h-36"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
            ) : (
              <div className="text-gray-400">No signature provided</div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-8 flex items-center justify-end gap-3">

        <select
          value={selected.status}
          onChange={(e) => {
            changeStatus(selected._id, e.target.value);
            setSelected((s) => ({ ...s, status: e.target.value }));
          }}
          className="px-3 py-2 border rounded-lg bg-white shadow-sm"
        >
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>

        <button
          onClick={() => {
            if (selected.photo) {
              const url = selected.photo.startsWith("http")
                ? selected.photo
                : `${
                    axios.defaults.baseURL?.replace(/\/api$/, "") || ""
                  }${selected.photo.startsWith("/") ? "" : "/"}${
                    selected.photo
                  }`;
              window.open(url, "_blank");
            } else {
              alert("No photo available.");
            }
          }}
          className="px-4 py-2 bg-slate-700 text-white rounded-xl shadow-sm hover:bg-slate-800 transition"
        >
          Open Photo
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
