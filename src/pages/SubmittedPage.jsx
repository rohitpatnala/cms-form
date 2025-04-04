import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";
import CustomCard from "../components/CustomCard";
import "../styles/SubmittedPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

function SubmittedPage() {
  const navigate = useNavigate();
  const { resetFormData } = useForm();

  useEffect(() => {
    document.title = "CMS Form - Submitted!";
  }, []);

  const handleStartOver = () => {
    resetFormData();
    navigate("/");
  };

  const renderConfetti = () => {
    const pieces = Array.from({ length: 60 }, (_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 2;
      const color = `hsl(${Math.floor(Math.random() * 360)}, 90%, 60%)`;

      return (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${left}%`,
            backgroundColor: color,
            animationDelay: `${delay}s`,
          }}
        />
      );
    });
    return pieces;
  };

  return (
    <div className="fade-in submitted-container">
      <div className="confetti-wrapper">{renderConfetti()}</div>

      <CustomCard>
        <h1 className="submitted-title">🎉 Submitted Successfully!</h1>
      </CustomCard>

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
          onClick={handleStartOver}
        >
          Start Over{" "}
          <FontAwesomeIcon
            icon={faRotateRight}
            className="ds-u-margin-left--1"
          />
        </button>
      </div>
    </div>
  );
}

export default SubmittedPage;
