import express from "express";
import { upload } from "../Middleware/upload.js";
import {
  submitInternshipForm,
  getInternshipForms,
} from "../Controllers/internshipController.js";

const router = express.Router();

router.post(
  "/submit",
  upload.fields([
    { name: "idProof", maxCount: 1 },
    { name: "photo", maxCount: 1 },
    { name: "resume", maxCount: 1 },
    { name: "marksheets", maxCount: 10 },
    { name: "consent", maxCount: 1 },
    { name: "signature", maxCount: 1 },
  ]),
  submitInternshipForm
);

router.get("/all", getInternshipForms);

export default router;
