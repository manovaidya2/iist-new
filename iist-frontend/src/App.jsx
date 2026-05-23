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
// import ExamFormsSection from "./school/ExamFormsSection";
import Placementcell from "./pages/Placementcell";
import Result from "./pages/Result";
import Franchise from "./pages/Franchise";
import StudentLoginMain from "./Student Zone/StudentLoginMain";
import AcademicCentrePortal from "./Centre/AcademicCentrePortal";
import ExaminationForm from "./school/ExaminationForm";
import SelfDeclarationForm from "./school/SelfDeclarationForm";
import IISDReissueForm from "./school/IISDReissueForm";
import PlacementApplicationForm from "./placement/PlacementApplicationForm";
import IISDInternshipForm from "./school/IISDInternshipForm";
import MediumofInstruction from "./school/MediumofInstruction";
import FormDownloadComponent from "./school/FormDownloadComponent";
import ScrollToTop from "./components/ScrollToTop"; // ✅ IMPORT THIS
import Internationalcouncil from "./pages/Internationalcouncil";
import MembershipOverview from "./membership/membership-overview/MembershipOverview";
import MembershipPage from "./membership/Student&Professional/MembershipPage";
import InstitutionalMembershipPage from "./membership/InstitutionalMembership/InstitutionalMembershipPage";
import TradeTestCenterPage from "./assessment/TradeTestCenterPage";
import TradeTestingProcessPage from "./assessment/TradeTestingProcessPage";
import AssessmentCertificationPage from "./assessment/AssessmentCertificationPage";
import BookAssessmentPage from "./assessment/BookAssessmentPage";
import TradeTestCenterApplication from "./assessment/TradeTestCenterApplication";
import SkillCreditSystemPage from "./framework/SkillCreditSystemPage";
import GlobalSkillCreditsPage from "./framework/GlobalSkillRegistryPage";
import CertificateVerificationPage from "./framework/CertificateVerificationPage";
import StudentMentorshipApplication from "./membership/StudentMembershipApplication";






function App() {
  return (
    
    <Router>
      <ScrollToTop /> {/* ✅ ADD THIS */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/results" element={<StudentLogin/>} /> {/* Student Login route */}
        <Route path="/about-us" element={<About />} /> {/* Fallback route */}
    
       <Route path="/school-details/:id" element={<SchoolDetails />} />

        <Route path="/admission-form" element={<AdmissionForm />} /> {/* Fallback route */}
        <Route path="/exam-form" element={<ExaminationForm/>} /> {/* Fallback route */}
        <Route path="/placement-cell" element={<Placementcell />} /> {/* Fallback route */}
        <Route path="/result" element={<Result />} />
        <Route path="/franchise" element={<Franchise />} /> {/* Fallback route */}
        <Route path="/student-login" element={<StudentLoginMain />} /> {/* Fallback route */}
        <Route path="/center-login" element={<AcademicCentrePortal />} />
        <Route path="/self-declaration-form" element={<SelfDeclarationForm />} />
        <Route path="/certificate-reissue-form" element={<IISDReissueForm />} />
        <Route path="/placement-application-form" element={<PlacementApplicationForm />} />
        <Route path="/intership-form" element={<IISDInternshipForm />} />
        <Route path="/medium-of-instruction-form" element={<MediumofInstruction />} />
        <Route path="/Download-form" element={<FormDownloadComponent />} />
        <Route path="/international-council" element={<Internationalcouncil />} /> {/* Fallback route */}
        <Route path="/memebership-overview" element={<MembershipOverview />} /> {/* Fallback route */}
        <Route path="/school-&-professional" element={<MembershipPage />} /> {/* Fallback route */}
        <Route path="/institutional-membership" element={<InstitutionalMembershipPage />} /> {/* Fallback route */}
        <Route path="/trade-test-center" element={<TradeTestCenterPage />} /> {/* Fallback route */}
        <Route path="/trade-testing-process" element={<TradeTestingProcessPage />} /> {/* Fallback route */}
        <Route path="/assessment-certification" element={<AssessmentCertificationPage />} /> 
        <Route path="/book-assessment" element={<BookAssessmentPage />} /> 
        <Route path="/trade-test-center-application" element={<TradeTestCenterApplication />} /> 
        <Route path="/international-skill-credits" element={<SkillCreditSystemPage />} />
        <Route path="/global-skill-registry" element={<GlobalSkillCreditsPage />} />
        <Route path="/verification-portal" element={<CertificateVerificationPage />} />
        <Route path="/mentorship-application" element={<StudentMentorshipApplication />} />
         

      
        <Route path ="/school" element={<School />} />  
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
