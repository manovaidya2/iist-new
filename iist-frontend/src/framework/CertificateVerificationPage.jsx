import React, { useState } from "react";
import {
  Search,
  CheckCircle,
  Shield,
} from "lucide-react";

export default function CertificateVerificationPage() {
  const [certificateId, setCertificateId] = useState("");

  const features = [
    {
      icon: CheckCircle,
      title: "Real-time Validation",
      text: "Instant verification against central registry",
    },
    {
      icon: Shield,
      title: "Centralized Registry",
      text: "All certificates stored in secure database",
    },
    {
      icon: CheckCircle,
      title: "Institution-Independent",
      text: "Verified directly by IISD authority",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Certificate:", certificateId);

    alert("Verification Requested");
  };

  return (
    <div className="bg-white">

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#0b5ca3] min-h-[260px] flex items-center justify-center px-4">

        <div className="absolute inset-0 bg-gradient-to-r from-[#084f8e] via-[#0b66b4] to-[#1682dc]" />

        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(64deg,transparent_0px,transparent_58px,rgba(255,255,255,0.25)_60px,transparent_62px)]" />
        </div>

        <div className="relative z-10 text-center">

          <h1 className="font-serif text-[#07182d] font-semibold leading-[0.95] tracking-[-0.04em] text-[48px] sm:text-[60px] lg:text-[64px]">
            Certificate Verification
          </h1>

          <p className="mx-auto mt-6 max-w-[900px] text-[#d6d6d6] text-[18px] leading-[1.45] font-medium">
            Enter Global Skill ID or Scan QR Code to verify authenticity
            of any IISD-issued certification.
          </p>

        </div>

      </section>

      {/* CONTENT */}

      <section className="px-4 py-16">

        <div className="mx-auto max-w-[920px]">

          {/* Verify Box */}

          <div className="rounded-[18px] border border-[#d8e1ea] bg-white px-6 py-7 shadow-lg">

            <h2 className="text-[20px] font-semibold text-[#07182d]">
              Enter Certificate ID
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col md:flex-row gap-4"
            >

              <input
                type="text"
                value={certificateId}
                onChange={(e) =>
                  setCertificateId(e.target.value)
                }
                placeholder="Enter certificate ID (e.g., IISD/2024/12345)"
                className="h-[54px] flex-1 rounded-[8px] border border-[#cfd9e4] px-4 text-[14px] outline-none focus:border-[#0067c9]"
              />

              <button
                type="submit"
                className="flex h-[54px] items-center justify-center gap-2 rounded-[8px] bg-[#0067c9] px-8 text-[14px] font-semibold text-white"
              >
                <Search size={18} />
                Verify
              </button>

            </form>

            <p className="mt-5 text-[14px] text-[#667991]">
              Or scan the QR code on the certificate for instant verification
            </p>

          </div>

          {/* Features */}

          <div className="mt-14 text-center">

            <h2 className="font-serif text-[30px] font-semibold text-[#07182d]">
              Verification Features
            </h2>

          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[14px] bg-[#fafafa] px-4 py-6 text-center"
                >

                  <Icon
                    size={42}
                    className="mx-auto text-[#0067c9]"
                  />

                  <h3 className="mt-6 text-[20px] font-semibold text-[#07182d]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-[1.7] text-[#667991]">
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