import React from "react";
import {
  BadgeCheck,
  Award,
  BriefcaseBusiness,
  UserRound,
  Building2,
} from "lucide-react";

export default function MembershipOverview() {
  const topLevels = [
    {
      level: "LEVEL 1",
      icon: BadgeCheck,
      title: "Associate Skill Member",
      text: "Beginners, students, trainees, interns",
      credits: "0 – 30 credits",
    },
    {
      level: "LEVEL 2",
      icon: Award,
      title: "Certified Skill Member",
      text: "Skilled candidates, internship-completed, course-trained professionals",
      credits: "30 – 70 credits",
      active: true,
    },
    {
      level: "LEVEL 3",
      icon: BriefcaseBusiness,
      title: "Professional Skill Member",
      text: "Experienced professionals, trainers, industry experts, practitioners",
      credits: "70+ credits",
    },
  ];

  const bottomLevels = [
    {
      icon: UserRound,
      title: "Student & Professional Membership",
      text: "Individual candidates from any country apply for skill recognition.",
    },
    {
      icon: Building2,
      title: "Institutional Membership",
      text: "Institutions, academies, and centers join the council network.",
    },
  ];

  return (
    <>
      {/* HERO SECTION - SAME */}
      <section className="relative overflow-hidden bg-[#0b5ca3] min-h-[374px] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#084f8e] via-[#0b66b4] to-[#1682dc]" />

        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(64deg,transparent_0px,transparent_58px,rgba(255,255,255,0.25)_60px,transparent_62px)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[980px] text-center pt-2">
          <p className="mb-5 text-[12px] md:text-[13px] font-bold tracking-[0.35em] uppercase text-[#ffb21a]">
            Membership
          </p>

          <h1 className="font-serif text-white font-semibold leading-[1.1] tracking-[-0.04em] text-[44px] sm:text-[56px] md:text-[56px] lg:text-[56px]">
            Skill is the new global
            <br />
            qualification.
          </h1>

          <p className="mx-auto mt-7 max-w-[880px] text-white text-[18px] md:text-[18px] leading-[1.25] font-normal">
            Declare your skill level, complete standardized assessment, and join
            the global skill registry.
          </p>
        </div>
      </section>

      {/* MEMBERSHIP SECTION */}
      <section className="bg-white px-5 sm:px-8 lg:px-14 py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1450px]">
          <div className="text-center">
            <p className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.55em] text-[#f5a400]">
              Three Membership Levels
            </p>

            <h2 className="mt-3 font-serif text-[30px] sm:text-[36px] lg:text-[36px] font-semibold leading-[1.1] text-[#07182d]">
              Choose the level that fits your skill journey
            </h2>
          </div>

          {/* TOP CARDS */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-7">
            {topLevels.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`relative min-h-[315px] rounded-[14px] px-8 py-8 transition-all duration-300 ${
                    item.active
                      ? "bg-[#fff8e8] border-2 border-[#f3b018] shadow-[0px_10px_38px_rgba(243,176,24,0.18)] lg:scale-[1.02]"
                      : "bg-white border border-[#d8e1ea]"
                  }`}
                >
                  {item.active && (
                    <span className="absolute right-5 top-5 rounded-full bg-[#f3b018] px-4 py-1.5 text-[9px] font-bold uppercase tracking-wide text-[#151515]">
                      Most Common
                    </span>
                  )}

                  <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#7d8da1]">
                    {item.level}
                  </p>

                  <Icon
                    size={34}
                    strokeWidth={2}
                    className={`mt-6 ${
                      item.active ? "text-[#e8a000]" : "text-[#0068c8]"
                    }`}
                  />

                  <h3 className="mt-7 font-serif text-[24px] xl:text-[24px] leading-[1.2] font-semibold text-[#061529]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.7] text-[#60728a]">
                    {item.text}
                  </p>

                  <p
                    className={`mt-7 text-[15px] font-semibold ${
                      item.active ? "text-[#e59d00]" : "text-[#0068c8]"
                    }`}
                  >
                    {item.credits}
                  </p>

                  <button
                    className={`mt-7 text-[13px] font-semibold ${
                      item.active ? "text-[#d99400]" : "text-[#0068c8]"
                    }`}
                  >
                    Apply for this level →
                  </button>
                </div>
              );
            })}
          </div>

          {/* BOTTOM CARDS */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-7">
            {bottomLevels.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="min-h-[180px] rounded-[14px] border border-[#d8e1ea] bg-white px-8 py-8"
                >
                  <Icon size={34} strokeWidth={2} className="text-[#0068c8]" />

                  <h3 className="mt-6 font-serif text-[24px] lg:text-[22px] font-semibold leading-tight text-[#07182d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.7] text-[#60728a]">
                    {item.text}
                  </p>

                  <button className="mt-5 text-[13px] font-semibold text-[#0068c8]">
                    Learn more →
                  </button>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-[16px] bg-[#f7f9fb] px-8 py-12 text-center">
            <h3 className="font-serif text-[26px] lg:text-[30px] font-semibold text-[#07182d]">
              Ready to declare your skill level?
            </h3>

            <p className="mx-auto mt-4 max-w-[720px] text-[14px] leading-[1.7] text-[#60728a]">
              Submit your training, internship, and experience evidence — the
              council will guide you to the right assessment pathway.
            </p>

            <button className="mt-6 rounded-[7px] bg-[#0067c9] px-8 py-3 text-[13px] font-semibold text-white">
              Apply for Membership
            </button>
          </div>
        </div>
      </section>
    </>
  );
}