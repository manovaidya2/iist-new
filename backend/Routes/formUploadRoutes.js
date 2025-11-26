import express from "express";
import { upload } from "../Middleware/upload.js";
import { uploadPDF, getForms } from "../Controllers/formController.js";

const router = express.Router();

// Upload PDF
router.post("/upload", upload.single("pdf"), uploadPDF);

// GET all forms
router.get("/", getForms);

export default router;
