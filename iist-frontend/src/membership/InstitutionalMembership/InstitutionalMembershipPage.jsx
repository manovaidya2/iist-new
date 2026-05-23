import React from "react";
import { CheckCircle2 } from "lucide-react";
import MembershipApplicationForm from "./MembershipApplicationForm";

export default function InstitutionalMembershipPage() {
  const benefits = [
    "Global institutional recognition",
    "Enroll students under the IISD council framework",
    "Conduct training aligned to international skill standards",
    "Prepare candidates for council assessments",
    "Apply to become an Approved Trade Test Center",
    "Access to assessment, certification, and skill credit systems",
    "Listing in the council’s global institutional registry",
    "Participation in the international skill network",
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[430px] overflow-hidden bg-[#0b5ca3] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#084f8e] via-[#0b66b4] to-[#1682dc]" />

        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(64deg,transparent_0px,transparent_58px,rgba(255,255,255,0.25)_60px,transparent_62px)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1120px] text-center">
          <p className="mb-5 text-[11px] font-bold tracking-[0.3em] uppercase text-[#ffb21a]">
            Institutional Membership
          </p>

          <h1 className="font-serif text-white font-medium leading-[0.95] tracking-[-0.04em] text-[40px] sm:text-[56px] lg:text-[56px]">
            Institutions can now become
            <br />
            part of a global skill assessment
            <br />
            network.
          </h1>

          <p className="mx-auto mt-7 max-w-[900px] text-white text-[18px] leading-[1.45] font-medium">
            Educational institutions, training academies, and vocational
            organizations join the International
            <br className="hidden md:block" />
            Council for Skill Development as recognized members.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 sm:px-8 lg:px-12 py-20">
        <div className="mx-auto max-w-[1350px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex min-h-[78px] items-center gap-4 rounded-[8px] border border-[#cfd9e4] bg-white px-7 py-5"
              >
                <CheckCircle2
                  size={18}
                  strokeWidth={2}
                  className="shrink-0 text-[#0067c9]"
                />

                <p className="text-[17px] font-medium leading-[1.6] text-[#102b49]">
                  {item}
                </p>
              </div>
            ))}
          </div>

      <MembershipApplicationForm />
          {/* CTA */}
          <div className="mt-16 rounded-[14px] bg-[#f8fafc] px-8 py-14 text-center">
            <h2 className="font-serif text-[28px] md:text-[30px] font-semibold text-[#07182d]">
              Bring your institution into the council network
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-[1.7] text-[#60728a]">
              Submit your institutional profile and infrastructure details.
              Eligible institutions gain access to the full council framework.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="rounded-[7px] bg-[#0067c9] px-9 py-3.5 text-[15px] font-semibold text-white">
                Apply for Institutional Membership
              </button>

              <button className="rounded-[7px] border border-[#cfd9e4] bg-white px-9 py-3.5 text-[13px] font-bold text-[#07182d]">
                Become a Trade Test Center
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}