import { createContext, useContext, useState } from "react";

const FormContext = createContext();

const initialFormData = {
  // From ComplaintTypePage
  complaintType: "",

  // From ComplainantDetailsPage
  anonymous: "",
  orgName: "",
  orgType: "",
  orgTypeOther: "",
  orgRole: "",
  orgPhone: "",
  title: "",
  firstName: "",
  middleInitial: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  zipExt: "",
  email: "",
  contactPhone: "",
  contactPhoneExt: "",
  cellPhone: "",

  // Future steps can be added here
};

export function FormProvider({ children }) {
  const [formData, setFormData] = useState(initialFormData);

  const resetFormData = () => {
    setFormData(initialFormData);
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}
