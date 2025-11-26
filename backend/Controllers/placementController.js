import PlacementForm from "../Models/placementModel.js";

export const createPlacementForm = async (req, res) => {
  try {
    const fileFields = [
      "resume",
      "idProof",
      "photo",
      "marksheets",
      "experienceCertificates",
      "signature",
    ];

    // Fix Windows path → convert "\" to "/"
    fileFields.forEach((field) => {
      if (req.files[field]) {
        req.body[field] = req.files[field][0].path.replace(/\\/g, "/");
      }
    });

    req.body.agreeToDeclaration = req.body.agreeToDeclaration === "true";

    const newForm = await PlacementForm.create(req.body);

    res.status(201).json({
      success: true,
      message: "Placement Application Submitted Successfully",
      data: newForm,
    });
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const getPlacementForms = async (req, res) => {
  try {
    const forms = await PlacementForm.find().sort({ createdAt: -1 });
    res.json({ success: true, data: forms });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
