

import React from "react";


const Input2 = ({ label, type = "text", placeholder = "" }) => (
<div>
<label className="block text-gray-700 font-medium mb-2">{label}</label>
<input
type={type}
placeholder={placeholder}
className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-[#1a4e92] focus:outline-none"
/>
</div>
);


export function SessionForm() {
return (
<form className="space-y-8">
<h3 className="text-2xl font-bold text-[#1a4e92] mb-2">Session Examination Form</h3>


<div className="grid md:grid-cols-2 gap-6">
<Input2 label="Student Name *" />
<Input2 label="Enrollment No. *" />
<Input2 label="Course & Level *" />
<Input2 label="Academic Session (Month-Year) *" placeholder="e.g., January 2024" />
<Input2 label="Institution Name *" />
</div>


<label className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
<input type="checkbox" className="mt-1 w-5 h-5 text-[#1a4e92] accent-[#1a4e92]" />
<span>
I wish to appear in the next scheduled IISD exam session. I confirm readiness and completion of all course work.
</span>
</label>


<button type="submit" className="bg-[#1a4e92] text-white px-8 py-3 rounded-xl hover:bg-[#16437a] transition-all duration-300 shadow-md font-semibold">
Submit Exam Form
</button>
</form>
);
}