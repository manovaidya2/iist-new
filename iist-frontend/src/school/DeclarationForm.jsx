import React, { useState } from "react";

// SelfDeclarationForm.jsx
// React + Tailwind form that mirrors a typical "Self Declaration" PDF layout.
// - Single-file functional component
// - Uses Tailwind CSS classes
// - Keeps the same sequence: Header -> Personal fields -> Experience -> Declaration -> Place/Date/Signature

export default function DeclarationForm({ onSubmit }) {
  const [form, setForm] = useState({
    fullName: "",
    fatherName: "",
    dob: "",
    address: "",
    mobile: "",
    email: "",
    qualification: "",
    experienceDetails: "",
    skilledExperienced: false,
    fromDate: "",
    toDate: "",
    declarationAccepted: false,
    place: "",
    date: "",
    signatureName: "",
    signatureFile: null,
  });

  function handleChange(e) {
    const { name, type, value, checked, files } = e.target;
    if (type === "checkbox") {
      setForm((s) => ({ ...s, [name]: checked }));
    } else if (type === "file") {
      setForm((s) => ({ ...s, [name]: files[0] }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Basic validation example
    if (!form.fullName || !form.place || !form.date) {
      alert("Please fill Name, Place and Date before submitting.");
      return;
    }
    // Pass data up if needed
    if (onSubmit) onSubmit(form);
    alert("Form submitted (data available in onSubmit handler).\nYou can integrate with an API as needed.");
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-2xl font-semibold">Self Declaration Form</h1>
        <p className="text-sm text-gray-500 mt-1">(Please fill all fields in BLOCK letters)</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Father / Husband Name</label>
            <input
              name="fatherName"
              value={form.fatherName}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Mobile</label>
            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Mobile number"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Permanent address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Email address"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Qualification</label>
            <input
              name="qualification"
              value={form.qualification}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="e.g. B.Tech, Diploma"
            />
          </div>
        </section>

        {/* Experience / Employment */}
        <section className="border-t pt-4">
          <h2 className="text-lg font-medium mb-3">Experience / Employment</h2>
          <label className="block text-sm font-medium mb-1">Describe relevant experience</label>
          <textarea
            name="experienceDetails"
            value={form.experienceDetails}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Provide details of previous employment, roles, responsibilities..."
          />

          <div className="flex items-center gap-4 mt-3">
            <input
              id="skilledExperienced"
              name="skilledExperienced"
              type="checkbox"
              checked={form.skilledExperienced}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <label htmlFor="skilledExperienced" className="text-sm">(FOR SKILLED & EXPERIENCED CANDIDATES)</label>
          </div>

          {form.skilledExperienced && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div>
                <label className="block text-sm font-medium mb-1">From date</label>
                <input
                  type="date"
                  name="fromDate"
                  value={form.fromDate}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">To date / Present</label>
                <input
                  type="date"
                  name="toDate"
                  value={form.toDate}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
            </div>
          )}
        </section>

        {/* Declaration */}
        <section className="border-t pt-4">
          <h2 className="text-lg font-medium mb-2">Declaration</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            I hereby declare that the information given above is true to the best of my knowledge and belief. I understand that if any information
            provided by me is found false or incorrect, the institution has the right to cancel my certificate and I will not make any claim.
          </p>

          <div className="flex items-center gap-3 mt-3">
            <input
              id="declarationAccepted"
              name="declarationAccepted"
              type="checkbox"
              checked={form.declarationAccepted}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <label htmlFor="declarationAccepted" className="text-sm">I accept the above declaration</label>
          </div>
        </section>

        {/* Place / Date / Signature */}
        <section className="border-t pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-1">Place</label>
            <input
              name="place"
              value={form.place}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Declarant's Signature (type name or upload)</label>
            <input
              name="signatureName"
              value={form.signatureName}
              onChange={handleChange}
              placeholder="Type your name as signature"
              className="w-full border rounded-lg px-3 py-2 mb-2"
            />
            <input
              type="file"
              accept="image/*"
              name="signatureFile"
              onChange={handleChange}
              className="w-full"
            />
          </div>
        </section>

        {/* Footer / Actions */}
        <div className="flex items-center justify-between pt-4">
          <div className="text-sm text-gray-500">(Place & Date) &nbsp;&nbsp;&nbsp; (Declarant's Signature)</div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Print
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
