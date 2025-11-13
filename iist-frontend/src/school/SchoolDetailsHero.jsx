import React, { useEffect, useState } from "react";
import { FaCut, FaPalette, FaShoppingBag, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "../api/axiosInstance";

export default function SchoolDetailsHero() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const res = await axios.get(`/student-programs/${id}`);
        setProgram(res.data);
      } catch (error) {
        console.error("Error fetching program:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProgram();
  }, [id]);

  // Download brochure handler
  const handleDownload = async (file) => {
    try {
      // const baseURL = "http://localhost:5008"; 
       const baseURL = "https://api.iisd.io/";// Adjust to your backend URL
      const fileURL = `${baseURL}/uploads/brochures/${file}`;
      const response = await axios.get(fileURL, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = file;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading brochure:", error);
      alert("Failed to download brochure. Please try again.");
    }
  };

  if (loading) return <div className="text-center py-20 text-white">Loading...</div>;
  if (!program) return <div className="text-center py-20 text-white">Program not found.</div>;

  return (
    <section className="w-full bg-[#1a4e92] text-white py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative top shape */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 -translate-y-1/2 pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,96L40,101.3C80,107,160,117,240,122.7C320,128,400,128,480,117.3C560,107,640,85,720,80C800,75,880,85,960,90.7C1040,96,1120,96,1200,96C1280,96,1360,96,1400,96L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            fill="#0f3b70"
            opacity="0.9"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 px-3 py-1 rounded-full text-sm font-medium w-max">
              <FaCut className="text-white/90" />
              <span>{program.title}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              {program.title}
            </h1>

            <p className="text-sm md:text-base max-w-xl text-white/90">{program.about}</p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="#enroll"
                className="inline-flex items-center gap-3 bg-white text-[#1a4e92] font-semibold px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition"
              >
                Enroll Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 1.414L9.414 11H17a1 1 0 110 2H9.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6z" clipRule="evenodd"/>
                </svg>
              </a>

              {program.brochures?.length > 0 && (
                <button
                  onClick={() => handleDownload(program.brochures[0])}
                  className="inline-flex items-center gap-2 text-sm text-white/90 underline hover:text-white/100"
                >
                  <FaDownload /> Download brochure
                </button>
              )}
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-3 gap-4 mt-2 max-w-xl">
              {program.qualificationLevels?.map((q, idx) => (
                <div key={idx} className="bg-white/6 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold">{q.duration}</div>
                  <div className="text-xs text-white/80">{q.level}</div>
                  <div className="text-xs text-white/70">{q.title}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Scrollable program list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md bg-white/6 rounded-2xl p-4 backdrop-blur-md shadow-lg flex flex-col">
              <div
                className="grid grid-cols-1 gap-3 overflow-y-auto"
                style={{ maxHeight: "400px" }} // ✅ Fixed height, scrollable if content overflows
              >
                {program.programList?.map((p, idx) => (
                  <FeatureCard
                    key={idx}
                    icon={idx % 3 === 0 ? <FaPalette /> : idx % 3 === 1 ? <FaCut /> : <FaShoppingBag />}
                    title={p.program}
                    desc={`${p.level} — ${p.duration}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient bottom */}
      <div className="absolute bottom-0 left-0 w-full h-28 pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,32L40,42.7C80,53,160,75,240,101.3C320,128,400,160,480,170.7C560,181,640,171,720,154.7C800,139,880,117,960,112C1040,107,1120,117,1200,112C1280,107,1360,85,1400,74.7L1440,64L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z"
            fill="#0f3b70"
            opacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 bg-white/4 p-3 rounded-lg">
      <div className="p-2 bg-white/8 rounded-md text-white/95 text-xl">{icon}</div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-white/80">{desc}</div>
      </div>
    </div>
  );
}
