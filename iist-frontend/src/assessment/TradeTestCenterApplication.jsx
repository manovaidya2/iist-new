import React, { useState } from "react";

export default function TradeTestCenterApplication() {
  const [formData, setFormData] = useState({
    institutionName: "",
    country: "",
    contactPerson: "",
    email: "",
    capacity: "",
    facilities: "",
    accreditations: "",
  });

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
    alert("Application Submitted");
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[310px] overflow-hidden bg-[#0b5ca3] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#084f8e] via-[#0b66b4] to-[#1682dc]" />

        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(64deg,transparent_0px,transparent_58px,rgba(255,255,255,0.25)_60px,transparent_62px)]" />
        </div>

        <div className="relative z-10 max-w-[900px] text-center">
          <p className="mb-4 text-[10px] font-bold tracking-[0.35em] uppercase text-[#ffb21a]">
            Become a Trade Test Center
          </p>

          <h1 className="font-serif text-white font-medium leading-[0.95] tracking-[-0.04em] text-[40px] sm:text-[54px] lg:text-[56px]">
            Approved Trade Test Center
            <br />
            Application
          </h1>

          <p className="mx-auto mt-6 max-w-[760px] text-white text-[16px] leading-[1.5] font-medium">
            Conduct internationally aligned practical assessments under the
            council framework.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-[850px] rounded-[12px] border border-[#cfd9e4] bg-white px-8 py-9">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block text-[13px] font-semibold text-[#07182d]">
                  Institution / Center Name
                </label>
                <input
                  type="text"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  className="w-full rounded-[7px] border border-[#cfd9e4] px-4 py-3 text-[14px] outline-none focus:border-[#0067c9]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-semibold text-[#07182d]">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full rounded-[7px] border border-[#cfd9e4] px-4 py-3 text-[14px] outline-none focus:border-[#0067c9]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-semibold text-[#07182d]">
                  Contact Person
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="w-full rounded-[7px] border border-[#cfd9e4] px-4 py-3 text-[14px] outline-none focus:border-[#0067c9]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-semibold text-[#07182d]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-[7px] border border-[#cfd9e4] px-4 py-3 text-[14px] outline-none focus:border-[#0067c9]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#07182d]">
                Practical Assessment Capacity (candidates / month)
              </label>
              <input
                type="text"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                className="w-full rounded-[7px] border border-[#cfd9e4] px-4 py-3 text-[14px] outline-none focus:border-[#0067c9]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#07182d]">
                Facilities & Equipment
              </label>
              <textarea
                name="facilities"
                value={formData.facilities}
                onChange={handleChange}
                rows="4"
                className="w-full rounded-[7px] border border-[#cfd9e4] px-4 py-3 text-[14px] outline-none focus:border-[#0067c9]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#07182d]">
                Existing Accreditations (optional)
              </label>
              <textarea
                name="accreditations"
                value={formData.accreditations}
                onChange={handleChange}
                rows="3"
                className="w-full rounded-[7px] border border-[#cfd9e4] px-4 py-3 text-[14px] outline-none focus:border-[#0067c9]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-[8px] bg-[#0067c9] py-3.5 text-[14px] font-bold text-white hover:bg-[#005bb3]"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}