import React from "react";
import {
  ClipboardCheck,
  ShieldCheck,
  Upload,
  MapPin,
} from "lucide-react";

export default function TradeTestCenterPage() {
  const cards = [
    {
      icon: ClipboardCheck,
      title: "Conduct Practical Trade Tests",
      text: "Supervised hands-on evaluations under council protocols.",
    },
    {
      icon: ShieldCheck,
      title: "Verify Practical Skills",
      text: "Standardized practical competency validation.",
    },
    {
      icon: Upload,
      title: "Upload Assessment Reports",
      text: "Direct reporting into the council assessment system.",
    },
    {
      icon: MapPin,
      title: "Support Regional Candidates",
      text: "Serve allotted candidates from your region.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[355px] overflow-hidden bg-[#0b5ca3] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#084f8e] via-[#0b66b4] to-[#1682dc]" />

        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(64deg,transparent_0px,transparent_58px,rgba(255,255,255,0.25)_60px,transparent_62px)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1050px] text-center">
          <p className="mb-5 text-[11px] font-bold tracking-[0.35em] uppercase text-[#ffb21a]">
            Trade Test Center Network
          </p>

          <h1 className="font-serif text-white font-medium leading-[0.95] tracking-[-0.02em] text-[40px] sm:text-[54px] lg:text-[55px]">
            A global network of approved
            <br />
            practical assessment centers.
          </h1>

          <p className="mx-auto mt-6 max-w-[860px] text-white text-[17px] leading-[1.45] font-medium">
            Institutions, skill centers, technical academies, and industry labs
            are approved by the council
            <br className="hidden md:block" />
            to conduct practical trade testing.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 sm:px-8 lg:px-12 py-20">
        <div className="mx-auto max-w-[1350px]">
          {/* TOP CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {cards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="min-h-[170px] rounded-[10px] border border-[#cfd9e4] bg-white px-8 py-8"
                >
                  <Icon
                    size={34}
                    strokeWidth={2}
                    className="text-[#0067c9]"
                  />

                  <h3 className="mt-8 font-serif text-[18px] font-semibold text-[#07182d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[1.7] text-[#60728a]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* MODES */}
          <div className="mt-16 rounded-[10px] border border-[#cfd9e4] bg-white px-8 py-8">
            <h2 className="font-serif text-[21px] font-semibold text-[#07182d]">
              Two Assessment Modes
            </h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[8px] bg-[#f8fafc] px-8 py-7">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#7d8da1]">
                  Mode 1
                </p>

                <h3 className="mt-3 text-[15px] font-semibold text-[#07182d]">
                  Online Only
                </h3>

                <p className="mt-2 text-[13px] leading-[1.65] text-[#60728a]">
                  Standardized online proctored assessment for theoretical and
                  applied competence.
                </p>
              </div>

              <div className="rounded-[8px] border border-[#f3b018] bg-[#fff8e8] px-8 py-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7d8da1]">
                  Mode 2
                </p>

                <h3 className="mt-3 text-[15px] font-bold text-[#07182d]">
                  Online + Practical Trade Testing
                </h3>

                <p className="mt-2 text-[13px] leading-[1.65] text-[#60728a]">
                  Online assessment combined with supervised hands-on evaluation
                  at an approved Trade Test Center.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-[14px] bg-gradient-to-r from-[#075596] to-[#0d7be4] px-8 py-14 text-center text-white">
            <h2 className="font-serif text-[28px] md:text-[30px] font-semibold leading-tight">
              Apply to become an Approved Trade Test Center
            </h2>

            <p className="mx-auto mt-4 max-w-[720px] text-[14px] leading-[1.7] font-medium">
              Extend the council framework into your region and conduct
              internationally aligned practical assessments.
            </p>

            <button className="mt-8 rounded-[7px] bg-[#ffc21a] px-10 py-3.5 text-[13px] font-bold text-[#07182d]">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}