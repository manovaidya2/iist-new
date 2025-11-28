import express from "express";
import {
  createStudentProgram,
  getAllStudentPrograms,
  getStudentProgramById,
  deleteStudentProgram,
  updateStudentProgram,
  upload,
} from "../Controllers/studentProgramController.js";

const router = express.Router();

// Create new student program
router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "brochures", maxCount: 5 },
  ]),
  createStudentProgram
);

// Get all programs
router.get("/", getAllStudentPrograms);

// Get single program
router.get("/:id", getStudentProgramById);

// Delete program
router.delete("/:id", deleteStudentProgram);

// Update program
router.put(
  "/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "brochures", maxCount: 10 },
  ]),
  updateStudentProgram
);



export default router;
