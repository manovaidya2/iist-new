import MediumInstruction from "../Models/MediumInstructionmodel.js";

export const createMediumInstruction = async (req, res) => {
  try {
    const {
      fullName,
      fatherName,
      dob,
      gender,
      mobile,
      email,
      aadhaar,
      address,
      courseName,
      semester,
      enrollment,
      batch,
      admissionYear,
      completionYear,
      purpose,
      language,
      reason,
      date,
      place
    } = req.body;

    const files = req.files;

    const newForm = await MediumInstruction.create({
      fullName,
      fatherName,
      dob,
      gender,
      mobile,
      email,
      aadhaar,
      address,
      courseName,
      semester,
      enrollment,
      batch,
      admissionYear,
      completionYear,
      purpose,
      language,
      reason,
      date,
      place,
      signature: files?.signature?.[0]?.filename || "",
      idProof: files?.idProof?.[0]?.filename || "",
      transcript: files?.transcript?.[0]?.filename || "",
      feeReceipt: files?.feeReceipt?.[0]?.filename || "",
      photo: files?.photo?.[0]?.filename || "",
    });

    return res.status(201).json({
      success: true,
      message: "Medium of Instruction form submitted successfully",
      data: newForm,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};


export const getAllForms = async (req, res) => {
  try {
    const forms = await MediumInstruction.find().sort({ createdAt: -1 });
    return res.json({ success: true, data: forms });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
