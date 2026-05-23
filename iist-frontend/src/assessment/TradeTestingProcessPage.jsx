import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function TradeTestingProcessPage() {
  const steps = [
    {
      no: "01",
      title: "Select Membership Level",
      text: "Choose Associate, Certified, or Professional based on your background.",
      side: "left",
    },
    {
      no: "02",
      title: "Submit Credentials",
      text: "Training, internships, experience, prior certifications, skill portfolio, work evidence.",
      side: "right",
    },
    {
      no: "03",
      title: "Eligibility Review",
      text: "IISD verifies your submission against the international skill framework.",
      side: "left",
    },
    {
      no: "04",
      title: "LMS & Framework Access",
      text: "Eligible candidates receive preparation material, assessment guidelines, and skill standards.",
      side: "right",
    },
    {
      no: "05",
      title: "Online Standardized Assessment",
      text: "Appear for the digital competency assessment under proctored conditions.",
      side: "left",
    },
    {
      no: "06",
      title: "Trade Test Center Allotment",
      text: "If practical evaluation is required, you are allotted an approved Trade Test Center.",
      side: "right",
    },
    {
      no: "07",
      title: "Practical Trade Test",
      text: "Supervised hands-on evaluation conducted at the approved center.",
      side: "left",
    },
    {
      no: "08",
      title: "Assessment Review",
      text: "Online and practical results are consolidated and reviewed by the council.",
      side: "right",
    },
    {
      no: "09",
      title: "Certification & Registry",
      text: "Receive membership certification, skill credits, digital verification ID, and registry listing.",
      side: "left",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[280px] overflow-hidden bg-[#0b5ca3] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#084f8e] via-[#0b66b4] to-[#1682dc]" />

        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(64deg,transparent_0px,transparent_58px,rgba(255,255,255,0.25)_60px,transparent_62px)]" />
        </div>

        <div className="relative z-10 max-w-[1000px] text-center">
          <p className="mb-4 text-[11px] font-bold tracking-[0.3em] uppercase text-[#ffb21a]">
            Trade Testing Process
          </p>

          <h1 className="font-serif text-white font-medium leading-[0.95] tracking-[-0.04em] text-[36px] sm:text-[48px] lg:text-[54px]">
            Standardized assessment for
            <br />
            real-world competence.
          </h1>

          <p className="mx-auto mt-5 max-w-[750px] text-white text-[16px] leading-[1.6]">
            A nine-step pathway from declaration to certification — designed
            for consistency, transparency, and international recognition.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-4 py-14 overflow-hidden">
        <div className="relative mx-auto max-w-[1050px]">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#d9e4ef] md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex ${
                  step.side === "right" ? "md:justify-end" : "md:justify-start"
                } justify-start`}
              >
                {/* center icon */}
                <div className="absolute left-1/2 top-1/2 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#0067c9] bg-white text-[#0067c9] md:flex">
                  <CheckCircle2 size={16} strokeWidth={2.3} />
                </div>

                {/* card */}
                <div className="w-full md:w-[43%] rounded-[14px] border border-[#d6e0ea] bg-white px-7 py-6">
                  <div className="flex gap-5">
                    <span className="font-serif text-[28px] font-bold leading-none text-[#f5a400]">
                      {step.no}
                    </span>

                    <div>
                      <h3 className="font-serif text-[20px] font-semibold leading-tight text-[#07182d]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-[15px] leading-[1.65] text-[#60728a]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}