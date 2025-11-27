import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axiosInstance from "../api/axiosInstance";
import { Link } from "react-router-dom";

export default function StudentProgramUpload() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [industryFields, setIndustryFields] = useState([""]);
  const [qualificationLevels, setQualificationLevels] = useState([{ level: "", duration: "", title: "" }]);
  const [programLists, setProgramLists] = useState([{ listTitle: "Program List 1", rows: [{ program: "", level: "", duration: "" }] }]);
  const [brochures, setBrochures] = useState([]);

  // Industry handlers
  const handleIndustryChange = (i, val) => {
    const updated = [...industryFields];
    updated[i] = val;
    setIndustryFields(updated);
  };
  const addIndustryField = () => setIndustryFields([...industryFields, ""]);

  // Qualification handlers
  const handleQualificationChange = (i, field, val) => {
    const updated = [...qualificationLevels];
    updated[i][field] = val;
    setQualificationLevels(updated);
  };
  const addQualificationField = () => setQualificationLevels([...qualificationLevels, { level: "", duration: "", title: "" }]);

  // Program lists handlers
  const addNewProgramList = () => setProgramLists([...programLists, { listTitle: `Program List ${programLists.length + 1}`, rows: [{ program: "", level: "", duration: "" }] }]);
  const addProgramRow = (listIndex) => {
    const updated = [...programLists];
    updated[listIndex].rows.push({ program: "", level: "", duration: "" });
    setProgramLists(updated);
  };
  const handleProgramChange = (listIndex, rowIndex, field, val) => {
    const updated = [...programLists];
    updated[listIndex].rows[rowIndex][field] = val;
    setProgramLists(updated);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("about", about);
      formData.append("industryFields", JSON.stringify(industryFields));
      formData.append("qualificationLevels", JSON.stringify(qualificationLevels));
      formData.append("programLists", JSON.stringify(programLists));
      brochures.forEach((b) => formData.append("brochures", b));

      await axiosInstance.post("/student-programs", formData, { headers: { "Content-Type": "multipart/form-data" } });
      alert("✅ Student Program saved successfully!");
    } catch (error) {
      console.error(error);
      alert("❌ Upload failed");
    }
  };

  return (
    <section className="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-2xl mt-10 border">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#1a4e92]">Student Program Upload</h1>
        <Link to="/school-program-list" className="bg-[#1a4e92] text-white px-6 py-2 rounded-lg">View Programs</Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* IMAGE */}
        <div>
          <label className="block font-semibold">Upload Image</label>
          <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} className="border p-2 rounded-xl w-full" />
        </div>

        {/* TITLE */}
        <div>
          <label className="block font-semibold">Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="border rounded-xl p-2 w-full" />
        </div>

        {/* ABOUT */}
        <div>
          <label className="block font-semibold">About</label>
          <SimpleMDE value={about} onChange={setAbout} />
        </div>

        {/* INDUSTRY */}
        <div>
          <label className="block font-semibold">Industry Scope</label>
          {industryFields.map((item, i) => (
            <div key={i} className="mb-3">
              <input value={item} onChange={e => handleIndustryChange(i, e.target.value)} placeholder={`Point ${i+1}`} className="border w-full rounded-xl p-2" />
            </div>
          ))}
          <button type="button" onClick={addIndustryField} className="btn">+ Add More</button>
        </div>

        {/* QUALIFICATIONS */}
        <div>
          <label className="block font-semibold">Qualification Levels</label>
          {qualificationLevels.map((q, i) => (
            <div key={i} className="grid grid-cols-3 gap-3 mb-3">
              <input placeholder="Level" value={q.level} onChange={e => handleQualificationChange(i, "level", e.target.value)} className="border rounded-xl p-2" />
              <input placeholder="Duration" value={q.duration} onChange={e => handleQualificationChange(i, "duration", e.target.value)} className="border rounded-xl p-2" />
              <input placeholder="Title" value={q.title} onChange={e => handleQualificationChange(i, "title", e.target.value)} className="border rounded-xl p-2" />
            </div>
          ))}
          <button type="button" onClick={addQualificationField} className="btn">+ Add More</button>
        </div>

        {/* PROGRAM LISTS */}
        <div>
          <label className="block font-semibold">Program Lists</label>
          {programLists.map((list, li) => (
            <div key={li} className="p-4 border rounded-xl mb-5 bg-gray-50">
              <h2 className="text-lg font-semibold mb-3">{list.listTitle}</h2>
              {list.rows.map((row, ri) => (
                <div key={ri} className="grid grid-cols-3 gap-4 mb-3">
                  <input placeholder="Program" value={row.program} onChange={e => handleProgramChange(li, ri, "program", e.target.value)} className="border rounded-xl p-2" />
                  <input placeholder="Level" value={row.level} onChange={e => handleProgramChange(li, ri, "level", e.target.value)} className="border rounded-xl p-2" />
                  <input placeholder="Duration" value={row.duration} onChange={e => handleProgramChange(li, ri, "duration", e.target.value)} className="border rounded-xl p-2" />
                </div>
              ))}
              <button type="button" onClick={() => addProgramRow(li)} className="bg-green-600 text-white px-4 py-2 rounded-lg">+ Add Row</button>
            </div>
          ))}
          <button type="button" onClick={addNewProgramList} className="bg-blue-700 text-white px-5 py-2 rounded-lg">+ Add Another Program List</button>
        </div>

        {/* BROCHURES */}
        <div>
          <label className="block font-semibold">Upload Brochures</label>
          <input type="file" multiple accept=".pdf,.doc,.docx" onChange={e => setBrochures(Array.from(e.target.files))} className="border w-full p-2 rounded-xl" />
        </div>

        <div className="text-center">
          <button className="bg-[#1a4e92] text-white px-8 py-3 rounded-xl">Save All Details</button>
        </div>
      </form>
    </section>
  );
}
