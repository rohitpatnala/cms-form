import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@cmsgov/design-system";
import { useForm } from "../context/FormContext";
import "../styles/ComplainantDetailsPage.css";

const ComplainantDetailsPage = () => {
  const { formData, setFormData, resetFormData } = useForm();
  const fieldRefs = {
    anonymous: useRef(null),
    orgName: useRef(null),
    orgPhone: useRef(null),
    title: useRef(null),
    firstName: useRef(null),
    address1: useRef(null),
    city: useRef(null),
    state: useRef(null),
    zip: useRef(null),
    email: useRef(null),
    contactPhone: useRef(null),
  };

  const [errors, setErrors] = React.useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const requiredFields = {
      anonymous: "Anonymity selection",
      orgName: "Complainant Organization Name",
      orgPhone: "Complainant Organization Phone Number",
      title: "Complainant Title",
      firstName: "Complainant First Name",
      address1: "Complainant Address Line 1",
      city: "Complainant City/Town",
      state: "Complainant State/Territory",
      zip: "Complainant Zip Code",
      email: "Complainant Email Address",
      contactPhone: "Complainant Contact Phone Number",
    };

    // // Phone and Zip Regexes
    // const phonePattern = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/; // matches (123) 456-7890, 123-456-7890, 1234567890
    // const zipPattern = /^\d{5}$/; // strictly 5 digits

    const newErrors = {};

    Object.entries(requiredFields).forEach(([key, label]) => {
      if (!formData[key] || formData[key].trim() === "") {
        newErrors[key] = `${label} is required.`;
      }
      // else {
      //   // Extra validation for phone fields
      //   if (
      //     ["orgPhone", "contactPhone", "cellPhone"].includes(key) &&
      //     !phonePattern.test(value)
      //   ) {
      //     newErrors[
      //       key
      //     ] = `${label} must be a valid phone number (e.g. 123-456-7890).`;
      //   }

      //   // Extra validation for zip code
      //   if (key === "zip" && !zipPattern.test(value)) {
      //     newErrors[key] = `${label} must be a valid 5-digit ZIP code.`;
      //   }
      // }
    });

    setErrors(newErrors);

    // Scroll to the top-most error message.
    if (Object.keys(newErrors).length > 0) {
      const firstErrorKey = Object.keys(newErrors)[0];
      const ref = fieldRefs[firstErrorKey];
      if (ref?.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
        ref.current.focus();
      }
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts correcting
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "", // clear the specific field error
      }));
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigate("/fae-details");
    }
  };

  useEffect(() => {
    document.title = "CMS Form - Complaint Details";
  }, []);

  return (
    <div className="ds-l-container ds-u-margin-top--4 fade-in">
      <h1 className="ds-text-heading--2xl ds-u-margin-y--2">
        Complainant Details
      </h1>

      <fieldset className="ds-text-bold">
        <div className="radio-section">
          <p className="radio-header">
            Do you want to remain anonymous during this process?
            <span className="required-asterisk">*</span>
          </p>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                name="anonymous"
                value="yes"
                ref={fieldRefs.anonymous}
                checked={formData.anonymous === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="anonymous"
                value="no"
                ref={fieldRefs.anonymous}
                checked={formData.anonymous === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
          <p className="disclaimer">
            <strong>Disclaimer:</strong> If you select yes, CMS will not share
            your Information with the Filed Against Entity (FAE) during the
            investigation process. However, information provided in this
            complaint is subject to rules and policies under the Freedom of
            Information Act (FOIA).
          </p>
        </div>
      </fieldset>
      {errors.anonymous && (
        <Alert variation="error" className="ds-u-margin-top--1">
          {errors.anonymous}
        </Alert>
      )}

      <div className="form-row">
        <label htmlFor="orgName" className="form-label">
          Complainant Organization Name
          <span className="required-asterisk">*</span>
        </label>
        <input
          id="orgName"
          name="orgName"
          type="text"
          className="ds-c-field"
          value={formData.orgName}
          ref={fieldRefs.orgName}
          onChange={handleChange}
        />
      </div>
      {errors.orgName && (
        <Alert variation="error" className="ds-u-margin-top--1">
          {errors.orgName}
        </Alert>
      )}

      <div className="form-row grey-section">
        <label htmlFor="orgType" className="form-label">
          Complainant Organization Type
        </label>
        <select
          id="orgType"
          name="orgType"
          value={formData.orgType || ""}
          onChange={handleChange}
          className="ds-c-field custom-select"
          required
        >
          <option value="">--None--</option>
          <option value="ClearingHouse">Health Care Clearinghouse</option>
          <option value="Provider">Covered Health Care Provider</option>
          <option value="HealthPlan">Health Plan</option>
          <option value="Vendor">Vendor</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {formData.orgType === "Other" && (
        <div className="form-row grey-section">
          <label htmlFor="orgTypeOther" className="form-label">
            Complainant Organization Type (Other)
          </label>
          <input
            id="orgTypeOther"
            name="orgTypeOther"
            value={formData.orgTypeOther || ""}
            onChange={handleChange}
            className="ds-c-field"
          />
        </div>
      )}

      <div className="form-row">
        <label htmlFor="orgRole" className="form-label">
          Complainant Organization Role
        </label>
        <input
          id="orgRole"
          name="orgRole"
          type="text"
          className="ds-c-field"
          value={formData.orgRole}
          onChange={handleChange}
        />
      </div>

      <div className="form-row grey-section">
        <label htmlFor="orgPhone" className="form-label">
          Complainant Organization Phone Number
          <span className="required-asterisk">*</span>
        </label>
        <input
          id="orgPhone"
          name="orgPhone"
          type="text"
          className="ds-c-field"
          placeholder="(xxx) xxx-xxxx"
          value={formData.orgPhone}
          ref={fieldRefs.orgPhone}
          onChange={handleChange}
        />
      </div>
      {errors.orgPhone && (
        <Alert variation="error" className="ds-u-margin-top--1">
          {errors.orgPhone}
        </Alert>
      )}

      <div className="form-row">
        <label htmlFor="title" className="form-label">
          Complainant Title
          <span className="required-asterisk">*</span>
        </label>
        <select
          id="title"
          name="title"
          value={formData.title || ""}
          onChange={handleChange}
          ref={fieldRefs.title}
          className="ds-c-field custom-select"
          required
        >
          <option value="">--None--</option>
          <option value="mr">Mr.</option>
          <option value="mrs">Mrs.</option>
          <option value="ms">Ms.</option>
          <option value="miss">Miss</option>
          <option value="doctor">Dr.</option>
        </select>
      </div>
      {errors.title && (
        <Alert variation="error" className="ds-u-margin-top--1">
          {errors.title}
        </Alert>
      )}

      <div className="form-row grey-section">
        <label htmlFor="firstName" className="form-label">
          Complainant First Name
          <span className="required-asterisk">*</span>
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="ds-c-field"
          value={formData.firstName}
          ref={fieldRefs.firstName}
          onChange={handleChange}
        />
      </div>
      {errors.firstName && (
        <Alert variation="error" className="ds-u-margin-top--1">
          {errors.firstName}
        </Alert>
      )}

      <div className="form-row">
        <label htmlFor="middleInitial" className="form-label">
          Complainant Middle Initial
        </label>
        <input
          id="middleInitial"
          name="middleInitial"
          type="text"
          className="ds-c-field"
          value={formData.middleInitial}
          onChange={handleChange}
        />
      </div>

      <div className="form-row grey-section">
        <label htmlFor="lastName" className="form-label">
          Complainant Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="ds-c-field"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="address1" className="form-label">
          Complainant Address Line 1<span className="required-asterisk">*</span>
        </label>
        <input
          id="address1"
          name="address1"
          type="text"
          className="ds-c-field"
          ref={fieldRefs.address1}
          value={formData.address1}
          onChange={handleChange}
        />
      </div>
      {errors.address1 && (
        <Alert variation="error" className="ds-u-margin-top--1">
          {errors.address1}
        </Alert>
      )}

      <div className="form-row grey-section">
        <label htmlFor="address2" className="form-label">
          Complainant Address Line 2
        </label>
        <input
          id="address2"
          name="address2"
          type="text"
          className="ds-c-field"
          value={formData.address2}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="city" className="form-label">
          Complainant City/Town
          <span className="required-asterisk">*</span>
        </label>
        <input
          id="city"
          name="city"
          type="text"
          className="ds-c-field"
          ref={fieldRefs.city}
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      {errors.city && (
        <Alert variation="error" className="ds-u-margin-top--1">
          {errors.city}
        </Alert>
      )}

      <div className="form-row grey-section">
        <label htmlFor="state" className="form-label">
          Complainant State/Territory
          <span className="required-asterisk">*</span>
        </label>
        <select
          id="state"
          name="state"
          value={formData.state || ""}
          onChange={handleChange}
          ref={fieldRefs.state}
          className="ds-c-field custom-select"
          required
        >
          <option value="">--None--</option>
          <option value="s1">Alabama</option>
          <option value="s2">California</option>
          <option value="s3">Florida</option>
          <option value="s4">Georgia</option>
          <option value="s5">Texas</option>
        </select>
      </div>
      {errors.state && (
        <Alert variation="error" className="ds-u-margin-top--1">
          {errors.state}
        </Alert>
      )}

      <div className="form-row">
        <label htmlFor="zip" className="form-label">
          Complainant Zip Code
          <span className="required-asterisk">*</span>
        </label>

        <div className="form-field-group zip-row">
          <input
            id="zip"
            name="zip"
            type="text"
            className="ds-c-field zip-input"
            placeholder="55555"
            ref={fieldRefs.zip}
            value={formData.zip}
            onChange={handleChange}
          />
          <input
            id="zipExt"
            name="zipExt"
            type="text"
            className="ds-c-field ext-input"
            placeholder="Ext."
            value={formData.zipExt}
            onChange={handleChange}
          />
        </div>
      </div>
      {errors.zip && (
        <Alert variation="error" className="ds-u-margin-top--1">
          {errors.zip}
        </Alert>
      )}

      <div className="form-row grey-section">
        <label htmlFor="email" className="form-label">
          Complainant Email Address
          <span className="required-asterisk">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="text"
          className="ds-c-field"
          placeholder="example@demo.com"
          value={formData.email}
          ref={fieldRefs.email}
          onChange={handleChange}
        />
      </div>
      {errors.email && (
        <Alert variation="error" className="ds-u-margin-top--1">
          {errors.email}
        </Alert>
      )}

      <div className="form-row">
        <label htmlFor="zip" className="form-label">
          Complainant Contact Phone Number
          <span className="required-asterisk">*</span>
        </label>

        <div className="form-field-group zip-row">
          <input
            id="contactPhone"
            name="contactPhone"
            type="text"
            className="ds-c-field zip-input"
            placeholder="(xxx) xxx-xxxx"
            ref={fieldRefs.contactPhone}
            value={formData.contactPhone}
            onChange={handleChange}
          />
          <input
            id="contactPhoneExt"
            name="contactPhoneExt"
            type="text"
            className="ds-c-field ext-input"
            placeholder="Ext."
            value={formData.contactPhoneExt}
            onChange={handleChange}
          />
        </div>
      </div>
      {errors.contactPhone && (
        <Alert variation="error" className="ds-u-margin-top--1">
          {errors.contactPhone}
        </Alert>
      )}

      <div className="form-row grey-section">
        <label htmlFor="cellPhone" className="form-label">
          Complainant Cell Phone
        </label>
        <input
          id="cellPhone"
          name="cellPhone"
          type="text"
          className="ds-c-field"
          placeholder="(xxx) xxx-xxxx"
          value={formData.cellPhone}
          onChange={handleChange}
        />
      </div>

      {/* Footer navigation */}
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
          onClick={() => navigate("/complaint-type")}
        >
          &lt; Complaint Type
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
          Filed Against Entity Information &gt;
        </button>
      </div>
    </div>
  );
};

export default ComplainantDetailsPage;
