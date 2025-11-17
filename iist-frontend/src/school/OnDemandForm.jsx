import React, { useRef, useEffect, useState } from "react";
import SignaturePad from "signature_pad";
import axiosInstance from "../api/axiosInstance";

const Input = ({ label, type = "text", value, onChange }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-[#1a4e92] focus:outline-none"
    />
  </div>
);

export default function OnDemandForm() {
  const canvasRef = useRef(null);
  const signatureRef = useRef(null);

  // form states
  const [photoFile, setPhotoFile] = useState(null);
  const [studentName, setStudentName] = useState("");
  const [gender, setGender] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [dob, setDob] = useState("");
  const [qualification, setQualification] = useState("");
  const [skillName, setSkillName] = useState("");
  const [experience, setExperience] = useState("");
  const [lastJob, setLastJob] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;

    const signaturePad = new SignaturePad(canvas, {
      backgroundColor: "#ffffff",
      penColor: "black",
      minWidth: 1,
      maxWidth: 2.5,
      throttle: 10,
    });

    signatureRef.current = signaturePad;

   const resizeCanvas = () => {
  const canvas = canvasRef.current;
  const signaturePad = signatureRef.current;

  const ratio = Math.max(window.devicePixelRatio || 1, 1);
  const width = canvas.parentNode.offsetWidth; // parent width follow karega
  const height = 200;

  canvas.width = width * ratio;
  canvas.height = height * ratio;

  canvas.style.width = "100%";
  canvas.style.height = `${height}px`;

  canvas.getContext("2d").scale(ratio, ratio);

  signaturePad.clear();
};


    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const clearSignature = () => signatureRef.current.clear();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!photoFile) return alert("Please upload photo");
    if (signatureRef.current.isEmpty()) return alert("Please sign the form");

    const signatureData = signatureRef.current.toDataURL("image/png");

    const formData = new FormData();

    formData.append("studentName", studentName);
    formData.append("gender", gender);
    formData.append("fatherName", fatherName);
    formData.append("motherName", motherName);
    formData.append("dob", dob);
    formData.append("qualification", qualification);
    formData.append("skillName", skillName);
    formData.append("experience", experience);
    formData.append("lastJob", lastJob);
    formData.append("address", address);
    formData.append("country", country);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("date", date);

    formData.append("photo", photoFile);
    formData.append("signature", signatureData);

    try {
      const res = await axiosInstance.post("/demand-form/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Form Submitted Successfully!");
      console.log(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to submit form");
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold text-[#1a4e92]">On-Demand Registration Form</h3>

      {/* Photo */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Upload Passport Size Photo *
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhotoFile(e.target.files[0])}
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />
      </div>

      {/* All Inputs with states */}
      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Student Name *" value={studentName} onChange={(e) => setStudentName(e.target.value)} />

        <div>
          <label className="block text-gray-700 font-medium mb-2">Gender *</label>
          <select
            className="w-full border border-gray-300 rounded-xl px-4 py-3"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>

        <Input label="Father’s Name *" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
        <Input label="Mother’s Name *" value={motherName} onChange={(e) => setMotherName(e.target.value)} />

        <Input label="Date of Birth *" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />

        <Input label="Academic Qualification *" value={qualification} onChange={(e) => setQualification(e.target.value)} />

        <Input label="Name of Skill *" value={skillName} onChange={(e) => setSkillName(e.target.value)} />

        <Input label="Experience *" value={experience} onChange={(e) => setExperience(e.target.value)} />

        <Input label="Last Job Name & Address *" value={lastJob} onChange={(e) => setLastJob(e.target.value)} />

        <Input label="Address *" value={address} onChange={(e) => setAddress(e.target.value)} />

        <Input label="Country *" value={country} onChange={(e) => setCountry(e.target.value)} />

        <Input label="Phone *" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <Input label="Email *" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <Input label="Date *" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      {/* Signature */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">
          Applicant’s Digital Signature *
        </label>

<canvas
  ref={canvasRef}
  className="border w-full h-[200px] bg-white rounded-xl block"
  style={{ touchAction: "none" }}
></canvas>


        <button
          type="button"
          onClick={clearSignature}
          className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Clear Signature
        </button>
      </div>

      <button type="submit" className="bg-[#1a4e92] text-white px-8 py-3 rounded-xl">
        Submit
      </button>
    </form>
  );
}
