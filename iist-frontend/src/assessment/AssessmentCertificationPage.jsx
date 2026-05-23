import React from "react";
import {
  Monitor,
  Wrench,
  ShieldCheck,
  FileCheck2,
  BadgeCheck,
} from "lucide-react";

export default function AssessmentCertificationPage() {
  const assessmentCards = [
    {
      icon: Monitor,
      title: "Online Standardized Assessment",
      text: "Proctored digital assessment built around the council’s skill framework. Required for all membership levels.",
    },
    {
      icon: Wrench,
      title: "Practical Trade Testing",
      text: "Hands-on evaluation at an allotted Approved Trade Test Center. Required for practical-intensive skill areas.",
      highlight: true,
    },
  ];

  const outputs = [
    {
      icon: ShieldCheck,
      title: "Membership Certification",
      text: "International recognition at your assessed skill level.",
    },
    {
      icon: FileCheck2,
      title: "Skill Credits",
      text: "Earned across training, internship, experience, and assessment.",
    },
    {
      icon: Monitor,
      title: "Digital Verification ID",
      text: "Authenticated record accessible globally via the registry.",
    },
    {
      icon: Wrench,
      title: "Registry Listing",
      text: "Public verification entry in the Global Skill Registry.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[360px] overflow-hidden bg-[#0b5ca3] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#084f8e] via-[#0b66b4] to-[#1682dc]" />

        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(64deg,transparent_0px,transparent_58px,rgba(255,255,255,0.25)_60px,transparent_62px)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1050px] text-center">
          <p className="mb-5 text-[11px] font-bold tracking-[0.35em] uppercase text-[#ffb21a]">
            Assessment & Certification
          </p>

          <h1 className="font-serif text-white font-medium leading-[0.95] tracking-[-0.04em] text-[40px] sm:text-[54px] lg:text-[56px]">
            International recognition for
            <br />
            practical excellence.
          </h1>

          <p className="mx-auto mt-7 max-w-[850px] text-white text-[18px] leading-[1.45] font-medium">
            Online standardized assessment paired with optional practical trade
            testing — culminating in
            <br className="hidden md:block" />
            council-issued certification.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 sm:px-8 lg:px-12 py-20">
        <div className="mx-auto max-w-[1350px]">
          {/* Assessment cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {assessmentCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`min-h-[190px] rounded-[10px] border px-8 py-8 ${
                    item.highlight
                      ? "border-[#f5a400] bg-[#fff8e8]"
                      : "border-[#cfd9e4] bg-white"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-[8px] ${
                      item.highlight
                        ? "bg-[#f5b400] text-[#07182d]"
                        : "text-[#0067c9]"
                    }`}
                  >
                    <Icon size={28} strokeWidth={2.1} />
                  </div>

                  <h3 className="mt-7 font-serif text-[20px] font-semibold leading-tight text-[#07182d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[520px] text-[14px] leading-[1.7] text-[#60728a]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Output heading */}
          <div className="mt-16 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f5a400]">
              Certification Outputs
            </p>

            <h2 className="mt-3 font-serif text-[28px] md:text-[32px] font-semibold leading-tight text-[#07182d]">
              What every certified member receives
            </h2>
          </div>

          {/* Output cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {outputs.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="min-h-[185px] rounded-[10px] border border-[#cfd9e4] bg-white px-6 py-7 text-center"
                >
                  <Icon
                    size={34}
                    strokeWidth={2}
                    className="mx-auto text-[#0067c9]"
                  />

                  <h3 className="mt-6 font-serif text-[17px] font-medium leading-tight text-[#07182d]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[190px] text-[13px] leading-[1.7] text-[#60728a]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-[14px] bg-[#f8fafc] px-8 py-12 text-center">
            <h2 className="font-serif text-[26px] md:text-[30px] font-semibold text-[#07182d]">
              Book your assessment session
            </h2>

            <button className="mt-6 rounded-[7px] bg-[#0067c9] px-10 py-3.5 text-[14px] font-semibold text-white">
              Book Assessment Session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}