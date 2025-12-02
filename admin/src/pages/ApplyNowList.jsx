import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function ApplyNowList() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch All Applications
  const fetchApplications = () => {
    axiosInstance
      .get("/apply-now")
      .then((res) => {
        setApplications(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching applications:", err);
        setError("Failed to load data.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // Delete Handler
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) return;

    try {
      await axiosInstance.delete(`/apply-now/${id}`);
      setApplications(applications.filter((app) => app._id !== id));
      alert("Application deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#004a9f] mb-6">Applications List</h1>

      {loading && <p className="text-center text-gray-600 text-lg">Loading...</p>}
      {error && <p className="text-center text-red-600 text-lg">{error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">#</th>
                <th className="border px-3 py-2">Name</th>
                <th className="border px-3 py-2">Email</th>
                <th className="border px-3 py-2">Phone</th>
                <th className="border px-3 py-2">Program</th>
                <th className="border px-3 py-2">Message</th>
                <th className="border px-3 py-2">Date</th>
                <th className="border px-3 py-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {applications.length > 0 ? (
                applications.map((app, i) => (
                  <tr key={app._id} className="hover:bg-gray-50">
                    <td className="border px-3 py-2">{i + 1}</td>
                    <td className="border px-3 py-2">{app.fullName}</td>
                    <td className="border px-3 py-2">{app.email}</td>
                    <td className="border px-3 py-2">{app.phone}</td>
                    <td className="border px-3 py-2">{app.program}</td>
                    <td className="border px-3 py-2">{app.message}</td>
                    <td className="border px-3 py-2">
                      {new Date(app.createdAt).toLocaleDateString()}
                    </td>

                    {/* DELETE BUTTON */}
                    <td className="border px-3 py-2">
                      <button
                        onClick={() => handleDelete(app._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-500 border">
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
