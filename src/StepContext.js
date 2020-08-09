import React, { useState, createContext } from "react";

export const StepContext = createContext();

export const StepProvider = (props) => {
  // Create Stepper State
  const [step, setStep] = useState(2);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [toggleIndoor, setToggleIndoor] = useState(false);

  // Handle Submit Function
  const handleSubmit = () => {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData("");
    setStep(1);
  };

  return (
    <StepContext.Provider
      value={{
        step,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        handleSubmit,
        toggleIndoor,
        setToggleIndoor,
      }}
    >
      {props.children}
    </StepContext.Provider>
  );
};
