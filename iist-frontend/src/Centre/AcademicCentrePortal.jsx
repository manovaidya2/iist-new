import React from "react";
import {
  Users,
  CalendarDays,
  BarChart3,
  Building2,
  LogIn,
  HelpCircle,
} from "lucide-react";

export default function AcademicCentrePortal() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 md:px-12 lg:px-24 py-12">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Info Section */}
        <div className="bg-[#f9fbff] p-8 lg:p-12 flex flex-col justify-center gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Academic Centre Portal
          </h1>
          <p className="text-gray-500 text-lg">
            Institutional access for IISD-approved academic centres to manage
            enrollments, examinations, and student records.
          </p>

          <div className="flex flex-col gap-4 mt-6">
            {/* Feature Items */}
            <div className="flex items-center gap-3">
              <div className="bg-[#1a4e92]/10 p-3 rounded-lg text-[#1a4e92]">
                <Users size={22} />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">
                  Student Management
                </h4>
                <p className="text-gray-500 text-sm">
                  Enroll and manage student records
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#1a4e92]/10 p-3 rounded-lg text-[#1a4e92]">
                <CalendarDays size={22} />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">Exam Scheduling</h4>
                <p className="text-gray-500 text-sm">
                  Submit exam forms and schedules
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#1a4e92]/10 p-3 rounded-lg text-[#1a4e92]">
                <BarChart3 size={22} />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">
                  Performance Reports
                </h4>
                <p className="text-gray-500 text-sm">
                  Access detailed analytics and reports
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#1a4e92]/10 p-3 rounded-lg text-[#1a4e92]">
                <Building2 size={22} />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">
                  Centre Dashboard
                </h4>
                <p className="text-gray-500 text-sm">
                  Manage your institution profile
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <LogIn size={20} className="text-[#1a4e92]" />
            Centre Login
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            Access your institutional dashboard
          </p>

          <form className="flex flex-col gap-4">
            <div>
              <label className="text-gray-700 text-sm mb-1 block">
                Centre ID / Institution Code
              </label>
              <input
                type="text"
                placeholder="IISD/CTR/XXXXX"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-2 focus:ring-[#1a4e92] outline-none"
              />
            </div>

            <div>
              <label className="text-gray-700 text-sm mb-1 block">
                Admin Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-2 focus:ring-[#1a4e92] outline-none"
              />
            </div>

            <div>
              <label className="text-gray-700 text-sm mb-1 block">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-2 focus:ring-[#1a4e92] outline-none"
              />
            </div>

            <div className="flex justify-between text-sm text-[#1a4e92] font-medium">
              <button type="button" className="hover:underline">
                Forgot Password?
              </button>
              <button type="button" className="hover:underline flex items-center gap-1">
                <HelpCircle size={15} />
                Technical Support
              </button>
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#1a4e92] text-white py-3 rounded-md font-semibold hover:bg-[#163e78] transition"
            >
              Login to Dashboard
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500 text-sm">
            Not yet an approved centre?
            <button className="mt-2 w-full border border-[#1a4e92] text-[#1a4e92] py-2 rounded-md font-medium hover:bg-[#1a4e92] hover:text-white transition">
              Apply for Academic Association
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
