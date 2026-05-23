import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b5ca3] min-h-[374px] flex items-center justify-center px-4">
      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#084f8e] via-[#0b66b4] to-[#1682dc]" />

      {/* diagonal lines */}
      <div className="absolute inset-0 opacity-[0.12]">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(64deg,transparent_0px,transparent_58px,rgba(255,255,255,0.25)_60px,transparent_62px)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[980px] text-center pt-2">
        <p className="mb-5 text-[12px] md:text-[13px] font-bold tracking-[0.35em] uppercase text-[#ffb21a]">
          International Council for Skill Development
        </p>

        <h1 className="font-serif text-white font-semibold leading-[0.9] tracking-[-0.04em] text-[44px] sm:text-[56px] md:text-[66px] lg:text-[58px]">
          A Global Authority for Skill
          <br />
          Validation
        </h1>

        <p className="mx-auto mt-7 max-w-[880px] text-white text-[18px] md:text-[18px] leading-[1.25] font-normal">
          IISD operates as an international council establishing assessment
          standards, certification
          <br className="hidden md:block" />
          protocols, and a unified skill credit framework recognized across
          borders.
        </p>
      </div>
    </section>
  );
}