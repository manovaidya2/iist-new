import React, { useRef, useState } from "react";
import {
  User,
  Globe2,
  Mail,
  Phone,
  Briefcase,
  Layers,
  UploadCloud,
  Send,
} from "lucide-react";

export default function MembershipApplicationForm() {
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
    "Electrical",
    "Mechanical",
    "Beauty & Wellness",
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
          ? value.replace(/\D/g, "").slice(0, 15)
          : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileName(file?.name || "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...formData,
      document: fileName,
    });

    alert("Application Submitted");
  };

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-14">
      <div className="mx-auto max-w-[900px]">
        <div className="rounded-[14px] border border-[#d8e1ea] bg-[#f8fafc] p-5 sm:p-7">

          {/* Heading */}

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#ffb21a]">
              Application Form
            </p>

            <h2 className="mt-2 font-serif text-[28px] md:text-[32px] font-semibold text-[#07182d]">
              Submit your membership application
            </h2>

            <p className="mx-auto mt-3 max-w-[600px] text-[13px] leading-[1.6] text-[#60728a]">
              Fill your skill details and declared membership level.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Full Name */}

              <div>
                <label className="mb-1 block text-[13px] font-semibold text-[#102b49]">
                  Full Name
                </label>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0067c9]" />

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full rounded-[8px] border border-[#cfd9e4] bg-white py-3 pl-10 pr-3 text-[13px] outline-none focus:border-[#0067c9]"
                  />
                </div>
              </div>

              {/* Country */}

              <div>
                <label className="mb-1 block text-[13px] font-semibold text-[#102b49]">
                  Country
                </label>

                <div className="relative">
                  <Globe2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0067c9]" />

                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Enter country"
                    className="w-full rounded-[8px] border border-[#cfd9e4] bg-white py-3 pl-10 pr-3 text-[13px] outline-none focus:border-[#0067c9]"
                  />
                </div>
              </div>

              {/* Email */}

              <div>
                <label className="mb-1 block text-[13px] font-semibold text-[#102b49]">
                  Email
                </label>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0067c9]" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full rounded-[8px] border border-[#cfd9e4] bg-white py-3 pl-10 pr-3 text-[13px] outline-none focus:border-[#0067c9]"
                  />
                </div>
              </div>

              {/* Phone */}

              <div>
                <label className="mb-1 block text-[13px] font-semibold text-[#102b49]">
                  Phone
                </label>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0067c9]" />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full rounded-[8px] border border-[#cfd9e4] bg-white py-3 pl-10 pr-3 text-[13px] outline-none focus:border-[#0067c9]"
                  />
                </div>
              </div>

              {/* Skill Area */}

              <div>
                <label className="mb-1 block text-[13px] font-semibold text-[#102b49]">
                  Skill Area
                </label>

                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0067c9]" />

                  <select
                    name="skillArea"
                    value={formData.skillArea}
                    onChange={handleChange}
                    className="w-full rounded-[8px] border border-[#cfd9e4] bg-white py-3 pl-10 pr-3 text-[13px] outline-none appearance-none"
                  >
                    <option value="">
                      Select skill area
                    </option>

                    {skillAreas.map((item) => (
                      <option key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Membership Level */}

              <div>
                <label className="mb-1 block text-[13px] font-semibold text-[#102b49]">
                  Declared Membership Level
                </label>

                <div className="relative">
                  <Layers className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0067c9]" />

                  <select
                    name="membershipLevel"
                    value={formData.membershipLevel}
                    onChange={handleChange}
                    className="w-full rounded-[8px] border border-[#cfd9e4] bg-white py-3 pl-10 pr-3 text-[13px] outline-none appearance-none"
                  >
                    <option value="">
                      Select level
                    </option>

                    <option>
                      Associate Skill Member
                    </option>

                    <option>
                      Certified Skill Member
                    </option>

                    <option>
                      Professional Skill Member
                    </option>

                  </select>
                </div>
              </div>

            </div>

            {/* Textareas */}

            <div>
              <label className="mb-1 block text-[13px] font-semibold text-[#102b49]">
                Work Experience
              </label>

              <textarea
                rows="3"
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
                placeholder="Roles, duration, employer..."
                className="w-full rounded-[8px] border border-[#cfd9e4] bg-white px-4 py-3 text-[13px]"
              />
            </div>

            <div>
              <label className="mb-1 block text-[13px] font-semibold text-[#102b49]">
                Internship Details
              </label>

              <textarea
                rows="3"
                name="internshipDetails"
                value={formData.internshipDetails}
                onChange={handleChange}
                placeholder="Internship details..."
                className="w-full rounded-[8px] border border-[#cfd9e4] bg-white px-4 py-3 text-[13px]"
              />
            </div>

            <div>
              <label className="mb-1 block text-[13px] font-semibold text-[#102b49]">
                Training Details
              </label>

              <textarea
                rows="3"
                name="trainingDetails"
                value={formData.trainingDetails}
                onChange={handleChange}
                placeholder="Courses completed, certifications..."
                className="w-full rounded-[8px] border border-[#cfd9e4] bg-white px-4 py-3 text-[13px]"
              />
            </div>

            {/* Upload */}

            <div>

              <label className="mb-2 block text-[13px] font-semibold text-[#102b49]">
                Supporting Documents
              </label>

              <div
                onClick={() =>
                  fileInputRef.current?.click()
                }
                className="flex cursor-pointer flex-col items-center justify-center rounded-[10px] border-2 border-dashed border-[#b9c7d8] bg-white px-5 py-7 text-center"
              >
                <UploadCloud className="h-8 w-8 text-[#0067c9]" />

                <p className="mt-3 text-[13px] font-semibold text-[#102b49]">
                  Drag & drop or upload
                </p>

                <p className="mt-1 text-[11px] text-[#60728a]">
                  PDF, DOC, JPG
                </p>

                {fileName && (
                  <p className="mt-3 text-[12px] text-[#0067c9]">
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
              className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#0067c9] py-3 text-[13px] font-semibold text-white"
            >
              <Send className="h-4 w-4" />

              Submit Application
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}