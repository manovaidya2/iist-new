import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import AdminSkillProgram from "./pages/AdminSkillProgram";
import Result from "./pages/Result";
import ViewResults from "./pages/ViewResults";
import AdminGallery from "./pages/AdminGallery";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactList from "./pages/ContactList";
import SchoolProgram from "./pages/SchoolProgram";
import StudentProgramList from "./pages/StudentProgramList";
import AdminForms from "./pages/OnDemandForms";
import AdminAdmissionList from "./pages/AdminAdmissionList";
import ExaminationData from "./pages/ExaminationData";
import AdminDeclarationList from "./pages/AdminDeclarationList";
import ReissueFormTable from "./pages/ReissueFormTable";
import PlacementFormsAdmin from "./pages/PlacementFormsAdmin";
import AdminInternship from "./pages/AdminInternship";
import MediumAdmin from "./pages/MediumAdmin";
import FormUploadPage from "./pages/FormUploadPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/admin_skill" element={<Layout><AdminSkillProgram /></Layout>} />
          <Route path="/results" element={<Layout><Result /></Layout>} />
          <Route path="/view-results" element={<Layout><ViewResults /></Layout>} />
          <Route path="/admin-gallery" element={<Layout><AdminGallery /></Layout>} />
          <Route path="/contact-list" element={<Layout><ContactList /></Layout>} />
           <Route path="/school-program" element={<Layout><SchoolProgram /></Layout>} />
            <Route path="/school-program-list" element={<Layout><StudentProgramList /></Layout>} />
            <Route path="/admin-forms" element={<Layout><AdminForms /></Layout>} /> 
            <Route path="/admisson-form" element={<Layout><AdminAdmissionList /></Layout>} /> 
            <Route path="/examinationformdata" element={<Layout><ExaminationData /></Layout>} />
             {/* <Route path="/edit-student-program/:id" element={<EditStudentProgram />} /> */}
             <Route path="/declaration" element={<Layout><AdminDeclarationList /></Layout>}/>
             <Route path="/certificate-reissue" element={<Layout><ReissueFormTable /></Layout>}/>
             <Route path="/placement-form" element={<Layout><PlacementFormsAdmin /></Layout>}/>
             <Route path="/internship-form-data" element={<Layout><AdminInternship /></Layout>}/>
             <Route path="/medium-admin" element={<Layout><MediumAdmin /></Layout>} />
             <Route path="/form-upload" element={<Layout><FormUploadPage /></Layout>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      {/* Move ToastContainer **outside Router** so it always exists */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
