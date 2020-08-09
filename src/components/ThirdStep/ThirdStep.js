import React, { useContext } from "react";
import { Button, Switch, FormControlLabel } from "@material-ui/core";
import { StepContext } from "../../StepContext";

const ThirdStep = () => {
  // Use context
  const {
    setStep,
    handleSubmit,
    setUserData,
    userData,
    toggleIndoor,
    setToggleIndoor,
  } = useContext(StepContext);

  // Handle change
  const handleChange = (event) => {};
  return (
    <div>
      <h1>Third Step</h1>
      <FormControlLabel
        control={
          <Switch
            checked={toggleIndoor}
            onChange={(e) => {
              setToggleIndoor(!toggleIndoor);
              setUserData({ ...userData, toggleIndoor: !toggleIndoor });
            }}
            name="checkedB"
            color="primary"
          />
        }
        label="Indoor Pickup"
      />

      <br />
      <Button variant="contained" onClick={() => setStep(2)} color="default">
        Back
      </Button>
      <Button variant="contained" onClick={handleSubmit} color="primary">
        Submit
      </Button>
    </div>
  );
};

export default ThirdStep;
