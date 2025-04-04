import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomCard from "../components/CustomCard";
import { useForm } from "../context/FormContext";

function ReviewComplaintPage() {
  const navigate = useNavigate();
  const { resetFormData } = useForm();

  useEffect(() => {
    document.title = "CMS Form - Review Complaint";
  }, []);

  const handleSubmit = () => {
    navigate("/submitted");
  };

  return (
    <>
      <div className="fade-in">
        <CustomCard>
          <h2>This page is out of scope for this demo</h2>
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
            onClick={() => navigate("/complaint-details")}
          >
            &lt; Complaint Details
          </button>

          <button
            className="big-solid-button"
            type="button"
            onClick={() => {
              navigate("/");
              resetFormData();
            }}
          >
            Cancel
          </button>

          <button
            className="big-solid-button"
            type="button"
            onClick={handleSubmit}
          >
            Submit &gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default ReviewComplaintPage;
