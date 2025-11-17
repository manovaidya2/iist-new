import express from "express";
import multer from "multer";
import {
  createDemandForm,
  getAllDemandForms,
  updateStatus,
  deleteDemandForm,
} from "../Controllers/demandFormcontroller.js";

const router = express.Router();

// File Upload
const storage = multer.diskStorage({
  destination: "uploads/photos",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/create", upload.single("photo"), createDemandForm);
router.get("/all", getAllDemandForms);
router.put("/status/:id", updateStatus);
router.delete("/delete/:id", deleteDemandForm);



export default router;
