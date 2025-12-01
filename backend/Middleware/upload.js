import multer from "multer";
import path from "path";

// Storage Engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
    cb(null, uniqueName);
  },
});

// Allowed File Types
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowed = [".jpg", ".jpeg", ".png", ".webp", ".pdf"];

  if (allowed.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, JPEG, PNG, WEBP, or PDF allowed"), false);
  }
};

// Multer Upload with 50MB Limit
export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50 MB
  },
});
