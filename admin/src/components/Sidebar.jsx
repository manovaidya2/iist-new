import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/Logo white.png";

import {
  FaTachometerAlt,
  FaBook,
  FaUserGraduate,
  FaFileAlt,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Sidebar = () => {
  const [openSchoolMenu, setOpenSchoolMenu] = useState(false);

  const sections = [
    {
      title: "Student",
      links: [
        { name: "Dashboard", icon: <FaTachometerAlt />, path: "#" },
        { name: "Result", icon: <FaBook />, path: "/results" },
      ],
    },

    {
      title: "Admin",
      links: [
        { name: "Dashboard", icon: <FaTachometerAlt />, path: "#" },
        // { name: "Ondemand Form list", icon: <FaUserGraduate />, path: "/admin-forms" },

        // ⭐ NEW: School Program Parent Menu
        {
          name: "School Program",
          icon: <FaCalendarAlt />,
          submenu: [
            
            {name : "School Program List", icon: <FaBook />, path: "/school-program" },
              { name: "Admission form data", icon: <FaBook />, path: "/admisson-form" },
        { name: "Examination form data", icon: <FaBook />, path: "/examinationformdata" },
        { name: "Declaration form data", icon: <FaBook />, path: "/declaration" },
        { name: "Certificate Reissue form data", icon: <FaBook />, path: "/certificate-reissue" },
       
        { name: "Internship form data", icon: <FaBook />, path: "/internship-form-data" },
        { name: "Medium of Instruction form data", icon: <FaBook />, path: "/medium-admin" },
          ],
        },

       { name: "Placement form data", icon: <FaBook />, path: "/placement-form" },
       { name: "Form PDF Upload", icon: <FaFileAlt />, path: "/form-upload" },
       { name: "Apply Now form data", icon: <FaFileAlt />, path: "/applyformlist" },
      ],
    },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4 flex flex-col">
      {/* Logo */}
      <div className="flex items-center mb-6">
        <img src={logo} alt="IIST Logo" className="w-60 h-15 object-contain" />
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

                  {/* If submenu exists */}
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => setOpenSchoolMenu(!openSchoolMenu)}
                        className="w-full flex justify-between items-center px-2 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                      >
                        <span className="flex items-center gap-2">
                          {link.icon}
                          {link.name}
                        </span>
                        {openSchoolMenu ? <FaChevronUp /> : <FaChevronDown />}
                      </button>

                      {openSchoolMenu && (
                        <ul className="ml-6 mt-2 border-l border-gray-600 pl-3">
                          {link.submenu.map((sub, j) => (
                            <li key={j} className="mb-2">
                              <Link
                                to={sub.path}
                                className="block px-2 py-1 hover:bg-gray-700 rounded"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition"
                    >
                      <span>{link.icon}</span>
                      <span>{link.name}</span>
                    </Link>
                  )}

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
