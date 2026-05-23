import React, { useRef, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Layers,
  UploadCloud,
  Send,
} from "lucide-react";

export default function StudentMembershipForm() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skillArea: "",
    membershipLevel: "",
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

    console.log({
      ...formData,
      document: fileName,
    });

    alert("Application Submitted");
  };

  return (
    <section className="bg-white px-4 py-14">
      <div className="mx-auto max-w-[850px]">

        <div className="rounded-[18px] border border-[#d9e1eb] bg-[#f8fafc] p-6 sm:p-8">

          {/* Heading */}

          <div className="text-center">

            <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#f5a400]">
              Student & Professional Membership
            </p>

            <h2 className="mt-3 font-serif text-[30px] font-semibold text-[#07182d]">
              Membership Application
            </h2>

            <p className="mt-2 text-[14px] text-[#60728a]">
              Complete your details for skill recognition.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-4">

              {/* Name */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0067c9]" />

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="w-full rounded-xl border py-3 pl-10 pr-3 text-sm"
                  />
                </div>
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0067c9]" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full rounded-xl border py-3 pl-10 pr-3 text-sm"
                  />
                </div>
              </div>

              {/* Phone */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone
                </label>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0067c9]" />

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone"
                    className="w-full rounded-xl border py-3 pl-10 pr-3 text-sm"
                  />
                </div>
              </div>

              {/* Skill */}

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Skill Area
                </label>

                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0067c9]" />

                  <select
                    name="skillArea"
                    value={formData.skillArea}
                    onChange={handleChange}
                    className="w-full rounded-xl border py-3 pl-10 pr-3 text-sm appearance-none"
                  >
                    <option>Select skill area</option>

                    {skillAreas.map((item) => (
                      <option key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Membership */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Membership Level
                </label>

                <div className="relative">
                  <Layers className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0067c9]" />

                  <select
                    name="membershipLevel"
                    value={formData.membershipLevel}
                    onChange={handleChange}
                    className="w-full rounded-xl border py-3 pl-10 pr-3 text-sm appearance-none"
                  >
                    <option>Select level</option>

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

            {/* Upload */}

            <div>

              <label className="mb-2 block text-sm font-medium">
                Supporting Document
              </label>

              <div
                onClick={() =>
                  fileInputRef.current?.click()
                }
                className="cursor-pointer rounded-xl border-2 border-dashed bg-white py-6 text-center"
              >
                <UploadCloud className="mx-auto h-8 w-8 text-[#0067c9]" />

                <p className="mt-2 text-sm font-medium">
                  Upload Resume / Certificate
                </p>

                {fileName && (
                  <p className="mt-2 text-xs text-[#0067c9]">
                    {fileName}
                  </p>
                )}

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0067c9] py-3 text-sm font-semibold text-white"
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