import React, { useState } from "react";

export default function VerifyCenterCode() {
  const [centerCode, setCenterCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    setError("");
    // Simulate verification logic
    if (centerCode.trim() === "") {
      setError("Please enter Center Code");
      setSuccess(false);
    } else {
      setSuccess(true);
    }
  };

  return (
<div className="flex flex-col items-center bg-white px-4 relative pt-10 pb-5">
  <div className="w-full max-w-md">
    <div className="text-center mb-6">
      <h2 className="text-3xl font-semibold text-black mt-3 tracking-wide">
        Verify Your Center Code
      </h2>
    </div>

    {!success ? (
      <form
        onSubmit={handleVerify}
        className="bg-[#002b6b] rounded-3xl p-8 shadow-2xl"
      >
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2">
            Center Code
          </label>
          <input
            type="text"
            value={centerCode}
            onChange={(e) => setCenterCode(e.target.value)}
            placeholder="Enter Center Code"
            className="w-full bg-white px-4 py-2 rounded-full border border-gray-300 focus:outline-none text-gray-700 text-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-1/2 mx-auto block bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full font-semibold transition"
        >
          Verify
        </button>
      </form>
    ) : (
      <div className="text-center mt-6">
        <h2 className="text-xl font-bold text-gray-800">
          Center Code Verified!
        </h2>
      </div>
    )}
  </div>
</div>


  );
}
