import React, { useContext, useEffect } from "react";
import "../../App.css";
import { StepContext } from "../../StepContext.js";
import "./FourthStep.css";
import EditHours from "./EditHours";

const FourthStep = () => {
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

  return (
    <div className="card">
      <div className="header">
        <div className="header-big">Hours of operation</div>
        <div className="header-small">
          Specify your restaurant's hours of operation below
        </div>
      </div>

      <div className="card-content">
        <div className="edit button" onClick={() => setEditHours(true)}>
          Edit hours
        </div>

        {/* Scrim Overlay Start */}
        {editHours ? <EditHours /> : <span></span>}
        {/* Scrip overlay end */}

        {/* Rows */}

        <div className="row">
          <div className="dow element">Monday</div>
          <div className="status element">
            <span className="closed">{status["mon"]}</span>
          </div>
        </div>

        <div className="row">
          <div className="dow element">Tuesday</div>
          <div className="status element">
            <span className="closed">{status["tue"]}</span>
          </div>
        </div>

        <div className="row">
          <div className="dow element">Wednesday</div>
          <div className="status element">
            <span className="closed">{status["wed"]}</span>
          </div>
        </div>

        <div className="row">
          <div className="dow element">Thursday</div>
          <div className="status element">
            <span className="closed">{status["thu"]}</span>
          </div>
        </div>

        <div className="row">
          <div className="dow element">Friday</div>
          <div className="status element">
            <span className="closed">{status["fri"]}</span>
          </div>
        </div>

        <div className="row">
          <div className="dow element">Saturday</div>
          <div className="status element">
            <span className="closed">{status["sat"]}</span>
          </div>
        </div>

        <div className="row">
          <div className="dow element">Sunday </div>
          <div className="status element">
            <span className="closed">{status["sun"]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthStep;
