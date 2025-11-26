import FormPdf from "../Models/FormPdfModel.js";

export const uploadPDF = async (req, res) => {
  try {
    const { formName } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "PDF file missing" });
    }

    const pdfFile = req.file.filename;

    const saved = await FormPdf.create({ formName, pdfFile });

    return res.json({
      success: true,
      message: "PDF Uploaded Successfully",
      data: saved,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};


// ================================
//  NEW → GET ALL FORMS
// ================================
export const getForms = async (req, res) => {
  try {
    const forms = await FormPdf.find().sort({ createdAt: 1 }); 

    return res.json({
      success: true,
      message: "Forms fetched successfully",
      data: forms,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
