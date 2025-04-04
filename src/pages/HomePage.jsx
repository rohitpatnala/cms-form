import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="ds-l-container ds-u-margin-y--4 fade-in">
      <h1 className="ds-text-heading--xl ds-u-color--primary">
        Administrative Simplification Enforcement and Testing Tool (ASETT)
      </h1>

      <hr />

      <p className="ds-u-color--error ds-u-margin-bottom--2">
        <strong>Disclaimer:</strong> If you file a complaint without
        registration, you will not be able to view your complaints, upload
        supporting documents, correspond electronically, or test transactions.
      </p>

      <p>
        The following is the list of steps you will take in order to file a
        complaint regarding HIPAA Transactions and Code Sets, Unique
        Identifiers, and/or Operating Rules. If you wish to file a Health
        Insurance Privacy complaint, please visit the{" "}
        <a
          href="https://www.hhs.gov/hipaa/filing-a-complaint/"
          target="_blank"
          rel="noreferrer"
          className="ds-c-link"
        >
          Office for Civil Rights (OCR)
        </a>{" "}
        website.
      </p>

      <br />

      <ul className="ds-c-list ds-c-list--bare">
        <li>Step 1: Identify the type of HIPAA/ACA complaint</li>
        <li>Step 2: Provide your contact information</li>
        <li>Step 3: Identify the Filed Against Entity</li>
        <li>Step 4: Describe the HIPAA/ACA violation</li>
        <li>Step 5: Review and Submit</li>
      </ul>

      <p>
        You can review all information entered before submitting your complaint
        to CMS. Once the complaint is submitted, CMS will review all information
        and respond to your complaint.
      </p>

      <p>
        Click the Complaint Type button below to begin filing your complaint.
      </p>

      <div className="ds-l-row ds-u-margin-top--3 ds-u-justify-content--between">
        <button
          className="big-solid-button"
          type="button"
          onClick={() => setShowAlert(true)}
        >
          Cancel
        </button>

        <button
          className="big-solid-button"
          type="button"
          onClick={() => navigate("/complaint-type")}
        >
          Raise a complaint &gt;
        </button>
      </div>

      {showAlert && (
        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            backgroundColor: "#fff3cd",
            color: "#856404",
            border: "1px solid #ffeeba",
            borderRadius: "4px",
          }}
        >
          ⚠️ This is just a dummy button and does not perform any action.
        </div>
      )}
    </div>
  );
};

export default HomePage;
