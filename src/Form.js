import React, { useContext } from "react";
import "./App.css";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import FirstStep from "./components/FirstStep/FirstStep";
import SecondStep from "./components/SecondStep/SecondStep";
import ThirdStep from "./components/ThirdStep/ThirdStep";
import { StepContext } from "./StepContext";

const Form = () => {
  // Function
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      default:
        return <FirstStep />;
    }
  };

  // Use context
  const { step } = useContext(StepContext);

  return (
    <div className="form-container">
      <div className="stepper">
        <Stepper activeStep={step - 1} orientation="horizontal">
          <Step>
            <StepLabel>POS</StepLabel>
          </Step>
          <Step>
            <StepLabel>Business info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Orders</StepLabel>
          </Step>
          <Step>
            <StepLabel>Hours</StepLabel>
          </Step>
          <Step>
            <StepLabel>Site settings</StepLabel>
          </Step>
        </Stepper>
      </div>
      {showStep(step)}
    </div>
  );
};

export default Form;
