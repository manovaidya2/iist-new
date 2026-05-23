import React, { useState } from "react";

export default function BookAssessmentPage() {
  const [formData, setFormData] = useState({
    candidateId: "",
    skillArea: "",
    assessmentMode: "",
    preferredDate: "",
    regionCity: "",
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

  const assessmentModes = [
    "Online Only",
    "Online + Practical Trade Testing",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Assessment slot requested");
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[360px] overflow-hidden bg-[#0b5ca3] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#084f8e] via-[#0b66b4] to-[#1682dc]" />

        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(64deg,transparent_0px,transparent_58px,rgba(255,255,255,0.25)_60px,transparent_62px)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[950px] text-center">
          <p className="mb-5 text-[11px] font-bold tracking-[0.35em] uppercase text-[#ffb21a]">
            Book Assessment
          </p>

          <h1 className="font-serif text-white font-medium leading-[0.95] tracking-[-0.04em] text-[42px] sm:text-[56px] lg:text-[56px]">
            Schedule your assessment
            <br />
            session
          </h1>

          <p className="mx-auto mt-7 max-w-[850px] text-white text-[17px] leading-[1.45] font-medium">
            Choose online-only or online + practical trade testing. The council
            will confirm your slot and
            <br className="hidden md:block" />
            center allotment.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-[760px] rounded-[12px] border border-[#cfd9e4] bg-white px-8 py-9">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#07182d]">
                Membership / Candidate ID
              </label>

              <input
                type="text"
                name="candidateId"
                value={formData.candidateId}
                onChange={handleChange}
                className="w-full rounded-[7px] border border-[#cfd9e4] bg-white px-4 py-3 text-[14px] outline-none focus:border-[#0067c9]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#07182d]">
                Skill Area
              </label>

              <select
                name="skillArea"
                value={formData.skillArea}
                onChange={handleChange}
                className="w-full rounded-[7px] border border-[#cfd9e4] bg-white px-4 py-3 text-[14px] text-[#60728a] outline-none focus:border-[#0067c9]"
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
              <label className="mb-2 block text-[13px] font-semibold text-[#07182d]">
                Assessment Mode
              </label>

              <select
                name="assessmentMode"
                value={formData.assessmentMode}
                onChange={handleChange}
                className="w-full rounded-[7px] border border-[#cfd9e4] bg-white px-4 py-3 text-[14px] text-[#60728a] outline-none focus:border-[#0067c9]"
              >
                <option value="">Select mode</option>

                {assessmentModes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block text-[13px] font-semibold text-[#07182d]">
                  Preferred Date
                </label>

                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full rounded-[7px] border border-[#cfd9e4] bg-white px-4 py-3 text-[14px] text-[#60728a] outline-none focus:border-[#0067c9]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-semibold text-[#07182d]">
                  Region / City
                </label>

                <input
                  type="text"
                  name="regionCity"
                  value={formData.regionCity}
                  onChange={handleChange}
                  className="w-full rounded-[7px] border border-[#cfd9e4] bg-white px-4 py-3 text-[14px] outline-none focus:border-[#0067c9]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-[8px] bg-[#0067c9] py-3.5 text-[14px] font-semibold text-white hover:bg-[#005bb3]"
            >
              Request Assessment Slot
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}