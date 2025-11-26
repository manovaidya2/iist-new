import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema(
  {
    // A. Student Details
    fullName: String,
    guardianName: String,
    dob: String,
    gender: String,
    mobile: String,
    email: String,
    aadhaar: String,
    address: String,

    // B. Course & Academic Details
    courseName: String,
    levelModule: String,
    enrollmentNumber: String,
    batchSession: String,
    currentStatus: String,

    // C. Training Preferences
    preferredSector: String,
    preferredLocation: String,
    trainingDuration: String,
    mode: String, // Full-time / Part-time
    type: String, // On-site / Online / Hybrid
    experience: String,
    experienceDetails: String,

    // D. Organization Details
    orgName: String,
    orgContactPerson: String,
    orgAddress: String,
    orgContactNumber: String,
    orgEmail: String,
    industryType: String,

    // E. Learning Objectives
    objective1: String,
    objective2: String,
    objective3: String,

    // Uploaded Files Paths
    idProof: String,
    photo: String,
    resume: String,
    marksheets: [String],
    consent: String,
    signature: String,

    // Declaration
    declarationAgreed: Boolean,
    date: String,
    place: String,
  },
  { timestamps: true }
);

export default mongoose.model("InternshipForm", internshipSchema);
