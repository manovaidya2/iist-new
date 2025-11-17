import mongoose from "mongoose";

const demandFormSchema = new mongoose.Schema(
  {
    studentName: String,
    gender: String,
    fatherName: String,
    motherName: String,
    dob: String,
    qualification: String,
    skillName: String,
    experience: String,
    lastJob: String,
    address: String,
    country: String,
    phone: String,
    email: String,
    date: String,

    photo: String, // file path
    signature: String, // base64 string

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("DemandForm", demandFormSchema);
