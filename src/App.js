import React from "react";
import Form from "./Form";
import { StepProvider } from "./StepContext";
import logo from "./images/logo.svg";
import "./App.css";

const App = () => {
  return (
    <StepProvider>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <br />
      <div className="main-container">
        <Form />
      </div>
      <div className="footer-logo">
        <img
          alt=""
          src="https://d1j5yzf6fkxjod.cloudfront.net/images/oa-google.svg"
        />
      </div>
    </StepProvider>
  );
};

export default App;
