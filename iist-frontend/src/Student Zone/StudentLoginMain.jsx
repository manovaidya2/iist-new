import React from "react";
import { FaBook, FaFileAlt, FaAward, FaCalendarAlt } from "react-icons/fa";

export default function StudentLoginMain() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* Left Section */}
       {/* Left Section */}
<div
  className="relative p-10 bg-cover bg-center flex flex-col justify-center space-y-8 text-white"
  style={{
   backgroundImage:
  "url('https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1400')",
 

  }}
>
  {/* Blue Overlay */}
  <div className="absolute inset-0 bg-[#1a4e92]/55"></div>

  <div className="relative z-10">
    <h1 className="text-4xl font-bold text-white">Student Portal</h1>
    <p className="text-blue-100 text-lg">
      Access your learning dashboard, submit exam forms, track your progress, and download certificates.
    </p>

    <ul className="space-y-4 mt-6">
      <li className="flex items-center space-x-4">
        <div className="bg-white/20 p-3 rounded-lg text-white backdrop-blur">
          <FaBook size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-white">Access LMS</h3>
          <p className="text-blue-100 text-sm">View courses and study materials</p>
        </div>
      </li>

      <li className="flex items-center space-x-4">
        <div className="bg-white/20 p-3 rounded-lg text-white backdrop-blur">
          <FaFileAlt size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-white">Exam Forms</h3>
          <p className="text-blue-100 text-sm">Apply for on-demand or session exams</p>
        </div>
      </li>

      <li className="flex items-center space-x-4">
        <div className="bg-white/20 p-3 rounded-lg text-white backdrop-blur">
          <FaAward size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-white">Certificates</h3>
          <p className="text-blue-100 text-sm">Download your digital certificates</p>
        </div>
      </li>

      <li className="flex items-center space-x-4">
        <div className="bg-white/20 p-3 rounded-lg text-white backdrop-blur">
          <FaCalendarAlt size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-white">Track Progress</h3>
          <p className="text-blue-100 text-sm">Monitor your learning journey</p>
        </div>
      </li>
    </ul>
  </div>
</div>


        {/* Right Section - Login */}
        <div className="p-10 bg-gray-50 flex flex-col justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Login</h2>
            <p className="text-gray-500 mb-6">Enter your credentials to access your dashboard</p>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Student ID / Enrollment Number</label>
                <input
                  type="text"
                  placeholder="IISD/2024/XXXXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4e92] focus:border-[#1a4e92] outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4e92] focus:border-[#1a4e92] outline-none"
                />
              </div>

              <div className="flex justify-between text-sm text-blue-600">
                <a href="#">Forgot Password?</a>
                <a href="#">First time login?</a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a4e92] text-white font-semibold px-4 py-3 rounded-xl shadow-lg hover:bg-[#163c70] transition duration-300 mt-4"
              >
                Login to Dashboard
              </button>
            </form>

            <div className="mt-6 text-center text-gray-600">
              <p>Don't have an account?</p>
              <button className="mt-2 w-full border border-gray-300 text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gray-100 transition duration-300">
                Register as New Student
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
