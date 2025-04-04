// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Stepper from "../components/Stepper";
import Navbar from "../components/Navbar";
import FooterLinks from "../components/FooterLinks";

const MainLayout = () => {
  const location = useLocation();

  // List of routes that should show the stepper
  const routesWithStepper = [
    "/complaint-type",
    "/complainant-details",
    "/fae-details",
    "/complaint-details",
    "/review",
    "/submitted",
  ];

  const shouldShowStepper = routesWithStepper.includes(location.pathname);

  return (
    <>
      <Navbar />
      <div className="ds-l-container ds-u-margin-top--4 ds-u-margin-bottom--4">
        {shouldShowStepper && <Stepper />}
        <div className="ds-u-margin-top--3">
          <Outlet />
        </div>
        <FooterLinks />
      </div>
    </>
  );
};

export default MainLayout;
