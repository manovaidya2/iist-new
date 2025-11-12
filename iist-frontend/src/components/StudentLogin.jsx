import React, { useState } from "react";
import axios from "../api/axiosInstance";
import StudentResult from "./StudentResult";
import { FaSearch } from "react-icons/fa";

export default function StudentLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setProgress(0);

    let value = 0;
    const interval = setInterval(() => {
      value += 2;
      setProgress(value);
      if (value >= 100) clearInterval(interval);
    }, 100);

    try {
      const res = await axios.post("/students/login", { username, password });
      setTimeout(() => {
        setStudentData(res.data);
        setLoading(false);
      }, 5000);
    } catch {
      clearInterval(interval);
      setLoading(false);
      setError("Invalid Roll No / Enrollment No or Session Year");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 px-4 relative">
      {/* ===== LOADER OVERLAY ===== */}
      {loading && (
        <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center z-50 backdrop-blur-sm">
          <p className="text-lg font-semibold text-gray-800 mb-4">
            Fetching Your Result
          </p>

          {/* Bouncing dots */}
          <div className="flex space-x-2 mb-6">
            <span className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></span>
            <span className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:200ms]"></span>
            <span className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:400ms]"></span>
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-700">{progress}%</p>
        </div>
      )}

      {!studentData ? (
        <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl border border-gray-100 grid md:grid-cols-2 overflow-hidden">
          {/* ===== LEFT PANEL ===== */}
          <div className="bg-[#1a4e92] text-white flex flex-col justify-center p-10">
            <h1 className="text-4xl font-bold mb-4 leading-snug">
              Online Results Portal
            </h1>
            <p className="text-blue-100 mb-6 text-sm">
              Check your examination results and instantly download your official IISD certificates.
            </p>
            <ul className="space-y-2 text-sm text-blue-50">
              <li>✔ Secure digital verification</li>
              <li>✔ Instant certificate download</li>
              <li>✔ Access from any device</li>
            </ul>
          </div>

          {/* ===== RIGHT PANEL (FORM) ===== */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Access Your Result
            </h2>

            <form onSubmit={handleLogin} className="space-y-5">
              {error && (
                <p className="text-red-600 text-center text-sm font-medium bg-red-50 py-2 rounded-xl">
                  {error}
                </p>
              )}

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Roll No / Enrollment No
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your roll number or enrollment number"
                  className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Session Year (e.g., 2023)
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your session year"
                  className="w-full bg-gray-50 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700 text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 ${
                  loading
                    ? "bg-gray-400"
                    : "bg-[#1a4e92] hover:from-blue-700 hover:to-indigo-700"
                } text-white py-3 rounded-full font-semibold text-sm shadow-lg transition-all duration-300`}
              >
                <FaSearch className="text-sm" />
                {loading ? "Processing..." : "Search Result"}
              </button>
            </form>

            <p className="text-xs text-center text-gray-500 mt-6">
              © {new Date().getFullYear()} Indian Institute of Skill Development
            </p>
          </div>
        </div>
      ) : (
        <StudentResult studentData={studentData} />
      )}
    </div>
  );
}
