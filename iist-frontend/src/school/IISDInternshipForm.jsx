  import React, { useState } from "react";
  import api from "../api/axiosInstance";

  export default function IISDInternshipForm() {
    const [form, setForm] = useState({
      fullName: "",
      guardianName: "",
      dob: "",
      gender: "",
      mobile: "",
      email: "",
      aadhaar: "",
      address: "",
      courseName: "",
      levelModule: "",
      enrollmentNumber: "",
      batchSession: "",
      currentStatus: "",
      preferredSector: "",
      preferredLocation: "",
      trainingDuration: "",
      mode: "Full-time",
      type: "On-site",
      experience: "No Previous Experience",
      experienceDetails: "",
      orgName: "",
      orgContactPerson: "",
      orgAddress: "",
      orgContactNumber: "",
      orgEmail: "",
      industryType: "",
      objective1: "",
      objective2: "",
      objective3: "",
      declarationAgreed: false,
      date: "",
      place: "",
    });

    const [files, setFiles] = useState({
      idProof: null,
      photo: null,
      resume: null,
      marksheets: [],
      consent: null,
      signature: null,
    });

    // handle input
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    // handle file input
    const handleFile = (e) => {
      const name = e.target.name;

      if (e.target.multiple) {
        setFiles({ ...files, [name]: [...e.target.files] });
      } else {
        setFiles({ ...files, [name]: e.target.files[0] });
      }
    };

    // submit
    const handleSubmit = async (e) => {
      e.preventDefault();

      const fd = new FormData();

      // add normal fields
      Object.keys(form).forEach((key) => {
        fd.append(key, form[key]);
      });

      // add file fields
      Object.keys(files).forEach((key) => {
        if (Array.isArray(files[key])) {
          files[key].forEach((f) => fd.append(key, f));
        } else {
          fd.append(key, files[key]);
        }
      });

      try {
        const res = await api.post("/internship/submit", fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        alert("Form Submitted Successfully!");
        console.log(res.data);
      } catch (err) {
        console.error(err);
        alert("Error submitting form!");
      }
    };

    return (
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-2xl mb-10"
      >
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
          IISD – Practical Training / Internship Application Form
        </h1>

        {/* A. Student Details */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            A. Student Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input name="fullName" value={form.fullName} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Full Name" />

            <input name="guardianName" value={form.guardianName} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Father’s / Guardian’s Name" />

            <input type="date" name="dob" value={form.dob} onChange={handleChange} className="p-2 border rounded-xl" />

            <input name="gender" value={form.gender} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Gender" />

            <input name="mobile" value={form.mobile} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Mobile Number" />

            <input name="email" value={form.email} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Email ID" />

            <input name="aadhaar" value={form.aadhaar} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Aadhaar Number (Optional)" />

            <textarea name="address" value={form.address} onChange={handleChange} className="p-3 border rounded-xl md:col-span-2" placeholder="Address"></textarea>
          </div>
        </section>

        {/* B. Course & Academic */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            B. Course & Academic Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="courseName" value={form.courseName} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Course Name" />

            <input name="levelModule" value={form.levelModule} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Level / Semester / Module" />

            <input name="enrollmentNumber" value={form.enrollmentNumber} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Enrollment / Registration Number" />

            <input name="batchSession" value={form.batchSession} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Batch / Session" />

            <input name="currentStatus" value={form.currentStatus} onChange={handleChange} className="p-3 border rounded-xl md:col-span-2" placeholder="Current Status" />
          </div>
        </section>

        {/* C. Training Preferences */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            C. Training / Internship Preferences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="preferredSector" value={form.preferredSector} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Preferred Sector / Department" />

            <input name="preferredLocation" value={form.preferredLocation} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Preferred Location" />

            <input name="trainingDuration" value={form.trainingDuration} onChange={handleChange} className="p-3 border rounded-xl md:col-span-2" placeholder="Training Duration (Start - End Date)" />

            <select name="mode" value={form.mode} onChange={handleChange} className="p-3 border rounded-xl">
              <option>Full-time</option>
              <option>Part-time</option>
            </select>

            <select name="type" value={form.type} onChange={handleChange} className="p-3 border rounded-xl">
              <option>On-site</option>
              <option>Online</option>
              <option>Hybrid</option>
            </select>

            <select name="experience" value={form.experience} onChange={handleChange} className="p-3 border rounded-xl">
              <option>No Previous Experience</option>
              <option>Yes, I have experience</option>
            </select>

            <textarea name="experienceDetails" value={form.experienceDetails} onChange={handleChange} className="p-3 border rounded-xl md:col-span-2" placeholder="If Yes, Mention Details"></textarea>
          </div>
        </section>

        {/* D. Organization */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            D. Organization (Optional)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="orgName" value={form.orgName} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Organization Name" />

            <input name="orgContactPerson" value={form.orgContactPerson} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Contact Person Name" />

            <textarea name="orgAddress" value={form.orgAddress} onChange={handleChange} className="p-3 border rounded-xl md:col-span-2" placeholder="Address"></textarea>

            <input name="orgContactNumber" value={form.orgContactNumber} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Contact Number" />

            <input name="orgEmail" value={form.orgEmail} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Email ID" />

            <input name="industryType" value={form.industryType} onChange={handleChange} className="p-3 border rounded-xl md:col-span-2" placeholder="Type of Industry" />
          </div>
        </section>

        {/* E. Objectives */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            E. Learning Objectives
          </h2>

          <textarea name="objective1" value={form.objective1} onChange={handleChange} className="p-3 border rounded-xl w-full mb-4" placeholder="Objective 1"></textarea>

          <textarea name="objective2" value={form.objective2} onChange={handleChange} className="p-3 border rounded-xl w-full mb-4" placeholder="Objective 2"></textarea>

          <textarea name="objective3" value={form.objective3} onChange={handleChange} className="p-3 border rounded-xl w-full" placeholder="Objective 3"></textarea>
        </section>

        {/* F. Document Uploads */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            F. Documents Upload
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label>ID Proof</label>
              <input name="idProof" onChange={handleFile} type="file" className="p-3 border rounded-xl w-full mt-2" />
            </div>

            <div>
              <label>Passport Size Photo</label>
              <input name="photo" onChange={handleFile} type="file" className="p-3 border rounded-xl w-full mt-2" />
            </div>

            <div>
              <label>Resume / CV</label>
              <input name="resume" onChange={handleFile} type="file" className="p-3 border rounded-xl w-full mt-2" />
            </div>

            <div>
              <label>Marksheets</label>
              <input name="marksheets" onChange={handleFile} type="file" multiple className="p-3 border rounded-xl w-full mt-2" />
            </div>

            <div className="md:col-span-2">
              <label>Parent Consent (Optional)</label>
              <input name="consent" onChange={handleFile} type="file" className="p-3 border rounded-xl w-full mt-2" />
            </div>
          </div>
        </section>

        {/* G. Declaration */}
        <section>
          <label className="flex items-center gap-3 text-gray-800 mb-6">
            <input
              type="checkbox"
              checked={form.declarationAgreed}
              onChange={(e) =>
                setForm({ ...form, declarationAgreed: e.target.checked })
              }
            />
            <span>I agree to the above declaration.</span>
          </label>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label>Signature</label>
              <input name="signature" onChange={handleFile} type="file" className="p-3 border rounded-xl w-full mt-2" />
            </div>

            <input name="date" value={form.date} onChange={handleChange} type="date" className="p-3 border rounded-xl" />

            <input name="place" value={form.place} onChange={handleChange} className="p-3 border rounded-xl" placeholder="Place" />
          </div>
        </section>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all mt-6"
        >
          Submit Application
        </button>
      </form>
    );
  }
