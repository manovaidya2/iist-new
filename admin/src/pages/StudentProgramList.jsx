// src/pages/StudentProgramList.jsx
import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export default function StudentProgramList() {
  const [programs, setPrograms] = useState([]);
  const [selected, setSelected] = useState(null);
  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const res = await axiosInstance.get("/student-programs");
      setPrograms(res.data);
    } catch (error) {
      console.error("❌ Error fetching programs:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this program?")) return;
    try {
      await axiosInstance.delete(`/student-programs/${id}`);
      alert("Program deleted successfully!");
      fetchPrograms();
      setSelected(null);
    } catch (err) {
      console.error(err);
      alert("Delete failed!");
    }
  };

  const openEdit = (program) => {
    // deep copy to avoid mutating original until save
    setEditData(JSON.parse(JSON.stringify(program)));
  };

  return (
    <section className="max-w-7xl mx-auto p-8 mt-10 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-[#1a4e92] mb-8 text-center">
        Student Programs
      </h1>

      {/* LIST TABLE */}
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead className="bg-[#1a4e92] text-white">
          <tr>
            <th className="border p-3">#</th>
            <th className="border p-3 text-left">Title</th>
            <th className="border p-3">Created</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {programs.map((p, i) => (
            <tr key={p._id} className="hover:bg-gray-50 transition">
              <td className="border p-3 text-center">{i + 1}</td>

              <td
                className="border p-3 text-[#1a4e92] font-semibold cursor-pointer"
                onClick={() => setSelected(p)}
              >
                {p.title}
              </td>

              <td className="border p-3 text-center">
                {new Date(p.createdAt).toLocaleDateString()}
              </td>

              <td className="border p-3 text-center space-x-2">
                <button
                  onClick={() => setSelected(p)}
                  className="bg-blue-600 text-white px-3 py-1 rounded-md"
                >
                  View
                </button>

                <button
                  onClick={() => openEdit(p)}
                  className="bg-green-600 text-white px-3 py-1 rounded-md"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(p._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* DETAILS SECTION */}
      {selected && (
        <div className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-bold text-[#1a4e92] mb-4">
            {selected.title}
          </h2>

          {/* Image */}
          {selected.image && (
            <div className="flex justify-center mb-6">
              <img
                src={`https://api.iisd.io/uploads/images/${selected.image}`}
                className="w-48 h-32 object-cover rounded-xl"
                alt={selected.title}
              />
            </div>
          )}

          <div
            className="prose max-w-none mb-6"
            dangerouslySetInnerHTML={{ __html: selected.about }}
          />

          {/* Industry Scope */}
          <h3 className="text-xl font-semibold">Industry Scope:</h3>
          <ul className="list-disc pl-5">
            {selected.industryFields?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* Qualification Levels */}
          <h3 className="text-xl font-semibold mt-4">Qualification Levels:</h3>
          <ul>
            {selected.qualificationLevels?.map((q, i) => (
              <li key={i}>
                <strong>{q.level}</strong> — {q.duration} — {q.title}
              </li>
            ))}
          </ul>

          {/* FULL PROGRAM LIST FIXED */}
          <h3 className="text-xl font-semibold mt-4">Program Lists:</h3>
          {selected.programLists?.map((list, i) => (
            <div key={i} className="mb-4">
              <h4 className="font-bold">{list.listTitle}</h4>
              <ul className="list-disc pl-5">
                {list.rows.map((r, j) => (
                  <li key={j}>
                    <strong>{r.program}</strong> — {r.level} — {r.duration}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Brochures */}
          <h3 className="text-xl font-semibold mt-4">Brochures:</h3>
          <ul>
            {selected.brochures?.map((b, i) => (
              <li key={i}>
                <a
                  href={`https://api.iisd.io/uploads/brochures/${b}`}
                  className="text-[#1a4e92] underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {b}
                </a>
              </li>
            ))}
          </ul>

          {/* Close */}
          <button
            onClick={() => setSelected(null)}
            className="mt-6 bg-gray-300 px-5 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      )}

      {/* EDIT MODAL */}
      {editData && (
        <EditProgramModal
          program={editData}
          onClose={() => setEditData(null)}
          refresh={fetchPrograms}
          setEditData={setEditData}
          setLoading={setLoading}
        />
      )}

      {loading && (
        <div className="fixed bottom-6 right-6 bg-[#1a4e92] text-white px-4 py-2 rounded">
          Updating...
        </div>
      )}
    </section>
  );
}

/* ---------------------------
   EDIT PROGRAM MODAL
----------------------------*/
function EditProgramModal({ program, onClose, refresh, setEditData, setLoading }) {
  const [title, setTitle] = useState(program.title || "");
  const [about, setAbout] = useState(program.about || "");
  const [industryFields, setIndustryFields] = useState(program.industryFields || []);
  const [qualificationLevels, setQualificationLevels] = useState(program.qualificationLevels || []);
  const [programLists, setProgramLists] = useState(program.programLists || []);

  // files & previews
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(program.image ? `https://api.iisd.io/uploads/images/${program.image}` : null);
  const [newBrochures, setNewBrochures] = useState([]); // File[]
  const [existingBrochures, setExistingBrochures] = useState(program.brochures || []);
  const [brochuresToRemove, setBrochuresToRemove] = useState([]); // filenames marked for removal
  const [removeImageFlag, setRemoveImageFlag] = useState(false);

  // handle image selection
  const onImageChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setImageFile(f);
    setImagePreview(URL.createObjectURL(f));
    setRemoveImageFlag(false); // if user selects a new image, don't remove old by flag
  };

  // handle brochures selection
  const onBrochuresChange = (e) => {
    const files = Array.from(e.target.files || []);
    setNewBrochures((prev) => [...prev, ...files]);
  };

  // mark/unmark existing brochure for deletion
  const toggleRemoveBrochure = (filename) => {
    setBrochuresToRemove((prev) =>
      prev.includes(filename) ? prev.filter((b) => b !== filename) : [...prev, filename]
    );
  };

  // remove a selected new brochure before upload
  const removeNewBrochureAt = (index) => {
    setNewBrochures((prev) => prev.filter((_, i) => i !== index));
  };

  // small helpers for programLists and qualificationLevels editing
  const addQualification = () => {
    setQualificationLevels((prev) => [...prev, { level: "", duration: "", title: "" }]);
  };
  const removeQualification = (idx) => {
    setQualificationLevels((prev) => prev.filter((_, i) => i !== idx));
  };
  const addProgramList = () => {
    setProgramLists((prev) => [...prev, { listTitle: "New List", rows: [] }]);
  };
  const addRowToList = (listIdx) => {
    const copy = JSON.parse(JSON.stringify(programLists));
    copy[listIdx].rows.push({ program: "", level: "", duration: "" });
    setProgramLists(copy);
  };
  const removeRowFromList = (listIdx, rowIdx) => {
    const copy = JSON.parse(JSON.stringify(programLists));
    copy[listIdx].rows.splice(rowIdx, 1);
    setProgramLists(copy);
  };

  // MAIN UPDATE
  const handleUpdate = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("about", about);
      formData.append("industryFields", JSON.stringify(industryFields));
      formData.append("qualificationLevels", JSON.stringify(qualificationLevels));
      formData.append("programLists", JSON.stringify(programLists));

      // instructions for backend: removeImage flag, removeBrochures array (JSON)
      formData.append("removeImage", removeImageFlag ? "true" : "false");
      formData.append("removeBrochures", JSON.stringify(brochuresToRemove));

      if (imageFile) {
        formData.append("image", imageFile);
      }

      newBrochures.forEach((f) => formData.append("brochures", f));

      // IMPORTANT: set content-type to multipart/form-data so multer detects files
      await axiosInstance.put(`/student-programs/${program._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Updated Successfully!");
      refresh();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Update failed! See console.");
    } finally {
      setLoading(false);
    }
  };

  // cancel/close
  const handleClose = () => {
    // revoke object URLs
    if (imagePreview && imageFile) URL.revokeObjectURL(imagePreview);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start py-8 overflow-auto z-50">
      <div className="bg-white p-6 w-[900px] max-w-[95%] max-h-[90vh] overflow-y-auto rounded-xl shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Program</h2>
          <button onClick={handleClose} className="text-gray-600">Close ✕</button>
        </div>

        {/* Title */}
        <label className="font-semibold">Title</label>
        <input
          className="w-full border p-2 mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* About */}
        <label className="font-semibold">About (HTML allowed)</label>
        <textarea
          className="w-full border p-2 mb-3"
          rows="6"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />

        {/* Industry Fields (simple newline editor) */}
        <label className="font-semibold">Industry Fields (one per line)</label>
        <textarea
          className="w-full border p-2 mb-3"
          rows="3"
          value={industryFields.join("\n")}
          onChange={(e) => setIndustryFields(e.target.value.split("\n").filter(Boolean))}
        />

        {/* Image preview & upload */}
        <div className="mb-3">
          <label className="font-semibold">Image</label>
          <div className="flex items-center gap-4 mt-2">
            <div>
              {imagePreview ? (
                <img src={imagePreview} alt="preview" className="w-36 h-24 object-cover rounded" />
              ) : (
                <div className="w-36 h-24 bg-gray-100 flex items-center justify-center rounded">No Image</div>
              )}
            </div>

            <div className="flex-1">
              <input type="file" accept="image/*" onChange={onImageChange} className="mb-2" />
              <div className="flex items-center gap-3 text-sm">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={removeImageFlag}
                    onChange={(e) => {
                      setRemoveImageFlag(e.target.checked);
                      if (e.target.checked) {
                        setImageFile(null);
                        setImagePreview(null);
                      } else {
                        // restore preview to existing if available
                        setImagePreview(program.image ? `https://api.iisd.io/uploads/images/${program.image}` : null);
                      }
                    }}
                    className="mr-2"
                  />
                  Remove existing image on save
                </label>
                <span className="text-gray-500"> (check to delete old image)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brochures: existing (with remove toggle) + new upload */}
        <div className="mb-3">
          <label className="font-semibold">Brochures (existing)</label>
          <ul className="mb-2">
            {existingBrochures.length === 0 && <li className="text-sm text-gray-500">No brochures</li>}
            {existingBrochures.map((b, i) => {
              const marked = brochuresToRemove.includes(b);
              return (
                <li key={i} className="flex items-center justify-between gap-4 py-1">
                  <a href={`https://api.iisd.io/uploads/brochures/${b}`} target="_blank" rel="noreferrer" className={marked ? "line-through text-gray-400" : "text-[#1a4e92]"}>
                    {b}
                  </a>
                  <label className="inline-flex items-center text-sm">
                    <input
                      type="checkbox"
                      checked={marked}
                      onChange={() => toggleRemoveBrochure(b)}
                      className="mr-2"
                    />
                    Remove
                  </label>
                </li>
              );
            })}
          </ul>

          <label className="font-semibold">Add New Brochures (multiple allowed)</label>
          <input type="file" multiple onChange={onBrochuresChange} className="w-full border p-2 mb-2" />
          <div className="text-sm mb-3">
            {newBrochures.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <span>{f.name}</span>
                <button className="text-red-500 text-sm" onClick={() => removeNewBrochureAt(i)}>Remove</button>
              </div>
            ))}
          </div>
        </div>

        {/* Qualification Levels */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Qualification Levels</h3>
            <button onClick={addQualification} className="text-sm bg-green-600 text-white px-2 py-1 rounded">Add</button>
          </div>
          {qualificationLevels.map((q, i) => (
            <div key={i} className="border p-3 rounded my-2">
              <div className="flex gap-2">
                <input className="w-1/3 border p-2" placeholder="Level" value={q.level} onChange={(e) => {
                  const copy = [...qualificationLevels]; copy[i].level = e.target.value; setQualificationLevels(copy);
                }} />
                <input className="w-1/3 border p-2" placeholder="Duration" value={q.duration} onChange={(e) => {
                  const copy = [...qualificationLevels]; copy[i].duration = e.target.value; setQualificationLevels(copy);
                }} />
                <input className="w-1/3 border p-2" placeholder="Title" value={q.title} onChange={(e) => {
                  const copy = [...qualificationLevels]; copy[i].title = e.target.value; setQualificationLevels(copy);
                }} />
              </div>
              <div className="flex justify-end mt-2">
                <button onClick={() => removeQualification(i)} className="text-red-500 text-sm">Remove</button>
              </div>
            </div>
          ))}
        </div>

        {/* Program Lists */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Program Lists</h3>
            <button onClick={addProgramList} className="text-sm bg-green-600 text-white px-2 py-1 rounded">Add List</button>
          </div>

          {programLists.map((list, li) => (
            <div key={li} className="border p-3 rounded my-2">
              <input className="w-full border p-2 mb-2 font-semibold" value={list.listTitle} onChange={(e) => {
                const copy = JSON.parse(JSON.stringify(programLists)); copy[li].listTitle = e.target.value; setProgramLists(copy);
              }} />

              {list.rows.map((row, ri) => (
                <div key={ri} className="flex gap-2 mb-2">
                  <input className="border p-2 w-1/3" placeholder="Program" value={row.program} onChange={(e) => {
                    const copy = JSON.parse(JSON.stringify(programLists)); copy[li].rows[ri].program = e.target.value; setProgramLists(copy);
                  }} />
                  <input className="border p-2 w-1/3" placeholder="Level" value={row.level} onChange={(e) => {
                    const copy = JSON.parse(JSON.stringify(programLists)); copy[li].rows[ri].level = e.target.value; setProgramLists(copy);
                  }} />
                  <input className="border p-2 w-1/3" placeholder="Duration" value={row.duration} onChange={(e) => {
                    const copy = JSON.parse(JSON.stringify(programLists)); copy[li].rows[ri].duration = e.target.value; setProgramLists(copy);
                  }} />
                  <button className="text-red-500" onClick={() => removeRowFromList(li, ri)}>Remove</button>
                </div>
              ))}

              <div>
                <button onClick={() => addRowToList(li)} className="text-sm bg-blue-600 text-white px-2 py-1 rounded">Add Row</button>
              </div>
            </div>
          ))}
        </div>

        {/* Save / Cancel */}
        <div className="flex justify-end gap-3 mt-4">
          <button onClick={handleClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
