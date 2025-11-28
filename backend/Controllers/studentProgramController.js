import StudentProgram from "../Models/studentProgramModel.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = file.mimetype.startsWith("image/")
      ? "uploads/images"
      : "uploads/brochures";
    if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({ storage });

// Create Student Program
export const createStudentProgram = async (req, res) => {
  try {
    const { title, about, industryFields, qualificationLevels, programLists } = req.body;

    const newProgram = new StudentProgram({
      image: req.files?.image?.[0]?.filename || "",
      brochures: req.files?.brochures?.map(f => f.filename) || [],
      title,
      about,
      industryFields: JSON.parse(industryFields || "[]"),
      qualificationLevels: JSON.parse(qualificationLevels || "[]"),
      programLists: JSON.parse(programLists || "[]"), // ✅ full program lists
    });

    await newProgram.save();
    res.status(201).json({ message: "✅ Student program saved successfully", data: newProgram });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get all programs
export const getAllStudentPrograms = async (req, res) => {
  try {
    const programs = await StudentProgram.find().sort({ createdAt: -1 });
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student programs", error });
  }
};

// Get single program
export const getStudentProgramById = async (req, res) => {
  try {
    const program = await StudentProgram.findById(req.params.id);
    if (!program) return res.status(404).json({ message: "Not found" });
    res.status(200).json(program);
  } catch (error) {
    res.status(500).json({ message: "Error fetching program", error });
  }
};

// Delete program
export const deleteStudentProgram = async (req, res) => {
  try {
    const program = await StudentProgram.findByIdAndDelete(req.params.id);
    if (!program) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "✅ Program deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting program", error });
  }
};


// Update Student Program
// Update Student Program
export const updateStudentProgram = async (req, res) => {
  try {
    const program = await StudentProgram.findById(req.params.id);
    if (!program) return res.status(404).json({ message: "Program not found" });

    /* ------------------------------
       TEXT FIELDS
    ------------------------------ */
    if (req.body.title !== undefined) program.title = req.body.title;
    if (req.body.about !== undefined) program.about = req.body.about;

    if (req.body.industryFields) {
      try {
        program.industryFields = JSON.parse(req.body.industryFields);
      } catch {
        program.industryFields = req.body.industryFields;
      }
    }

    if (req.body.qualificationLevels) {
      try {
        program.qualificationLevels = JSON.parse(req.body.qualificationLevels);
      } catch {
        program.qualificationLevels = req.body.qualificationLevels;
      }
    }

    if (req.body.programLists) {
      try {
        program.programLists = JSON.parse(req.body.programLists);
      } catch {
        program.programLists = req.body.programLists;
      }
    }

    /* ------------------------------
       IMAGE HANDLING
    ------------------------------ */
    const removeImageFlag =
      req.body.removeImage === "true" || req.body.removeImage === true;

    // delete old image manually
    if (removeImageFlag && program.image) {
      const oldPath = path.join("uploads", "images", program.image);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      program.image = "";
    }

    // replace with new image (if uploaded)
    if (req.files?.image?.length > 0) {
      // delete old image
      if (program.image) {
        const oldPath = path.join("uploads", "images", program.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }

      program.image = req.files.image[0].filename;
    }

    /* ------------------------------
       BROCHURES HANDLING
    ------------------------------ */

    // existing brochures removal list
    let brochuresToRemove = [];
    if (req.body.removeBrochures) {
      try {
        brochuresToRemove = JSON.parse(req.body.removeBrochures);
      } catch {
        brochuresToRemove = req.body.removeBrochures || [];
      }
    }

    // remove brochures from disk + db
    if (brochuresToRemove.length > 0) {
      brochuresToRemove.forEach((file) => {
        const filePath = path.join("uploads", "brochures", file);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      });

      program.brochures = program.brochures.filter(
        (file) => !brochuresToRemove.includes(file)
      );
    }

    // add new brochures (if uploaded)
    if (req.files?.brochures?.length > 0) {
      const newFiles = req.files.brochures.map((f) => f.filename);
      program.brochures = [...program.brochures, ...newFiles];
    }

    /* ------------------------------
       SAVE UPDATED MODEL
    ------------------------------ */
    await program.save();

    res.status(200).json({
      message: "Program updated successfully",
      data: program,
    });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ message: "Update failed", error });
  }
};
