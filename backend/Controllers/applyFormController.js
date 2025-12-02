import ApplyForm from "../Models/ApplyForm.js";

export const submitApplyForm = async (req, res) => {
  try {
    const { fullName, email, phone, program, message } = req.body;

    const newForm = new ApplyForm({
      fullName,
      email,
      phone,
      program,
      message,
    });

    await newForm.save();

    res.status(201).json({
      success: true,
      message: "Application submitted successfully!",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error", error: err });
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const applications = await ApplyForm.find().sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error", error: err });
  }
};


export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await ApplyForm.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Application not found" });
    }

    res.status(200).json({ success: true, message: "Application deleted successfully" });

  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error", error: err });
  }
};
