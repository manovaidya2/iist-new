import DemandForm from "../Models/demandFormmodel.js";

export const createDemandForm = async (req, res) => {
  try {
    const {
      studentName,
      gender,
      fatherName,
      motherName,
      dob,
      qualification,
      skillName,
      experience,
      lastJob,
      address,
      country,
      phone,
      email,
      date,
      signature,
    } = req.body;

    const photoPath = req.file ? req.file.path : null;

    const form = await DemandForm.create({
      studentName,
      gender,
      fatherName,
      motherName,
      dob,
      qualification,
      skillName,
      experience,
      lastJob,
      address,
      country,
      phone,
      email,
      date,
      photo: photoPath,
      signature,
    });

    res.json({ success: true, message: "Form submitted", data: form });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllDemandForms = async (req, res) => {
  try {
    const forms = await DemandForm.find().sort({ createdAt: -1 });
    res.json({ success: true, data: forms });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await DemandForm.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const deleteDemandForm = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await DemandForm.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Form not found" });
    }

    res.json({ success: true, message: "Form deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
