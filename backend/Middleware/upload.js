import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, "_"));
  },
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowed = [".jpg", ".jpeg", ".png", ".webp", ".pdf"];

  if (allowed.includes(ext)) cb(null, true);
  else cb(new Error("Only JPG, PNG, WEBP, or PDF allowed"), false);
};

export const upload = multer({ storage, fileFilter });
