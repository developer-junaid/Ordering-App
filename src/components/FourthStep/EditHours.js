import React, { useContext, useEffect } from "react";
import "../../App.css";
import { StepContext } from "../../StepContext.js";
import "./FourthStep.css";
import Hours from "./Hours";
const EditHours = () => {
  // Create constants for week names
  let weekDays = {
    mon: "Closed",
    tue: "Closed",
    wed: "Closed",
    thu: "Closed",
    fri: "Closed",
    sat: "Closed",
    sun: "Closed",
  };

  // Use context
  const {
    circleState,
    setCircleState,
    hours,
    setHours,
    editHours,
    setEditHours,
    status,
    setStatus,
  } = useContext(StepContext);

  // Handle Update
  const handleUpdate = () => {
    Object.keys(weekDays).map((key) => {
      circleState[key]
        ? (status[key] = weekDays[key])
        : (status[key] = "Closed");
    });

    setEditHours(false);
  };

  // Use Effect
  useEffect(() => {
    setTimeout(() => {
      let optionValue = document.querySelector("#selectHours").value;

      if (optionValue === "0") {
        optionValue = "Open";
      } else if (optionValue === "1") {
        optionValue = "Open 24 hours";
      } else {
        optionValue = "Closed";
      }

      // Apply Keys Map
      Object.keys(weekDays).map((key) => {
        circleState[key]
          ? (weekDays[key] = optionValue)
          : (weekDays[key] = "Closed");
      });
    }, 0);
  }, [circleState, hours]);

  return (
    <div>
      <div>
        <div id="scrim" className="block"></div>
        <div id="overlay" className="block">
          <div id="overlay-inner">
            <div className="close" onClick={() => setEditHours(false)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="#5F6368"
                ></path>
              </svg>
            </div>
            <div className="directions">Select days you'd like to edit</div>
            {/* Circles */}
            <div id="circles">
              <div
                id="sun"
                className="circle unselected"
                onClick={() => {
                  setCircleState({ ...circleState, sun: !circleState["sun"] });
                  circleState["sun"]
                    ? (document.querySelector("#sun").className =
                        "circle unselected")
                    : (document.querySelector("#sun").className =
                        "circle selected");
                }}
              >
                S
              </div>

              <div
                id="mon"
                className="circle unselected"
                onClick={() => {
                  setCircleState({ ...circleState, mon: !circleState["mon"] });
                  circleState["mon"]
                    ? (document.querySelector("#mon").className =
                        "circle unselected")
                    : (document.querySelector("#mon").className =
                        "circle selected");
                }}
              >
                M
              </div>

              <div
                id="tue"
                className="circle unselected"
                onClick={() => {
                  setCircleState({ ...circleState, tue: !circleState["tue"] });
                  circleState["tue"]
                    ? (document.querySelector("#tue").className =
                        "circle unselected")
                    : (document.querySelector("#tue").className =
                        "circle selected");
                }}
              >
                T
              </div>

              <div
                id="wed"
                className="circle unselected"
                onClick={() => {
                  setCircleState({ ...circleState, wed: !circleState["wed"] });
                  circleState["wed"]
                    ? (document.querySelector("#wed").className =
                        "circle unselected")
                    : (document.querySelector("#wed").className =
                        "circle selected");
                }}
              >
                W
              </div>

              <div
                id="thu"
                className="circle unselected"
                onClick={() => {
                  setCircleState({ ...circleState, thu: !circleState["thu"] });
                  circleState["thu"]
                    ? (document.querySelector("#thu").className =
                        "circle unselected")
                    : (document.querySelector("#thu").className =
                        "circle selected");
                }}
              >
                T
              </div>

              <div
                id="fri"
                className="circle unselected"
                onClick={() => {
                  setCircleState({ ...circleState, fri: !circleState["fri"] });
                  circleState["fri"]
                    ? (document.querySelector("#fri").className =
                        "circle unselected")
                    : (document.querySelector("#fri").className =
                        "circle selected");
                }}
              >
                F
              </div>

              <div
                id="sat"
                className="circle unselected"
                onClick={() => {
                  setCircleState({ ...circleState, sat: !circleState["sat"] });
                  circleState["sat"]
                    ? (document.querySelector("#sat").className =
                        "circle unselected")
                    : (document.querySelector("#sat").className =
                        "circle selected");
                }}
              >
                S
              </div>
            </div>

            {/* Boxes */}
            <div className="wrapper">
              <select
                id="selectHours"
                onChange={(e) => {
                  if (e.target.value !== "0") {
                    setHours(false);
                  } else {
                    setHours(true);
                  }
                }}
                required
                className="selection"
              >
                <option value="0">Open</option>
                <option value="1">Open 24 hours</option>
                <option value="2">Closed</option>
              </select>
              <div className="svg-append">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 10L12 15L17 10H7Z" fill="#5F6368"></path>
                </svg>
              </div>
            </div>

            <div id="time-blocks">
              <div className="time-block">
                {hours ? <Hours /> : <span></span>}
                <div className="button update" onClick={handleUpdate}>
                  Update
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHours;
