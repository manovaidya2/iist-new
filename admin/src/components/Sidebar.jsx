import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/Logo white.png"; // Replace with your logo path
import {
  FaTachometerAlt,
  FaBook,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaFileAlt,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

const Sidebar = () => {
  const sections = [
    {
      title: "Student",
      links: [
        { name: "Dashboard", icon: <FaTachometerAlt />, path: "#" },
        { name: "Result", icon: <FaBook />, path: "/results" },
        // { name: "Courses", icon: <FaFileAlt />, path: "/courses" },
        // { name: "School Program List", icon: <FaBook />, path: "/school-program-list" },
       
      ],
    },
    {
      title: "Admin",
      links: [
        { name: "Dashboard", icon: <FaTachometerAlt />, path: "#" },
        { name: "Ondemand Form list", icon: <FaUserGraduate />, path: "/admin-forms" },
        // { name: "Gallery", icon: <FaChalkboardTeacher />, path: "/admin-gallery" },
        // { name: "Contact", icon: <FaFileAlt />, path: "/contact-list" },
        { name: "School Program", icon: <FaCalendarAlt />, path: "/school-program" },
        // { name: "Users", icon: <FaUsers />, path: "#" },
        { name: "Admission form data", icon: <FaBook />, path: "/admisson-form" },
        { name: "Examination form data", icon: <FaBook />, path: "/examinationformdata" },
        { name: "Declaration form data", icon: <FaBook />, path: "/declaration" },
        { name: "Certificate Reissue form data", icon: <FaBook />, path: "/certificate-reissue" },
      ],
    },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4 flex flex-col">
      {/* Logo + Name */}
     <div className="flex items-center mb-6">
  <img
    src={logo} // Replace with your logo path
    alt="IIST Logo"
    className="w-60 h-15 object-contain" // Adjust size as needed
  />

</div>


      {/* Sections */}
      <div className="flex-1 overflow-y-auto">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-gray-400 font-semibold mb-2 border-b border-gray-600 pb-1">
              {section.title}
            </h3>
            <ul>
              {section.links.map((link, i) => (
                <li key={i} className="mb-2">
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
