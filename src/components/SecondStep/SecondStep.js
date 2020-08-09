import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { StepContext } from "../../StepContext";
import '../../App.css';
import './SecondStep.css';


const SecondStep = () => {
  // Using Context
  const { setStep, userData, setUserData } = useContext(StepContext);

  return (
    <div className="card">
      <div className="header">
        <div className="header-big">Business info</div>

      </div>
      <div className="card-content">
        <div className="input-row">
          <div className="first-input thirds">
            <div className="wrapper">
              <TextField className='input' value={userData['restaurant_name']} onChange={(e) => setUserData({ ...userData, 'restaurant_name': e.target.value })} name='restaurant_name' type='text' id='name' required autoComplete='off' label='Business brand name' variant='outlined' />
            </div>
          </div>


          {/* <input id="name" autocomplete="off" required="" class="" name="restaurant_name" type="text" placeholder="Business brand name" value=""></input> */}


          <div className="thirds">
            <div className="wrapper">
              <TextField label='Website (optional)' variant='outlined' />
            </div>
          </div>
          <div className="last-input thirds">
            <div className="wrapper">
              <TextField label='Number of locations' variant='outlined' />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SecondStep;
