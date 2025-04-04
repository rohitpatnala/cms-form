import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomCard from "../components/CustomCard";
import { useForm } from "../context/FormContext";

function FiledAgainstEntityInformationPage() {
  const navigate = useNavigate();
  const { resetFormData } = useForm();

  useEffect(() => {
    document.title = "CMS Form - FAE Information";
  }, []);

  const handleSubmit = () => {
    navigate("/complaint-details");
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
            onClick={() => navigate("/complainant-details")}
          >
            &lt; Complainant Details
          </button>

          <button
            className="big-solid-button"
            type="button"
            onClick={() => {
              resetFormData();
              navigate("/");
            }}
          >
            Cancel
          </button>

          <button
            className="big-solid-button"
            type="button"
            onClick={handleSubmit}
          >
            Complaint Details &gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default FiledAgainstEntityInformationPage;
