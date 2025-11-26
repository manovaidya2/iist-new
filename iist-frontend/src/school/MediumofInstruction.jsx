import React, { useState, useRef } from "react";
import api from "../api/axiosInstance";

export default function App() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);
  const formRef = useRef();

  const handlePreview = (file, setter) => {
    if (!file) return setter(null);
    setter(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const form = e.target;

    if (!form.declarationChecked?.checked) {
      setStatus({
        type: "error",
        message: "Please accept the declaration before submitting.",
      });
      return;
    }

    const fd = new FormData(form);

    try {
      setSubmitting(true);
      setStatus({ type: "info", message: "Uploading..." });

      const res = await api.post("/medium/submit", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const data = res.data; // FIXED

      setStatus({
        type: "success",
        message: data.message || "Submitted successfully",
      });

      form.reset();
      setPhotoPreview(null);
      setSignaturePreview(null);
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Network error or server unreachable.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 border border-gray-200"
        encType="multipart/form-data"
      >
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          IISD – Medium of Instruction Certificate Application Form
        </h1>

        <SectionTitle title="A. Student Details" />
        <div className="grid md:grid-cols-2 gap-4">
          <Input label="Full Name" name="fullName" required />
          <Input label="Father’s / Guardian’s Name" name="fatherName" required />
          <Input label="Date of Birth" name="dob" type="date" required />
          <Select label="Gender" name="gender" required options={["Male", "Female", "Other"]} />
          <Input label="Mobile Number" name="mobile" type="tel" required />
          <Input label="Email ID" name="email" type="email" required />
          <Input label="Aadhaar Number (Optional)" name="aadhaar" />
        </div>

        <Input label="Address" name="address" className="mt-4" required textarea />

        <SectionTitle title="B. Academic Details" />
        <div className="grid md:grid-cols-2 gap-4">
          <Input label="Course Name" name="courseName" required />
          <Input label="Level / Semester / Module" name="semester" required />
          <Input label="Enrollment / Registration Number" name="enrollment" required />
          <Input label="Batch / Session" name="batch" required />
          <Input label="Year of Admission" name="admissionYear" type="number" required />
          <Input label="Year of Completion (Expected/Completed)" name="completionYear" type="number" required />
        </div>

        <SectionTitle title="C. Medium of Instruction Required For" />
        <div className="grid md:grid-cols-2 gap-4">
          <Select
            label="Purpose"
            name="purpose"
            required
            options={["Higher Education", "Job", "Abroad Studies", "Other"]}
          />
          <Input label="Specify Language Required" name="language" required />
        </div>
        <Input label="Reason for Requirement" name="reason" className="mt-4" required textarea />

        <SectionTitle title="Student Confirmation" />
        <div className="grid md:grid-cols-2 gap-4">
          <FileInput
            label="Upload Student Signature (png/jpg/pdf)"
            name="signature"
            accept="image/*,application/pdf"
            required
            onChange={(file) => handlePreview(file, setSignaturePreview)}
          />
          <Input label="Date" name="date" type="date" required />
        </div>
        <Input label="Place" name="place" className="mt-4" required />

        <SectionTitle title="E. Documents to be Attached" />
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>ID Proof (Aadhaar / PAN / Driving License)</li>
          <li>Academic Transcript / Marksheets</li>
          <li>Fee Receipt (if applicable)</li>
          <li>Passport Size Photograph</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <FileInput label="Upload ID Proof (pdf/jpg)" name="idProof" accept="image/*,application/pdf" required />
          <FileInput label="Upload Transcript / Marksheets (pdf)" name="transcript" accept="application/pdf" required />
          <FileInput label="Upload Fee Receipt (if any)" name="feeReceipt" accept="image/*,application/pdf" />
          <FileInput
            label="Upload Passport Size Photo (jpg/png)"
            name="photo"
            accept="image/*"
            required
            onChange={(file) => handlePreview(file, setPhotoPreview)}
          />
        </div>

        <SectionTitle title="D. Declaration by Student" />
        <p className="text-gray-700 leading-relaxed mb-4">
          I hereby declare that all the information provided above is true and correct.
        </p>

        <div className="flex items-center gap-2 mb-4 mt-6">
          <input type="checkbox" id="dec" name="declarationChecked" value="yes" className="w-5 h-5" />
          <label htmlFor="dec" className="text-gray-800 font-medium">I agree to the above declaration</label>
        </div>

        {status && (
          <div
            className={`p-3 rounded-md mb-4 ${
              status.type === "error"
                ? "bg-red-100 text-red-800"
                : status.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 w-full bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-800 transition disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {photoPreview && (
            <PreviewCard title="Photo Preview">
              <img src={photoPreview} alt="photo" className="max-h-48 object-cover rounded" />
            </PreviewCard>
          )}
          {signaturePreview && (
            <PreviewCard title="Signature Preview">
              <img src={signaturePreview} alt="signature" className="max-h-48 object-contain rounded" />
            </PreviewCard>
          )}
        </div>
      </form>
    </div>
  );
}

const SectionTitle = ({ title }) => (
  <h2 className="text-xl font-semibold text-blue-600 border-l-4 border-blue-600 pl-3 mt-8 mb-4">
    {title}
  </h2>
);

const Input = ({ label, type = "text", className = "", name, required, textarea }) => (
  <div className={`flex flex-col ${className}`}>
    <label className="font-medium text-gray-700 mb-1">{label}</label>
    {textarea ? (
      <textarea
        name={name}
        required={required}
        className="border border-gray-300 rounded-lg px-3 py-2 h-28"
      />
    ) : (
      <input
        type={type}
        name={name}
        required={required}
        className="border border-gray-300 rounded-lg px-3 py-2"
      />
    )}
  </div>
);

const Select = ({ label, name, options, required }) => (
  <div className="flex flex-col">
    <label className="font-medium text-gray-700 mb-1">{label}</label>
    <select
      name={name}
      required={required}
      className="border border-gray-300 rounded-lg px-3 py-2"
    >
      <option value="">Select</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

const FileInput = ({ label, name, accept, required, onChange }) => (
  <div className="flex flex-col">
    <label className="font-medium text-gray-700 mb-1">{label}</label>
    <input
      name={name}
      type="file"
      required={required}
      accept={accept}
      onChange={(e) => onChange?.(e.target.files[0])}
      className="border border-gray-300 rounded-lg px-3 py-2"
    />
  </div>
);

const PreviewCard = ({ title, children }) => (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
    <div className="font-medium text-gray-700 mb-2">{title}</div>
    {children}
  </div>
);
