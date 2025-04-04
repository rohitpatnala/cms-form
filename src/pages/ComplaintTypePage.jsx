import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ComplaintTypePage.css";
import { Alert } from "@cmsgov/design-system";
import { useForm } from "../context/FormContext";

function ComplaintTypePage() {
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const { resetFormData } = useForm();

  const { formData, setFormData } = useForm();
  const [selectedOption, setSelectedOption] = useState(
    formData.complaintType || ""
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setFormData({ ...formData, complaintType: value });
    if (showError) {
      setShowError(false);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === "") {
      setShowError(true);
      document.getElementById("error-block").focus();
    }

    // Proceed to next page
    setShowError(false);
    navigate("/complainant-details");
  };

  useEffect(() => {
    document.title = "CMS Form - Complaint Type";
  }, []);

  const options = [
    {
      label: "Transactions",
      value: "Transactions",
      hint: "Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of benefits and premium payment.",
    },
    {
      label: "Code Sets",
      value: "Code Sets",
      hint: "Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and NDC (National Drug Codes) codes with which providers and health plan are familiar, are the adopted code sets for procedures, diagnoses, and drugs.",
    },
    {
      label: "Unique Identifiers",
      value: "Unique Identifiers",
      hint: "Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).",
    },
    {
      label: "Operating Rules",
      value: "Operating Rules",
      hint: "Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.",
    },
  ];

  return (
    <div className="fade-in">
      <div className="ds-l-container">
        <h1 className="ds-text-heading--2xl ds-u-margin-bottom--2">
          Complaint Type
        </h1>
        <p className="ds-u-font-weight--bold ds-u-margin-bottom--2">
          Make a selection below
        </p>
        {showError && (
          <div className="fade-in">
            <Alert
              variation="error"
              className="ds-u-margin-bottom--2"
              id="error-block"
              tabIndex="-1"
            >
              Please choose a complaint type before proceeding to complainant
              details
            </Alert>
          </div>
        )}

        <form className="radio-group">
          {options.map((opt) => (
            <label className="custom-radio" key={opt.value}>
              <input
                type="radio"
                name="complaint-type"
                value={opt.value}
                checked={selectedOption === opt.value}
                onChange={handleChange}
              />
              <div>
                <strong>{opt.label}</strong>
                <p className="ds-u-margin-top--1">{opt.hint}</p>
              </div>
            </label>
          ))}
        </form>

        <div
          className="ds-u-margin-top--4"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1rem",
          }}
        >
          <button
            className="big-solid-button"
            type="button"
            onClick={() => {
              resetFormData();
              navigate("/");
            }}
          >
            &lt; Welcome
          </button>

          <button
            className="big-solid-button"
            type="button"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>

          <button
            className="big-solid-button"
            type="button"
            onClick={handleSubmit}
          >
            Complainant Details &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComplaintTypePage;
