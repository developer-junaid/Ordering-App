import React, { useState, createContext } from "react";

export const StepContext = createContext();

export const StepProvider = (props) => {
  // Create Stepper State
  const [step, setStep] = useState(4);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [toggleApp, setToggleApp] = useState(false);
  const [toggleText, setToggleText] = useState(false);
  const [toggleEmail, setToggleEmail] = useState(false);
  const [toggleIndoor, setToggleIndoor] = useState(false);
  const [toggleCurbside, setToggleCurbside] = useState(false);
  const [togglePaymentArrival, setTogglePaymentArrival] = useState(false);
  const [togglePaymentOnline, setTogglePaymentOnline] = useState(false);

  return (
    <StepContext.Provider
      value={{
        step,
        setStep,
        userData,
        setUserData,
        finalData,
        setFinalData,
        toggleApp,
        setToggleApp,
        toggleText,
        setToggleText,
        toggleEmail,
        setToggleEmail,
        toggleIndoor,
        setToggleIndoor,
        toggleCurbside,
        setToggleCurbside,
        togglePaymentArrival,
        setTogglePaymentArrival,
        togglePaymentOnline,
        setTogglePaymentOnline,
      }}
    >
      {props.children}
    </StepContext.Provider>
  );
};
