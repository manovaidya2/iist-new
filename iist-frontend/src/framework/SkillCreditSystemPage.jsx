import React from "react";
import {
  GraduationCap,
  Briefcase,
  Wrench,
  ClipboardCheck,
  Monitor,
  BadgeCheck,
} from "lucide-react";

export default function SkillCreditSystemPage() {
  const creditCards = [
    {
      icon: GraduationCap,
      title: "Verified Training",
      text: "Certified learning, coursework and structured training.",
    },
    {
      icon: Briefcase,
      title: "Internship & Experience",
      text: "Documented workplace exposure and tenure.",
    },
    {
      icon: Wrench,
      title: "Practical Competence",
      text: "Hands-on skill demonstration under supervision.",
    },
    {
      icon: ClipboardCheck,
      title: "Trade Test Performance",
      text: "Results from related Trade Test Centers.",
    },
    {
      icon: Monitor,
      title: "Online Assessment",
      text: "Standardized digital evaluation.",
    },
    {
      icon: BadgeCheck,
      title: "Verified Portfolio",
      text: "Work evidence and prior certifications.",
    },
  ];

  const creditData = [
    { title: "Verified Training", value: 80 },
    { title: "Internship Experience", value: 65 },
    { title: "Work Experience", value: 90 },
    { title: "Online Assessment", value: 75 },
    { title: "Trade Test Performance", value: 70 },
    { title: "Portfolio Evidence", value: 55 },
  ];

  return (
    <div className="bg-white">

      {/* HERO - Responsive */}
      <section className="relative min-h-[280px] md:min-h-[330px] overflow-hidden bg-[#0b5ca3] flex items-center justify-center px-4 py-12 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#084f8e] via-[#0b66b4] to-[#1682dc]" />
        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(64deg,transparent_0px,transparent_58px,rgba(255,255,255,0.25)_60px,transparent_62px)]" />
        </div>
        <div className="relative z-10 max-w-[1000px] text-center">
          <p className="mb-3 md:mb-4 text-[10px] font-bold tracking-[0.35em] uppercase text-[#ffb21a]">
            International Skill Credit System
          </p>
          <h1 className="font-serif text-white font-medium leading-[1.1] md:leading-[0.95] tracking-[-0.04em] text-[32px] sm:text-[42px] md:text-[55px] lg:text-[58px]">
            Global skill credits. Verified
            <br className="hidden sm:block" />
            recognition.
          </h1>
          <p className="mx-auto mt-4 md:mt-6 max-w-[780px] text-white text-[14px] sm:text-[16px] leading-[1.6] md:leading-[1.7] px-3">
            A transparent credit framework that determines membership level,
            certification pathway, and skill recognition across the council
            network.
          </p>
        </div>
      </section>

      {/* FEATURE CARDS - Responsive */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-10">
        <div className="mx-auto max-w-[1350px]">
          {/* Cards Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {creditCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-[10px] border border-[#d7e1ea] bg-white p-5 md:p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <Icon size={24} className="text-[#005fc5]" />
                  <h3 className="mt-3 md:mt-4 font-serif text-[16px] md:text-[17px] font-semibold text-[#07182d]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[11px] md:text-[12px] leading-[1.6] md:leading-[1.7] text-[#667991]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CREDIT COMPOSITION - Responsive */}
          <div className="mt-8 md:mt-10 rounded-[10px] border border-[#d7e1ea] bg-white p-5 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h2 className="font-serif text-[20px] md:text-[22px] font-semibold text-[#07182d]">
                Skill Credit Composition
              </h2>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#9ea8b6]">
                Sample Candidate
              </span>
            </div>

            <div className="mt-6 md:mt-8 space-y-4 md:space-y-5">
              {creditData.map((item, index) => (
                <div key={index}>
                  <div className="mb-1 md:mb-2 flex justify-between flex-wrap gap-2">
                    <span className="text-[13px] md:text-[14px] font-semibold text-[#07182d]">
                      {item.title}
                    </span>
                    <span className="text-[11px] md:text-[12px] text-[#667991]">
                      {item.value} credits
                    </span>
                  </div>
                  <div className="h-[6px] md:h-[7px] rounded-full bg-[#eef2f6]">
                    <div
                      className="h-full rounded-full bg-[#005fc5]"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#9ea8b6]">
                  Total
                </p>
                <h2 className="font-serif text-[28px] md:text-[30px] font-bold text-[#005fc5]">
                  435 Credits
                </h2>
              </div>
              <div className="rounded-full bg-[#f7bc1c] px-5 md:px-6 py-2 text-[14px] md:text-[15px] font-semibold text-[#07182d] text-center w-fit">
                Professional Skill Member
              </div>
            </div>
          </div>

          {/* CREDIT PATH - Responsive */}
          <div className="mt-6 md:mt-8 rounded-[10px] border border-[#d7e1ea] bg-white p-5 md:p-8">
            <h2 className="font-serif text-[20px] md:text-[22px] font-semibold text-[#07182d]">
              Credit Pathway to Membership Level
            </h2>

            <div className="mt-6 md:mt-8 relative">
              <div className="h-[6px] md:h-[7px] rounded-full bg-gradient-to-r from-[#005fc5] via-[#6ca55d] to-[#f7bc1c]" />

              <div className="mt-5 flex flex-col sm:flex-row justify-between text-center gap-4 sm:gap-2">
                <div className="flex-1">
                  <p className="text-[13px] md:text-[14px] font-semibold text-[#07182d]">
                    0–30
                  </p>
                  <p className="text-[11px] md:text-[12px] text-[#667991] mt-1">
                    Associate Skill Member
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-[13px] md:text-[14px] font-bold text-[#07182d]">
                    30–70
                  </p>
                  <p className="text-[11px] md:text-[12px] text-[#667991] mt-1">
                    Certified Skill Member
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-[13px] md:text-[14px] font-semibold text-[#07182d]">
                    70+
                  </p>
                  <p className="text-[11px] md:text-[12px] text-[#667991] mt-1">
                    Professional Skill Member
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}