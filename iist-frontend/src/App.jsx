import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Home component import
import StudentLogin from "./components/StudentLogin";

// import SkillDevelopmentPage from "./About/SkillDevelopmentPage";
// import VerifyCenterCode from "./About/VerifyCenterCode";

// import Center_login from "./Institute_Zone/Center_login";
// import VerifyCenterCode from "./Institute_Zone/VerifyCenterCode";
// import ApplicationForm from "./components/ApplicationForm";
// import StudentZoneLogin from "./Student Zone/StudentZoneLogin";
// import OnDemandRegistration from "./Student Zone/OnDemandRegistration";
// import CandidateThroughTrainingForm from "./Student Zone/CandidateThroughTrainingForm";
// import SelectExamDate from "./Student Zone/SelectExamDate";
// import ApplyFranchisee from "./Franchise/ApplyFranchisee";
// import ContactUs from "./pages/ContactUs";

import About from "./pages/About";
import School from "./pages/School";
import SchoolDetails from "./pages/SchoolDetails";
import AdmissionForm from "./school/AdmissionForm";
import ExamFormsSection from "./school/ExamFormsSection";
import Placementcell from "./pages/placementcell";
import Result from "./pages/Result";
import Franchise from "./pages/Franchise";
import StudentLoginMain from "./Student Zone/StudentLoginMain";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/results" element={<StudentLogin/>} /> {/* Student Login route */}
        <Route path="/about-us" element={<About />} /> {/* Fallback route */}
        {/* <Route path="/skill-development" element={<SkillDevelopmentPage/>} /> {/* Fallback route */}
        {/* <Route path="/affiliations" element={<VerifyCenterCode />} /> Fallback route */}
       <Route path="/school-details/:id" element={<SchoolDetails />} />
{/* Fallback route */}
        <Route path="/admission-form" element={<AdmissionForm />} /> {/* Fallback route */}
        <Route path="/exam-form" element={<ExamFormsSection />} /> {/* Fallback route */}
        <Route path="/placement-cell" element={<Placementcell />} /> {/* Fallback route */}
        <Route path="/result" element={<Result />} />
        <Route path="/franchise" element={<Franchise />} /> {/* Fallback route */}
        <Route path="/student-login" element={<StudentLoginMain />} /> {/* Fallback route */}
        
         

        {/* <Route path="/center-login" element={<Center_login />} /> 
        <Route path="/verifycentercode" element={<VerifyCenterCode />} /> 
        <Route path="/application-form" element={<ApplicationForm />} /> 
        <Route path="/student-result" element={<StudentZoneLogin />} /> 
        <Route path="/onDemand-registration" element={<OnDemandRegistration />} /> 
        <Route path="/Candidate-TrainingForm" element={<CandidateThroughTrainingForm />} />
        <Route path="/select-exam-date" element={<SelectExamDate />} /> {/* Fallback route */}
        {/* <Route path="/applyfranchisee" element={<ApplyFranchisee />} /> {/* Fallback route */}
        {/* <Route path="/contact-us" element={<ContactUs />} /> {/* Fallback route */}
        <Route path ="/school" element={<School />} />  
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
