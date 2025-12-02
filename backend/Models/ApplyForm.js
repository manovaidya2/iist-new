import mongoose from "mongoose";

const applyFormSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email:   { type: String, required: true },
    phone:   { type: String, required: true },
    program: { type: String, required: true },
    message: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("ApplyForm", applyFormSchema);
