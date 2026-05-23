import React, { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

export default function StudentMembershipApplication() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    email: "",
    phone: "",
    skillArea: "",
    membershipLevel: "",
    workExperience: "",
    internshipDetails: "",
    trainingDetails: "",
  });

  const skillAreas = [
    "Healthcare",
    "Information Technology",
    "Digital Marketing",
    "Hospitality",
    "Construction",
    "Education & Training",
    "Other",
  ];

  const membershipLevels = [
    "Associate Skill Member",
    "Certified Skill Member",
    "Professional Skill Member",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "phone"
          ? value.replace(/\D/g, "").slice(0, 10)
          : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileName(file?.name || "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, document: fileName });
    alert("Application Submitted");
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[325px] overflow-hidden bg-[#0b5ca3] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#084f8e] via-[#0b66b4] to-[#1682dc]" />

        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(64deg,transparent_0px,transparent_58px,rgba(255,255,255,0.25)_60px,transparent_62px)]" />
        </div>

        <div className="relative z-10 text-center">
          <p className="mb-4 text-[14px] font-bold tracking-[0.25em] uppercase text-[#ffb21a]">
            Apply for Membership
          </p>

          <h1 className="font-serif text-white font-medium leading-[0.95] tracking-[-0.04em] text-[42px] sm:text-[56px] lg:text-[58px]">
            Student & Professional
            <br />
            Membership Application
          </h1>

          <p className="mx-auto mt-6 max-w-[850px] text-white text-[18px] leading-[1.5] font-medium">
            Submit your credentials. Eligible candidates receive LMS access and
            assessment guidelines.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-[740px] rounded-[12px] border border-[#cfd9e4] bg-white px-8 py-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block text-[12px] font-semibold text-[#07182d]">
                  Full Name
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-[7px] border border-[#cfd9e4] px-4 py-2.5 text-[13px] outline-none focus:border-[#0067c9]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-semibold text-[#07182d]">
                  Country
                </label>
                <input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full rounded-[7px] border border-[#cfd9e4] px-4 py-2.5 text-[13px] outline-none focus:border-[#0067c9]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-semibold text-[#07182d]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-[7px] border border-[#cfd9e4] px-4 py-2.5 text-[13px] outline-none focus:border-[#0067c9]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-semibold text-[#07182d]">
                  Phone
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-[7px] border border-[#cfd9e4] px-4 py-2.5 text-[13px] outline-none focus:border-[#0067c9]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-semibold text-[#07182d]">
                  Skill Area
                </label>
                <select
                  name="skillArea"
                  value={formData.skillArea}
                  onChange={handleChange}
                  className="w-full rounded-[7px] border border-[#cfd9e4] px-4 py-2.5 text-[13px] text-[#60728a] outline-none focus:border-[#0067c9]"
                >
                  <option value="">Select skill area</option>
                  {skillAreas.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-semibold text-[#07182d]">
                  Declared Membership Level
                </label>
                <select
                  name="membershipLevel"
                  value={formData.membershipLevel}
                  onChange={handleChange}
                  className="w-full rounded-[7px] border border-[#cfd9e4] px-4 py-2.5 text-[13px] text-[#60728a] outline-none focus:border-[#0067c9]"
                >
                  <option value="">Select level</option>
                  {membershipLevels.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <FieldTextarea
              label="Work Experience"
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
              placeholder="Roles, duration, employer..."
            />

            <FieldTextarea
              label="Internship Details"
              name="internshipDetails"
              value={formData.internshipDetails}
              onChange={handleChange}
            />

            <FieldTextarea
              label="Training Details"
              name="trainingDetails"
              value={formData.trainingDetails}
              onChange={handleChange}
              placeholder="Courses completed, certifications..."
            />

            <div>
              <label className="mb-2 block text-[12px] font-semibold text-[#07182d]">
                Supporting Documents
              </label>

              <div
                onClick={() => fileInputRef.current?.click()}
                className="flex cursor-pointer flex-col items-center justify-center rounded-[8px] border border-dashed border-[#cfd9e4] bg-white px-5 py-8 text-center"
              >
                <UploadCloud className="h-6 w-6 text-[#60728a]" />

                <p className="mt-3 text-[12px] text-[#60728a]">
                  Drag and drop or click to upload (UI preview only)
                </p>

                {fileName && (
                  <p className="mt-2 text-[12px] font-semibold text-[#0067c9]">
                    {fileName}
                  </p>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-[7px] bg-[#0067c9] py-3 text-[13px] font-bold text-white hover:bg-[#005bb3]"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function FieldTextarea({ label, name, value, onChange, placeholder = "" }) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-semibold text-[#07182d]">
        {label}
      </label>

      <textarea
        rows="3"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-[7px] border border-[#cfd9e4] px-4 py-3 text-[13px] outline-none focus:border-[#0067c9]"
      />
    </div>
  );
}