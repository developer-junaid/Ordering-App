import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { StepContext } from "../../StepContext";
import "../../App.css";
import "./SecondStep.css";

const SecondStep = () => {
  // Using Context
  const { setStep, userData, setUserData } = useContext(StepContext);

  // Show restaurant or not
  let restaurants = userData["total_locations"] > 1;

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="card">
      <div className="header">
        <div className="header-big">Business info</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card-content">
          <div className="input-row">
            <div className="first-input thirds">
              <div className="wrapper">
                <TextField
                  autoComplete="off"
                  className="input"
                  value={userData["restaurant_name"]}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      restaurant_name: e.target.value,
                    })
                  }
                  name="restaurant_name"
                  type="text"
                  id="name"
                  required
                  label="Business brand name"
                  variant="outlined"
                />
              </div>
            </div>

            <div className="thirds">
              <div className="wrapper">
                <TextField
                  autoComplete="off"
                  className="input"
                  label="Website (optional)"
                  required
                  name="website"
                  type="text"
                  onChange={(e) =>
                    setUserData({ ...userData, website: e.target.value })
                  }
                  value={userData["website"]}
                  variant="outlined"
                />
              </div>
            </div>

            <div className="last-input thirds">
              <div className="wrapper">
                <TextField
                  autoComplete="off"
                  className="input"
                  label="Number of locations"
                  required
                  name="total_locations"
                  type="number"
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      total_locations: e.target.value,
                    })
                  }
                  value={userData["total_locations"]}
                  variant="outlined"
                />
              </div>
            </div>
          </div>

          {restaurants ? (
            <span></span>
          ) : (
            <div>
              <div className="wrapper">
                <div className="container">
                  <TextField
                    autoComplete="off"
                    className="input"
                    id="rest_address"
                    label="Restaurant address"
                    required
                    name="restaurant_address"
                    type="text"
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        restaurant_address: e.target.value,
                      })
                    }
                    variant="outlined"
                  />
                  <div
                    className="svg-append-cross"
                    onClick={() => {
                      document.querySelector("#rest_address").value = "";
                      setUserData({ ...userData, restaurant_address: "" });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M6.5 0C2.9159 0 0 2.9159 0 6.5C0 10.0841 2.9159 13 6.5 13C10.0841 13 13 10.0841 13 6.5C13 2.9159 10.084 0 6.5 0ZM6.5 11.8857C3.53038 11.8857 1.1143 9.46962 1.1143 6.5C1.1143 3.53038 3.53038 1.1143 6.5 1.1143C9.46962 1.1143 11.8857 3.53038 11.8857 6.5C11.8857 9.46962 9.46954 11.8857 6.5 11.8857Z"
                        fill="#007BF7"
                      ></path>
                      <circle cx="6.5" cy="6.5" r="6.5" fill="#B2D5F9"></circle>
                      <path
                        d="M9.01691 3.98558C8.79928 3.76795 8.44637 3.76795 8.22911 3.98558L6.50182 5.7131L4.77453 3.98558C4.55689 3.76795 4.20436 3.76795 3.98673 3.98558C3.76909 4.20322 3.76909 4.55575 3.98673 4.77339L5.71402 6.50083L3.98665 8.22834C3.76902 8.44598 3.76902 8.79851 3.98665 9.01615C4.09543 9.12493 4.23801 9.17939 4.38059 9.17939C4.52317 9.17939 4.6659 9.125 4.77453 9.01615L6.50182 7.28871L8.22911 9.01615C8.33789 9.12493 8.48047 9.17939 8.62305 9.17939C8.76563 9.17939 8.90813 9.125 9.01699 9.01615C9.23463 8.79851 9.23463 8.44598 9.01699 8.22834L7.28963 6.5009L9.01691 4.77346C9.23455 4.55583 9.23455 4.20322 9.01691 3.98558Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="directions">Contact information</div>

          <div className="explanation">
            For the person who manages this business
          </div>

          <div className="input-row">
            <div className="halves first-input">
              <div className="wrapper">
                <TextField
                  className="input"
                  autoComplete="off"
                  label="Full name"
                  required
                  name="full_name"
                  type="text"
                  onChange={(e) =>
                    setUserData({ ...userData, full_name: e.target.value })
                  }
                  value={userData["full_name"]}
                  variant="outlined"
                />
              </div>
            </div>

            <div className="halves last-input">
              <div className="wrapper">
                <TextField
                  className="input"
                  autoComplete="off"
                  label="Job title"
                  required
                  name="job_title"
                  type="text"
                  onChange={(e) =>
                    setUserData({ ...userData, job_title: e.target.value })
                  }
                  value={userData["job_title"]}
                  variant="outlined"
                />
              </div>
            </div>
          </div>

          <div className="input-row">
            <div className="halves first-input">
              <div className="wrapper">
                <TextField
                  className="input"
                  autoComplete="off"
                  label="Your email"
                  required
                  name="email"
                  type="email"
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  value={userData["email"]}
                  variant="outlined"
                />
              </div>
            </div>

            <div className="halves last-input">
              <div className="wrapper">
                <TextField
                  className="input"
                  autoComplete="off"
                  label="Phone number"
                  required
                  name="phone"
                  type="number"
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                  value={userData["phone"]}
                  variant="outlined"
                />
              </div>
            </div>
          </div>

          <div className="button-container">
            <input
              type="button"
              onClick={() => setStep(1)}
              className="option back"
              value="Back"
            />
            <input type="submit" className="next option valid" value="Next" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SecondStep;
