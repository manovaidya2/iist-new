import React from "react";
import {
  Globe2,
  ShieldCheck,
  BookOpenCheck,
  Network,
  Scale,
  Landmark,
} from "lucide-react";

export default function MandateSection() {
  const cards = [
    {
      icon: Globe2,
      title: "Global Framework",
      text: "Unified skill standards mapped across countries, industries, and trades.",
    },
    {
      icon: ShieldCheck,
      title: "Verification Authority",
      text: "Digital identity, certificate authentication, and tamper-evident records.",
    },
    {
      icon: BookOpenCheck,
      title: "Standardized Assessment",
      text: "Online proctored assessments paired with practical trade testing.",
    },
    {
      icon: Network,
      title: "Council Network",
      text: "Approved institutions, trade test centers, and industry partners worldwide.",
    },
    {
      icon: Scale,
      title: "Skill Credit System",
      text: "Transparent credit framework recognizing training, experience, and competence.",
    },
    {
      icon: Landmark,
      title: "Institutional Mandate",
      text: "Operating as the International Council for Skill Development.",
    },
  ];

return (
  <section className="bg-white py-16 lg:py-24 px-6 lg:px-12">
    <div className="w-full  mx-auto">

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {cards.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="min-h-[180px] rounded-[12px] border border-[#d8e0ea] bg-white px-9 py-8 hover:shadow-md duration-300"
            >
              <Icon
                size={34}
                strokeWidth={2}
                className="mb-6 text-[#005ec4]"
              />

              <h3 className="font-serif text-[20px] font-semibold text-[#001938]">
                {item.title}
              </h3>

              <p className="mt-4 text-[15px] leading-[1.5] text-[#5a6f86]">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="mt-24 grid lg:grid-cols-[1fr_620px] gap-16 items-center">

        {/* Left Side */}
        <div>

          <p className="text-[14px] uppercase tracking-[0.35em] font-bold text-[#f4a000]">
            Our Mandate
          </p>

          <h2 className="mt-5 font-serif text-[46px] lg:text-[46px] leading-[1] font-semi   bold text-[#061529]">
            From local skills to
            <br />
            international standards.
          </h2>

          <p className="mt-8 max-w-[650px] text-[18px] leading-[1.5] text-[#566d86]">
            The International Council for Skill Development establishes
            a globally consistent approach to declaring, assessing,
            and certifying practical competence. Candidates from any
            country can apply for membership, receive standardized
            assessment, and join a verified skill registry.
          </p>

          <p className="mt-6 max-w-[650px] text-[18px] leading-[2] text-[#566d86]">
            Institutions, trade academies, and industry labs partner
            with the council as approved Trade Test Centers —
            extending the council's reach into every region.
          </p>

        </div>

        {/* Right Stats Card */}
        <div className="rounded-[16px] bg-[#04559c] p-12 text-white">

          <h2 className="font-serif text-[50px] font-bold leading-none">
            2026
          </h2>

          <p className="mt-2 text-[18px]">
            Council framework active
          </p>

          <div className="mt-14 grid grid-cols-2 gap-y-12">

            <div>
              <h3 className="text-[36px] font-serif font-bold text-[#ffbd1c]">
                50+
              </h3>

              <p className="mt-2 text-[15px]">
                Member Countries
              </p>
            </div>

            <div>
              <h3 className="text-[36px] font-serif font-bold text-[#ffbd1c]">
                10
              </h3>

              <p className="mt-2 text-[15px]">
                Skill Schools
              </p>
            </div>

            <div>
              <h3 className="text-[42px] font-serif font-bold text-[#ffbd1c]">
                3
              </h3>

              <p className="mt-2 text-[15px]">
                Membership Levels
              </p>
            </div>

            <div>
              <h3 className="text-[42px] font-serif font-bold text-[#ffbd1c]">
                ∞
              </h3>

              <p className="mt-2 text-[15px]">
                Skill Pathways
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
);
}