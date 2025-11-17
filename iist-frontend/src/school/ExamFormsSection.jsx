import React, { useState } from "react";
import OnDemandForm from "./OnDemandForm";
import { SessionForm } from "./SessionForm";
import DeclarationForm from "../school/DeclarationForm";



export default function ExamFormsSection() {
const [activeForm, setActiveForm] = useState(null);


return (
<section className="bg-[#f9fafc] py-16 px-6 md:px-12">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a4e92] mb-10">Examination & Declaration Forms</h2>


<div className="flex flex-wrap justify-center gap-4 mb-12">
{[
{ title: "On-Demand Exam", key: "ondemand" },
{ title: "Session Exam", key: "session" },
{ title: "Self Declaration", key: "declaration" },
].map((form) => (
<button
key={form.key}
onClick={() => setActiveForm(form.key)}
className={`rounded-full px-6 py-3 text-sm md:text-base font-semibold border transition-all duration-300 shadow-sm hover:shadow-md ${
activeForm === form.key
? "bg-[#1a4e92] text-white border-[#1a4e92] scale-105"
: "bg-white text-[#1a4e92] border-[#1a4e92] hover:bg-[#1a4e92]/10"
}`}
>
{form.title}
</button>
))}
</div>


<div className=" rounded-3xl  p-8 md:p-10 ">
{!activeForm && <p className="text-center text-gray-600 text-lg">Please select a form type above to proceed.</p>}
{activeForm === "ondemand" && <OnDemandForm />}
{activeForm === "session" && <SessionForm />}
{activeForm === "declaration" && <DeclarationForm />}
</div>
</div>
</section>
);
}