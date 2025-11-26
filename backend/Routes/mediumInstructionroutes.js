import express from "express";
import { upload } from "../Middleware/upload.js";
import {
  createMediumInstruction,
  getAllForms
} from "../Controllers/mediumInstructioncontroller.js";

const router = express.Router();

const multiUpload = upload.fields([
  { name: "signature", maxCount: 1 },
  { name: "idProof", maxCount: 1 },
  { name: "transcript", maxCount: 1 },
  { name: "feeReceipt", maxCount: 1 },
  { name: "photo", maxCount: 1 },
]);

router.post("/submit", multiUpload, createMediumInstruction);
router.get("/all", getAllForms);

export default router;
