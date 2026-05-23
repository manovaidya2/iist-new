import React from "react";
import {
  BadgeCheck,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";
import MembershipApplicationForm from "./MembershipApplicationForm";

export default function MembershipPage() {
  const levels = [
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

  const benefits = [
    "Global skill recognition under the International Council",
    "Standardized online + practical trade testing",
    "Digital verification ID and registry listing",
    "International Skill Credits across training, experience, and assessment",
    "LMS access for preparation and assessment guidelines",
    "Pathway to higher membership levels as skills evolve",
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[360px] overflow-hidden bg-[#0b5ca3] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#084f8e] via-[#0b66b4] to-[#1682dc]" />

        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(64deg,transparent_0px,transparent_58px,rgba(255,255,255,0.25)_60px,transparent_62px)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[980px] text-center">
          <p className="mb-5 text-[11px] md:text-[12px] font-bold tracking-[0.3em] uppercase text-[#ffb21a]">
            Student & Professional Membership
          </p>

          <h1 className="font-serif text-white font-semibold leading-[0.95] tracking-[-0.04em] text-[42px] sm:text-[54px] lg:text-[52px]">
            Declare your skill level. Get
            <br />
            assessed. Get recognized.
          </h1>

          <p className="mx-auto mt-6 max-w-[760px] text-white text-[16px] md:text-[18px] leading-[1.45] font-medium">
            Open to students, trainees, course-trained professionals, and
            experienced practitioners worldwide.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 sm:px-8 lg:px-12 py-20">
        <div className="mx-auto max-w-[1350px]">
          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {levels.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`relative min-h-[360px] rounded-[8px] border px-8 py-8 ${
                    item.active
                      ? "border-[#f5a400] bg-[#fff8e8]"
                      : "border-[#cfd9e4] bg-[#f8fbff]"
                  }`}
                >
                  {item.active && (
                    <span className="absolute right-6 top-6 rounded-full bg-[#f5b400] px-4 py-1.5 text-[9px] font-bold uppercase text-[#07182d]">
                      Most Common
                    </span>
                  )}

                  <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#6b7d91]">
                    {item.level}
                  </p>

                  <Icon size={30} className="mt-7 text-[#0067c9]" />

                  <h3 className="mt-7 font-serif text-[22px] font-bold leading-tight text-[#07182d]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-[1.75] text-[#60728a]">
                    {item.text}
                  </p>

                  <p className="mt-7 text-[13px] font-semibold text-[#0067c9]">
                    {item.credits}
                  </p>

                  <button className="mt-6 text-[12px] font-semibold text-[#0067c9]">
                    Apply for this level →
                  </button>
                </div>
              );
            })}
          </div>

          {/* BENEFITS */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex min-h-[74px] items-center gap-4 rounded-[7px] border border-[#cfd9e4] bg-white px-7 py-5"
              >
                <CheckCircle2
                  size={18}
                  strokeWidth={2}
                  className="shrink-0 text-[#0067c9]"
                />
                <p className="text-[16px] font-medium leading-[1.55] text-[#233a57]">
                  {item}
                </p>
              </div>
            ))}
          </div>

      <MembershipApplicationForm />
          {/* CTA */}
          <div className="mt-16 rounded-[14px] bg-gradient-to-r from-[#075596] to-[#0d7be4] px-8 py-14 text-center text-white">
            <h2 className="font-serif text-[30px] md:text-[32px] font-bold leading-tight">
              Begin your membership application
            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-[16px] leading-[1.7] font-medium">
              Submit credentials in minutes. Review and assessment follow
              standardized council protocols.
            </p>

            <button className="mt-8 rounded-[7px] bg-[#ffc21a] px-9 py-3.5 text-[14px] font-semibold text-[#07182d]">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}