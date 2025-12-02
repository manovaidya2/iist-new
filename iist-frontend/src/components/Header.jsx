import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "../images/IISD Logo-1.png";

// ⭐ Import Axios Instance
import axiosInstance from "../api/axiosInstance";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // ⭐ Programs from backend
  const [programs, setPrograms] = useState([]);

  // ⭐ Fetch programs using axiosInstance
  useEffect(() => {
    axiosInstance
      .get("/student-programs")
      .then((res) => {
        setPrograms(res.data || []);
      })
      .catch((err) => console.error("Error fetching programs:", err));
  }, []);

  // ⭐ Handle Apply Form Submit
  const handleApplySubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      program: e.target.program.value,
      message: e.target.message.value,
    };

    try {
      await axiosInstance.post("/apply-now", formData);

      alert("Application submitted successfully!");
      setShowForm(false);
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Failed to submit application!");
    }
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="bg-[#f7f9fc] shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="IISD Logo" className="w-50 h-15 object-contain" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 text-[15px] text-gray-900 font-medium whitespace-nowrap">
            <a href="/">Home</a>
            <a href="/about-us">About</a>
            <a href="/school">Schools</a>
            <a href="/placement-cell">Placement</a>
            <a href="/results">Results</a>
            <a href="/franchise">Franchisee</a>
            <a href="/student-login">Student Login</a>
            <a href="/center-login">Centre Login</a>

            <button className="flex items-center gap-1.5 border border-gray-300 rounded-full px-3 py-1 text-sm">
              <Globe size={15} /> EN
            </button>

            {/* Apply Now */}
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#0b65d7] hover:bg-[#0955b6] text-white px-4 py-1.5 rounded-lg font-semibold transition text-sm"
            >
              Apply Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold text-[#004a9f]">Menu</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 p-5 text-gray-800 text-base">
            <a href="/">Home</a>
            <a href="/about-us">About</a>
            <a href="/school">Schools</a>
            <a href="/placement-cell">Placement</a>
            <a href="/results">Results</a>
            <a href="/franchise">Franchisee</a>
            <a href="/student-login">Student Login</a>
            <a href="/center-login">Centre Login</a>

            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1.5 w-max">
              <Globe size={16} /> EN
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="bg-[#0b65d7] hover:bg-[#0955b6] text-white px-5 py-2 rounded-lg font-semibold transition"
            >
              Apply Now
            </button>
          </nav>
        </div>

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </header>

      {/* ================= APPLY NOW POPUP FORM ================= */}
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setShowForm(false)}
          ></div>

          <div className="fixed inset-0 flex justify-center items-center z-[60] px-4">
            <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 relative">

              {/* Close */}
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
                onClick={() => setShowForm(false)}
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl font-bold text-[#004a9f] mb-4">Apply Now</h2>

              {/* FORM */}
              <form className="space-y-4" onSubmit={handleApplySubmit}>

                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold">Full Name</label>
                    <input
                      name="fullName"
                      type="text"
                      required
                      className="w-full border px-3 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="Enter name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full border px-3 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold">Phone</label>
                    <input
                      name="phone"
                      type="number"
                      required
                      className="w-full border px-3 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="Phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold">Select Program</label>
                    <select
                      name="program"
                      required
                      className="w-full border px-3 py-2 rounded-lg mt-1 text-sm"
                    >
                      <option value="">Select Program</option>
                      {programs.length > 0 ? (
                        programs.map((p) => (
                          <option key={p._id} value={p.title}>
                            {p.title}
                          </option>
                        ))
                      ) : (
                        <option>Loading...</option>
                      )}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold">Message</label>
                  <textarea
                    name="message"
                    rows="2"
                    className="w-full border px-3 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#0b65d7] hover:bg-[#0955b6] w-full text-white py-2 rounded-lg font-semibold text-sm"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
