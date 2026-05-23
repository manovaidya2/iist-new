import React, { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import logo from "../images/IISD Logo-1.png";

// ⭐ Import Axios Instance
import axiosInstance from "../api/axiosInstance";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  // Dropdown states
  const [openDropdown, setOpenDropdown] = useState(null);

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

  // Dropdown data
  const councilSubmenu = [
    { name: "International Council", href: "/international-council" },
    { name: "Schools", href: "/school" },
    { name: "About", href: "/about-us" },
  ];

  const membershipSubmenu = [
    { name: "Membership Overview", href: "/memebership-overview" },
    { name: "Student & Professional", href: "/school-&-professional" },
    { name: "Institutional", href: "/institutional-membership" },
    { name: "Apply for Membership", href: "/mentorship-application" },
  ];

  const assessmentSubmenu = [
    { name: "Trade Test Centers", href: "/trade-test-center" },
    { name: "Trade Testing Process", href: "/trade-testing-process" },
    { name: "Assessment & Certification", href: "/assessment-certification" },
    { name: "Book Assessment", href: "/book-assessment" },
    { name: "Become a Trade Test Center", href: "/trade-test-center-application" },
  ];

  const frameworkSubmenu = [
    { name: "International Skill Credits", href: "/international-skill-credits" },
    { name: "Global Skill Registry", href: "/global-skill-registry" },
    { name: "Verification Portal", href: "/verification-portal" },
  ];

  // Top bar links for mobile
  const topBarLinks = [
    { name: "Student Login", href: "/student-login" },
    { name: "Centre Login", href: "/center-login" },
    { name: "Results", href: "/results" },
    { name: "Franchisee", href: "/franchise" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="bg-[#f7f9fc] shadow-sm sticky top-0 z-50">
        {/* TOP BAR - Desktop only (hidden on mobile) */}
        <div className="hidden md:block bg-[#0b2b4f] text-white text-sm py-2 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex justify-end items-center gap-6">
            <a href="/student-login" className="hover:text-blue-300 transition">Student Login</a>
            <span className="text-gray-500">|</span>
            <a href="/center-login" className="hover:text-blue-300 transition">Centre Login</a>
            <span className="text-gray-500">|</span>
            <a href="/results" className="hover:text-blue-300 transition">Results</a>
            <span className="text-gray-500">|</span>
            <a href="/franchise" className="hover:text-blue-300 transition">Franchisee</a>
          </div>
        </div>

        {/* MAIN NAVIGATION */}
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="IISD Logo" className="w-40 md:w-50 h-12 md:h-15 object-contain" />
          </div>

          {/* Desktop Menu - Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-5 text-[15px] text-gray-900 font-medium flex-1 mx-4">
            <a href="/" className="hover:text-[#0b65d7] transition whitespace-nowrap">Home</a>

            {/* Council Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown("council")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-[#0b65d7] transition whitespace-nowrap">
                Council <ChevronDown size={14} />
              </button>
              <div className={`absolute top-full left-0 mt-2 bg-white shadow-xl rounded-md overflow-hidden min-w-[220px] z-50 transition-all duration-300 origin-top-left ${
                openDropdown === "council" ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
              }`}>
                {councilSubmenu.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href} 
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0b65d7] hover:text-white transition-all duration-200 transform hover:translate-x-1"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Membership Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown("membership")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-[#0b65d7] transition whitespace-nowrap">
                Membership <ChevronDown size={14} />
              </button>
              <div className={`absolute top-full left-0 mt-2 bg-white shadow-xl rounded-md overflow-hidden min-w-[220px] z-50 transition-all duration-300 origin-top-left ${
                openDropdown === "membership" ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
              }`}>
                {membershipSubmenu.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href} 
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0b65d7] hover:text-white transition-all duration-200 transform hover:translate-x-1"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Assessment Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown("assessment")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-[#0b65d7] transition whitespace-nowrap">
                Assessment <ChevronDown size={14} />
              </button>
              <div className={`absolute top-full left-0 mt-2 bg-white shadow-xl rounded-md overflow-hidden min-w-[240px] z-50 transition-all duration-300 origin-top-left ${
                openDropdown === "assessment" ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
              }`}>
                {assessmentSubmenu.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href} 
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0b65d7] hover:text-white transition-all duration-200 transform hover:translate-x-1"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Framework Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown("framework")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-[#0b65d7] transition whitespace-nowrap">
                Framework <ChevronDown size={14} />
              </button>
              <div className={`absolute top-full left-0 mt-2 bg-white shadow-xl rounded-md overflow-hidden min-w-[220px] z-50 transition-all duration-300 origin-top-left ${
                openDropdown === "framework" ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
              }`}>
                {frameworkSubmenu.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href} 
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0b65d7] hover:text-white transition-all duration-200 transform hover:translate-x-1"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Right side buttons - EN and Apply Now */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="flex items-center gap-1.5 border border-gray-300 rounded-full px-3 py-1 text-sm hover:bg-gray-100 transition whitespace-nowrap">
              <Globe size={15} /> EN
            </button>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#0b65d7] hover:bg-[#0955b6] text-white px-4 py-1.5 rounded-lg font-semibold transition text-sm whitespace-nowrap"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold text-[#004a9f]">Menu</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-col gap-3 p-5 text-gray-800 text-base overflow-y-auto max-h-full">
            {/* Top Bar Links - Now inside mobile menu */}
            <div className="bg-[#0b2b4f] -mx-5 -mt-5 px-5 py-4 mb-3">
              <div className="flex flex-col gap-3">
                {topBarLinks.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="text-white text-sm hover:text-blue-300 transition py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="/" onClick={() => setIsOpen(false)} className="py-2 hover:text-[#0b65d7] transition">Home</a>
            
            {/* Council Mobile Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <button 
                onClick={() => setOpenDropdown(openDropdown === "council_mobile" ? null : "council_mobile")}
                className="flex items-center justify-between w-full text-left py-2"
              >
                <span className="hover:text-[#0b65d7] transition">Council</span>
                <ChevronDown size={16} className={`transform transition-transform ${openDropdown === "council_mobile" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "council_mobile" && (
                <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-[#0b65d7] pl-3">
                  {councilSubmenu.map((item, idx) => (
                    <a key={idx} href={item.href} onClick={() => setIsOpen(false)} className="py-1 text-sm hover:text-[#0b65d7]">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Membership Mobile Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <button 
                onClick={() => setOpenDropdown(openDropdown === "membership_mobile" ? null : "membership_mobile")}
                className="flex items-center justify-between w-full text-left py-2"
              >
                <span className="hover:text-[#0b65d7] transition">Membership</span>
                <ChevronDown size={16} className={`transform transition-transform ${openDropdown === "membership_mobile" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "membership_mobile" && (
                <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-[#0b65d7] pl-3">
                  {membershipSubmenu.map((item, idx) => (
                    <a key={idx} href={item.href} onClick={() => setIsOpen(false)} className="py-1 text-sm hover:text-[#0b65d7]">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Assessment Mobile Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <button 
                onClick={() => setOpenDropdown(openDropdown === "assessment_mobile" ? null : "assessment_mobile")}
                className="flex items-center justify-between w-full text-left py-2"
              >
                <span className="hover:text-[#0b65d7] transition">Assessment</span>
                <ChevronDown size={16} className={`transform transition-transform ${openDropdown === "assessment_mobile" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "assessment_mobile" && (
                <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-[#0b65d7] pl-3">
                  {assessmentSubmenu.map((item, idx) => (
                    <a key={idx} href={item.href} onClick={() => setIsOpen(false)} className="py-1 text-sm hover:text-[#0b65d7]">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Framework Mobile Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <button 
                onClick={() => setOpenDropdown(openDropdown === "framework_mobile" ? null : "framework_mobile")}
                className="flex items-center justify-between w-full text-left py-2"
              >
                <span className="hover:text-[#0b65d7] transition">Framework</span>
                <ChevronDown size={16} className={`transform transition-transform ${openDropdown === "framework_mobile" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "framework_mobile" && (
                <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-[#0b65d7] pl-3">
                  {frameworkSubmenu.map((item, idx) => (
                    <a key={idx} href={item.href} onClick={() => setIsOpen(false)} className="py-1 text-sm hover:text-[#0b65d7]">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/placement-cell" onClick={() => setIsOpen(false)} className="py-2 hover:text-[#0b65d7] transition">Placement</a>

            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 w-max mt-2">
              <Globe size={16} /> EN
            </div>

            <button
              onClick={() => {
                setShowForm(true);
                setIsOpen(false);
              }}
              className="bg-[#0b65d7] hover:bg-[#0955b6] text-white px-5 py-2.5 rounded-lg font-semibold transition mt-2"
            >
              Apply Now
            </button>
          </nav>
        </div>

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
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