import React, { useState } from "react";
import {
  Search,
  ShieldCheck,
  Globe2,
  QrCode,
  Database,
} from "lucide-react";

export default function GlobalSkillRegistryPage() {
  const [query, setQuery] = useState("");

  const cards = [
    {
      icon: ShieldCheck,
      title: "Tamper-Evident Records",
      text: "Council-authenticated entries with secure verification.",
    },
    {
      icon: Globe2,
      title: "Global Accessibility",
      text: "Verifiable from anywhere with a membership ID or certificate.",
    },
    {
      icon: QrCode,
      title: "QR-Based Authentication",
      text: "Every digital ID carries a scannable verification code.",
    },
    {
      icon: Database,
      title: "Full Skill History",
      text: "Credits, certifications, and trade test records in one record.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Verify:", query);
  };

  return (
    <div className="bg-white">

      {/* HERO */}

      <section className="relative min-h-[430px] overflow-hidden bg-[#0b5ca3] flex items-center justify-center px-4">

        <div className="absolute inset-0 bg-gradient-to-r from-[#084f8e] via-[#0b66b4] to-[#1682dc]" />

        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(64deg,transparent_0px,transparent_58px,rgba(255,255,255,0.25)_60px,transparent_62px)]" />
        </div>

        <div className="relative z-10 mx-auto text-center">

          <p className="mb-5 text-[12px] font-bold tracking-[0.5em] uppercase text-[#ffb21a]">
            Global Skill Registry
          </p>

          <h1 className="font-serif text-white font-semibold leading-[0.95] tracking-[-0.04em] text-[48px] sm:text-[56px] lg:text-[56px]">
            One registry. Verified
            <br />
            worldwide.
          </h1>

          <p className="mx-auto mt-8 max-w-[1100px] text-white text-[20px] leading-[1.45] font-medium">
            Every council-recognized candidate is listed in a digital registry
            with verification, membership
            <br className="hidden md:block" />
            status, and skill history.
          </p>

        </div>
      </section>

      {/* CONTENT */}

      <section className="px-4 sm:px-6 lg:px-20 py-14">

        <div className="mx-auto max-w-[1250px]">

          {/* VERIFY BOX */}

          <div className="rounded-[12px] border border-[#cfd9e4] bg-white px-6 py-6">

            <h2 className="text-[15px] font-semibold text-[#07182d]">
              Verify Membership / Certificate
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-4 flex flex-col gap-3 md:flex-row"
            >

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Membership ID, Certificate No., or Candidate Name"
                className="h-[50px] flex-1 rounded-[8px] border border-[#cfd9e4] px-4 text-[14px] text-[#60728a] outline-none focus:border-[#0067c9]"
              />

              <button
                type="submit"
                className="flex h-[50px] items-center justify-center gap-2 rounded-[8px] bg-[#0067c9] px-6 text-[14px] font-semibold text-white"
              >
                <Search size={17} />
                Verify
              </button>

            </form>

            <p className="mt-3 text-[11px] text-[#60728a]">
              Demo registry — results are illustrative.
            </p>

          </div>

          {/* CARDS */}

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {cards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="min-h-[200px] rounded-[12px] border border-[#cfd9e4] bg-white px-6 py-6 hover:shadow-md duration-300"
                >

                  <Icon
                    size={32}
                    strokeWidth={2}
                    className="text-[#0067c9]"
                  />

                  <h3 className="mt-6 text-[18px] font-semibold leading-tight text-[#07182d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.6] text-[#60728a]">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </div>
  );
}