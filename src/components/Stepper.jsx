import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Stepper.css";

const steps = [
  "Complaint Type",
  "Complainant Details",
  "FAE Information",
  "Complaint Details",
  "Review Complaint",
  "Submitted",
];

// map routes to step indices
const pathToStepIndex = {
  "/complaint-type": 0,
  "/complainant-details": 1,
  "/fae-details": 2,
  "/complaint-details": 3,
  "/review": 4,
  "/submitted": 5,
};

const Stepper = () => {
  const location = useLocation();
  const currentStep = pathToStepIndex[location.pathname] ?? 0;

  return (
    <div className="stepper-container fade-in">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={step} className="stepper-step">
            <div
              className={`stepper-bubble ${
                isCompleted ? "completed" : isActive ? "active" : ""
              }`}
            >
              {isCompleted ? "✓" : index + 1}
            </div>
            <div
              className={`stepper-label ${
                isActive ? "label-active" : isCompleted ? "label-complete" : ""
              }`}
            >
              {step}
            </div>
            {index < steps.length - 1 && <div className="stepper-line" />}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
