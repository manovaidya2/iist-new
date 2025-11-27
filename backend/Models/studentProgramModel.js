import mongoose from "mongoose";

// Qualification schema
const qualificationSchema = new mongoose.Schema({
  level: String,
  duration: String,
  title: String,
});

// Program row schema
const rowSchema = new mongoose.Schema({
  program: String,
  level: String,
  duration: String,
});

// Program list schema
const programListSchema = new mongoose.Schema({
  listTitle: String,
  rows: [rowSchema],
});

// Main Student Program schema
const studentProgramSchema = new mongoose.Schema(
  {
    image: { type: String },
    title: { type: String, required: true },
    about: { type: String, required: true },
    industryFields: [String],
    qualificationLevels: [qualificationSchema],
    programLists: [programListSchema], // ✅ multiple lists with rows
    brochures: [String],
  },
  { timestamps: true }
);

export default mongoose.model("StudentProgram", studentProgramSchema);
