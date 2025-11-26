import mongoose from "mongoose";

const placementSchema = new mongoose.Schema(
  {
    // Section A
    fullName: String,
    guardianName: String,
    dob: String,
    gender: String,
    mobile: String,
    email: String,
    aadhaar: String,
    address: String,

    // Section B
    courseName: String,
    levelModule: String,
    enrollmentNumber: String,
    batchSession: String,
    yearOfPassing: String,
    academicPerformance: String,

    // Section C
    technicalSkills: String,
    softSkills: String,
    preferredJobRole: String,
    preferredIndustry: String,
    preferredLocation: String,
    expectedSalary: String,
    availability: String,

    // Section D
    previousOrg: String,
    role: String,
    duration: String,
    responsibilities: String,
    reasonForLeaving: String,

    // Section E Files
    resume: String,
    idProof: String,
    photo: String,
    marksheets: String,
    experienceCertificates: String,

    // Section F
    signature: String,
    declarationDate: String,
    place: String,
    agreeToDeclaration: Boolean,
  },
  { timestamps: true }
);

export default mongoose.model("PlacementForm", placementSchema);
