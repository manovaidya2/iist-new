import InternshipForm from "../Models/internshipModel.js";

export const submitInternshipForm = async (req, res) => {
  try {
    const data = req.body;

    const files = req.files;

    const form = new InternshipForm({
      ...data,

      idProof: files?.idProof ? files.idProof[0].path : null,
      photo: files?.photo ? files.photo[0].path : null,
      resume: files?.resume ? files.resume[0].path : null,
      marksheets: files?.marksheets
        ? files.marksheets.map((f) => f.path)
        : [],
      consent: files?.consent ? files.consent[0].path : null,
      signature: files?.signature ? files.signature[0].path : null,
    });

    await form.save();

    res.json({
      success: true,
      message: "Internship form submitted successfully",
      data: form,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getInternshipForms = async (req, res) => {
  try {
    const forms = await InternshipForm.find().sort({ createdAt: -1 });
    res.json({ success: true, data: forms });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
