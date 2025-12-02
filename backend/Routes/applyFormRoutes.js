import express from "express";
import { submitApplyForm, getAllApplications,deleteApplication, } from "../Controllers/applyFormController.js";

const router = express.Router();

// POST route to save form
router.post("/apply-now", submitApplyForm);
router.get("/apply-now", getAllApplications);
router.delete("/apply-now/:id", deleteApplication);

export default router;
