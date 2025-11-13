import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import skillProgramRoutes from "./Routes/skillProgramRoutes.js";
import studentRoutes from "./Routes/studentRoutes.js";
import galleryRoutes from "./Routes/galleryRoutes.js";
import contactRoutes from "./Routes/contactRoutes.js";
import studentProgramRoutes from "./Routes/studentProgramRoutes.js";

dotenv.config(); // 👈 Make sure to load .env

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://blog-1-rqz1.onrender.com",
      "https:www.iisd.io",
      "https://iisd.io",
      "https://admin.iisd.io",
       "https://api.iisd.io/",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

// 🔥 Serve uploaded files
app.use("/uploads", express.static("uploads"));
app.use("/uploads/brochures", express.static("uploads/brochures"));

// Routes
app.use("/api/skill-programs", skillProgramRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/student-programs", studentProgramRoutes);


// Health check
app.get("/", (req, res) => {
  res.send("IISD API running...");
});

// DB Connect
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
