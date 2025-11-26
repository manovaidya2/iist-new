import express from "express";
import { upload } from "../Middleware/upload.js";
import {
  createPlacementForm,
  getPlacementForms,
} from "../Controllers/placementController.js";

const router = express.Router();

router.post(
  "/submit",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "idProof", maxCount: 1 },
    { name: "photo", maxCount: 1 },
    { name: "marksheets", maxCount: 1 },
    { name: "experienceCertificates", maxCount: 1 },
    { name: "signature", maxCount: 1 },
  ]),
  createPlacementForm
);

router.get("/all", getPlacementForms);

export default router;
