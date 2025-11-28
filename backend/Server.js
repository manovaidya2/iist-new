    import express from "express";
    import mongoose from "mongoose";
    import cors from "cors";
    import dotenv from "dotenv";

    import skillProgramRoutes from "./Routes/skillProgramRoutes.js";
    import studentRoutes from "./Routes/studentRoutes.js";
    import galleryRoutes from "./Routes/galleryRoutes.js";
    import contactRoutes from "./Routes/contactRoutes.js";
    import studentProgramRoutes from "./Routes/studentProgramRoutes.js";
    import demandFormRoutes from "./Routes/demandFormroutes.js";
    import admissionRoutes from "./Routes/admissionRoutes.js";
    import examinationRoutes from "./Routes/examinationRoutes.js";
    import declarationRoutes from "./Routes/declarationRoutes.js";
    import reissueRoutes from "./Routes/reissueRoutes.js";
    import placementRoutes from "./Routes/placementRoutes.js";
    import internshipRoutes from "./Routes/internshipRoutes.js";
    import mediumRoutes from "./Routes/mediumInstructionroutes.js";
    import formUploadRoutes from "./Routes/formUploadRoutes.js";



    dotenv.config();

    const app = express();

    // =======================
    //  CORS
    // =======================
    app.use(
      cors({
        origin: [
          "http://localhost:5173",
          "http://localhost:5174",
          "https://blog-1-rqz1.onrender.com",
          "https://www.iisd.io",
          "https://iisd.io",
          "https://admin.iisd.io",
          "https://api.iisd.io",
        ],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
      })
    );
app.options("*", cors());
    // =======================
    //  Serve Uploads
    // =======================
    app.use("/uploads", express.static("uploads"));
    app.use("/uploads/brochures", express.static("uploads/brochures"));

    // =======================
    //  Body Parser
    // =======================
    app.use(express.json({ limit: "20mb" }));
    app.use(express.urlencoded({ extended: true, limit: "20mb" }));

    // =======================
    //  ROUTES
    // =======================
    app.use("/api/skill-programs", skillProgramRoutes);
    app.use("/api/students", studentRoutes);
    app.use("/api/gallery", galleryRoutes);
    app.use("/api/contact", contactRoutes);
    app.use("/api/student-programs", studentProgramRoutes);
    app.use("/api/demand-form", demandFormRoutes);
    app.use("/api", admissionRoutes); 
    app.use("/api", examinationRoutes);
    app.use("/api", declarationRoutes);
    app.use("/api", reissueRoutes);
    app.use("/api/placement", placementRoutes);
    app.use("/api/internship", internshipRoutes);
    app.use("/api/medium", mediumRoutes);
    app.use("/api/forms", formUploadRoutes);




    // Health check
    app.get("/", (req, res) => {
      res.send("IISD API running...");
    });

    // =======================
    //  DATABASE
    // =======================
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("✅ MongoDB connected"))
      .catch((err) => console.error("❌ MongoDB connection error:", err));

    // =======================
    //  START SERVER
    // =======================
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
