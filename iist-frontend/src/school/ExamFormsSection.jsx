import React, { useState } from "react";

export default function ExamFormsSection() {
  const [activeForm, setActiveForm] = useState(null);

  // Reusable Input Component
  const Input = ({ label, type = "text", placeholder = "" }) => (
    <div>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-[#1a4e92] focus:outline-none"
      />
    </div>
  );

  // ✅ On-Demand Exam Form
  const OnDemandForm = () => (
    <form className="space-y-8">
      <h3 className="text-2xl font-bold text-[#1a4e92] mb-2">
        On-Demand Examination Form
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Student Name *" />
        <Input label="Enrollment / Admission No. *" />
        <Input label="Course & Level *" />
        <Input label="Institution Name *" />
        <Input label="Exam Module(s) Requested *" />
        <Input
          label="Preferred Exam Date Range *"
          placeholder="e.g., March 1–15, 2024"
        />
      </div>

      <label className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
        <input type="checkbox" className="mt-1 w-5 h-5 text-[#1a4e92] accent-[#1a4e92]" />
        <span>
          I have completed the required training and internal assessments. I
          understand the on-demand exam will be conducted as per IISD central
          system rules.
        </span>
      </label>

      <button
        type="submit"
        className="bg-[#1a4e92] text-white px-8 py-3 rounded-xl hover:bg-[#16437a] transition-all duration-300 shadow-md font-semibold"
      >
        Submit for Approval
      </button>
    </form>
  );

  // ✅ Session Exam Form
  const SessionForm = () => (
    <form className="space-y-8">
      <h3 className="text-2xl font-bold text-[#1a4e92] mb-2">
        Session Examination Form
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Student Name *" />
        <Input label="Enrollment No. *" />
        <Input label="Course & Level *" />
        <Input
          label="Academic Session (Month-Year) *"
          placeholder="e.g., January 2024"
        />
        <Input label="Institution Name *" />
      </div>

      <label className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
        <input type="checkbox" className="mt-1 w-5 h-5 text-[#1a4e92] accent-[#1a4e92]" />
        <span>
          I wish to appear in the next scheduled IISD exam session. I confirm
          readiness and completion of all course work.
        </span>
      </label>

      <button
        type="submit"
        className="bg-[#1a4e92] text-white px-8 py-3 rounded-xl hover:bg-[#16437a] transition-all duration-300 shadow-md font-semibold"
      >
        Submit Exam Form
      </button>
    </form>
  );

  // ✅ Self Declaration Form
  const DeclarationForm = () => (
    <form className="space-y-8">
      <h3 className="text-2xl font-bold text-[#1a4e92] mb-2">
        Student Self Declaration Form
      </h3>

      <label className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
        <input type="checkbox" className="mt-1 w-5 h-5 text-[#1a4e92] accent-[#1a4e92]" />
        <span>
          I hereby declare that I have undergone full training for my enrolled
          program through an IISD-approved institution.
          <br />
          <br />
          I understand that the final certificate is subject to passing the
          standardized central exam.
          <br />
          <br />
          I agree to abide by IISD’s rules, quality policy, and academic code of
          conduct.
        </span>
      </label>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Full Name *" />
        <Input label="Enrollment No. *" />
        <Input label="Date *" type="date" />
        <Input label="Digital Signature *" placeholder="Type your full name" />
      </div>

      <button
        type="submit"
        className="bg-[#1a4e92] text-white px-8 py-3 rounded-xl hover:bg-[#16437a] transition-all duration-300 shadow-md font-semibold"
      >
        Submit Declaration
      </button>
    </form>
  );

  // ✅ MAIN RETURN
  return (
    <section className="bg-[#f9fafc] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a4e92] mb-10">
          Examination & Declaration Forms
        </h2>

        {/* Form Type Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { title: "On-Demand Exam", key: "ondemand" },
            { title: "Session Exam", key: "session" },
            { title: "Self Declaration", key: "declaration" },
          ].map((form) => (
            <button
              key={form.key}
              onClick={() => setActiveForm(form.key)}
              className={`rounded-full px-6 py-3 text-sm md:text-base font-semibold border transition-all duration-300 shadow-sm hover:shadow-md ${
                activeForm === form.key
                  ? "bg-[#1a4e92] text-white border-[#1a4e92] scale-105"
                  : "bg-white text-[#1a4e92] border-[#1a4e92] hover:bg-[#1a4e92]/10"
              }`}
            >
              {form.title}
            </button>
          ))}
        </div>

        {/* Form Display */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100">
          {!activeForm && (
            <p className="text-center text-gray-600 text-lg">
              Please select a form type above to proceed.
            </p>
          )}
          {activeForm === "ondemand" && <OnDemandForm />}
          {activeForm === "session" && <SessionForm />}
          {activeForm === "declaration" && <DeclarationForm />}
        </div>
      </div>
    </section>
  );
}
