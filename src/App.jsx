import React from "react";
import { Routes, Route } from "react-router-dom";
import ComplaintTypePage from "./pages/ComplaintTypePage";
import ComplainantDetailsPage from "./pages/ComplainantDetailsPage";
import MainLayout from "./layouts/MainLayout";
import FiledAgainstEntityInformationPage from "./pages/FiledAgainstEntityInformationPage";
import ComplaintDetailsPage from "./pages/ComplaintDetailsPage";
import ReviewComplaintPage from "./pages/ReviewComplaintPage";
import SubmittedPage from "./pages/SubmittedPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/complaint-type" element={<ComplaintTypePage />} />
        <Route
          path="/complainant-details"
          element={<ComplainantDetailsPage />}
        />
        <Route
          path="/fae-details"
          element={<FiledAgainstEntityInformationPage />}
        />
        <Route path="/complaint-details" element={<ComplaintDetailsPage />} />
        <Route path="/review" element={<ReviewComplaintPage />} />
        <Route path="/submitted" element={<SubmittedPage />} />
      </Route>
    </Routes>
  );
};

export default App;
