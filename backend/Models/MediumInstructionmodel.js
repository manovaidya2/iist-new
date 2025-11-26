import mongoose from "mongoose";

const mediumInstructionSchema = new mongoose.Schema({
  // A. Student Details
  fullName: String,
  fatherName: String,
  dob: String,
  gender: String,
  mobile: String,
  email: String,
  aadhaar: String,
  address: String,

  // B. Academic Details
  courseName: String,
  semester: String,
  enrollment: String,
  batch: String,
  admissionYear: String,
  completionYear: String,

  // C. Medium Requirement
  purpose: String,
  language: String,
  reason: String,

  // Student confirmation
  signature: String,
  date: String,
  place: String,

  // Documents
  idProof: String,
  transcript: String,
  feeReceipt: String,
  photo: String,
}, { timestamps: true });

export default mongoose.model("MediumInstruction", mediumInstructionSchema);
