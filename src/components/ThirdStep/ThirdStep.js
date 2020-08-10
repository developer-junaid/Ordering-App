import React, { useEffect, useContext } from "react";
import { TextField, Switch, FormControlLabel } from "@material-ui/core";
import { StepContext } from "../../StepContext";
import "../../App.css";
import "./ThirdStep.css";
import appIcon from "../../images/app-icon.svg";
import phoneIcon from "../../images/sms-icon.svg";
import cashIcon from "../../images/cash-icon.svg";
import carIcon from "../../images/curbside-action.svg";
import emailIcon from "../../images/email-icon.svg";
import indoorIcon from "../../images/takeout-action.svg";
import creditCardIcon from "../../images/credit-card-action-gray.svg";

const ThirdStep = () => {
  // Use context
  const {
    setStep,
    setUserData,
    userData,
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
  } = useContext(StepContext);

  // Next Step button
  const nextButton =
    (toggleText || toggleEmail || toggleApp) &&
    (toggleIndoor || toggleCurbside) &&
    (togglePaymentArrival || togglePaymentOnline);

  // Use Effect
  useEffect(() => {
    setTimeout(() => {
      // Validate toggles
      if (nextButton) {
        document.querySelector("#next-btn").className = "next option valid";
        document.querySelector("#next-btn").disabled = false;
      } else {
        document.querySelector("#next-btn").className = "next option invalid";
        document.querySelector("#next-btn").disabled = true;
      }
    }, 0);
  }, [nextButton]);

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4);
  };

  return (
    <div className="card">
      <div className="header">
        <div className="header-big">Order management</div>
      </div>
      <div className="card-content">
        <form onSubmit={handleSubmit}>
          {/* Recieving Orders */}
          <div className="title">Receiving orders</div>
          <div className="subtitle">How would you like to receive orders?</div>
          {/* Android App */}
          <div className="small-container">
            <img src={appIcon} className="icon" alt="" />
            <div className="label-wrapper">
              <div className="label">The Ordering.app Android tablet app</div>
              <div className="description">
                Use your Android tablet to manage your orders
              </div>
            </div>
            <FormControlLabel
              control={
                <Switch
                  className="radio-switch"
                  size="small"
                  checked={toggleApp}
                  onChange={(e) => {
                    setToggleApp(!toggleApp);
                    setUserData({ ...userData, toggleApp: !toggleApp });
                  }}
                  name="checkedB"
                  color="primary"
                />
              }
              label=""
            />
            {toggleApp ? (
              <div className="banner">
                You'll get an email link to download the app
              </div>
            ) : (
              <span></span>
            )}
          </div>
          {/* Text */}
          <div className="small-container">
            <img src={phoneIcon} className="icon" alt="" />
            <div className="label-wrapper">
              <div className="label">Text</div>
              <div className="description">
                Standard message and data rates may apply
              </div>

              {toggleText ? (
                <div className="input-wrapper">
                  <div className="wrapper">
                    <TextField
                      className="input"
                      autoComplete="off"
                      label="Orders mobile number"
                      required
                      name="orders_sms"
                      type="number"
                      onChange={(e) =>
                        setUserData({ ...userData, orders_sms: e.target.value })
                      }
                      value={userData["orders_sms"]}
                      variant="outlined"
                    />
                  </div>
                </div>
              ) : (
                <span></span>
              )}
            </div>
            <FormControlLabel
              control={
                <Switch
                  className="radio-switch"
                  size="small"
                  checked={toggleText}
                  onChange={(e) => {
                    setToggleText(!toggleText);
                    setUserData({ ...userData, toggleText: !toggleText });
                  }}
                  name="checkedB"
                  color="primary"
                />
              }
              label=""
            />
          </div>

          {/* Email */}
          <div className="small-container">
            <img src={emailIcon} className="icon" alt="" />
            <div className="label-wrapper">
              <div className="label">Email</div>
              <div className="description"></div>

              {toggleEmail ? (
                <div className="input-wrapper">
                  <div className="wrapper">
                    <TextField
                      className="input"
                      autoComplete="off"
                      label="Orders email"
                      required
                      name="orders_email"
                      type="email"
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          orders_email: e.target.value,
                        })
                      }
                      value={userData["orders_email"]}
                      variant="outlined"
                    />
                  </div>
                </div>
              ) : (
                <span></span>
              )}
            </div>
            <FormControlLabel
              control={
                <Switch
                  className="radio-switch"
                  size="small"
                  checked={toggleEmail}
                  onChange={(e) => {
                    setToggleEmail(!toggleEmail);
                    setUserData({ ...userData, toggleEmail: !toggleEmail });
                  }}
                  name="checkedB"
                  color="primary"
                />
              }
              label=""
            />
          </div>

          {/* Customer Orders */}
          <div className="title">Customer orders</div>
          <div className="subtitle">
            How can customers expect to receive their orders?
          </div>

          {/* Indoor Pickup */}
          <div className="small-container">
            <img src={indoorIcon} className="icon" alt="" />
            <div className="label-wrapper">
              <div className="label">Indoor pickup</div>
              <div className="description">
                Customers pick up orders inside your restaurant
              </div>
            </div>
            <FormControlLabel
              control={
                <Switch
                  className="radio-switch"
                  size="small"
                  checked={toggleIndoor}
                  onChange={(e) => {
                    setToggleIndoor(!toggleIndoor);
                    setUserData({ ...userData, toggleIndoor: !toggleIndoor });
                  }}
                  name="checkedB"
                  color="primary"
                />
              }
              label=""
            />
          </div>

          {/* Curbside Pickup */}
          <div className="small-container">
            <img src={carIcon} className="icon" alt="" />
            <div className="label-wrapper">
              <div className="label">Curbside pickup</div>
              <div className="description">
                Customers pick up orders outside of your restaurant
              </div>
            </div>
            <FormControlLabel
              control={
                <Switch
                  className="radio-switch"
                  size="small"
                  checked={toggleCurbside}
                  onChange={(e) => {
                    setToggleCurbside(!toggleCurbside);
                    setUserData({
                      ...userData,
                      toggleCurbside: !toggleCurbside,
                    });
                  }}
                  name="checkedB"
                  color="primary"
                />
              }
              label=""
            />
          </div>

          {/* Payment Methods */}
          <div className="title">Payment methods</div>
          <div className="subtitle">
            What payment methods would you like to accept?
          </div>

          {/* Payment on Arrival */}
          <div className="small-container">
            <img src={cashIcon} className="icon" alt="" />
            <div className="label-wrapper">
              <div className="label">Payment upon arrival</div>
              <div className="description">
                Cash and/or card payment on arrival
              </div>
            </div>
            <FormControlLabel
              control={
                <Switch
                  className="radio-switch"
                  size="small"
                  checked={togglePaymentArrival}
                  onChange={(e) => {
                    setTogglePaymentArrival(!togglePaymentArrival);
                    setUserData({
                      ...userData,
                      togglePaymentArrival: !togglePaymentArrival,
                    });
                  }}
                  name="checkedB"
                  color="primary"
                />
              }
              label=""
            />
          </div>

          {/* Online Payment */}
          <div className="small-container">
            <img src={creditCardIcon} className="icon" alt="" />
            <div className="label-wrapper">
              <div className="label">Online payments via Stripe</div>
              <div className="description">
                Sign up for Stripe to accept online payments
              </div>
            </div>
            <FormControlLabel
              control={
                <Switch
                  className="radio-switch"
                  size="small"
                  checked={togglePaymentOnline}
                  onChange={(e) => {
                    setTogglePaymentOnline(!togglePaymentOnline);
                    setUserData({
                      ...userData,
                      togglePaymentOnline: !togglePaymentOnline,
                    });
                  }}
                  name="checkedB"
                  color="primary"
                />
              }
              label=""
            />
          </div>

          {/* Buttons */}
          <div className="button-container">
            <input
              type="button"
              onClick={() => setStep(2)}
              className="option back"
              value="Back"
            />
            <input
              type="submit"
              id="next-btn"
              className="next option valid"
              value="Next"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ThirdStep;
