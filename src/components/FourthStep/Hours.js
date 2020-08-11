import React, { useContext, useEffect } from "react";
import "../../App.css";
import "./FourthStep.css";
import { StepContext } from "../../StepContext";
const Hours = () => {
  // Use Context
  const { availableHours, setAvailableHours } = useContext(StepContext);

  // Use Effect

  return (
    <div>
      <div>
        {/* Opening Time */}
        <div className="wrapper">
          <select
            name=""
            className="placeholder"
            onChange={(e) => {
              setAvailableHours({
                ...availableHours,
                openingHours: e.target.value,
              });
              console.log(availableHours);
            }}
            required
            id="openingHours"
          >
            <option value>Opening time</option>
            <option value="12:30 AM">12:30 AM</option>
            <option value="1:00 AM">1:00 AM</option>
            <option value="1:30 AM">1:30 AM</option>
            <option value="2:00 AM">1:30 AM</option>
            <option value="2:30 AM">2:30 AM</option>
            <option value="3:00 AM">3:00 AM</option>
            <option value="3:30 AM">3:30 AM</option>
            <option value="4:00 AM">4:00 AM</option>
            <option value="4:30 AM">4:30 AM</option>
            <option value="5:00 AM9">5:00 AM</option>
            <option value="5:30 AM">5:30 AM</option>
            <option value="6:00 AM">6:00 AM</option>
            <option value="6:30 AM">6:30 AM</option>
            <option value="7:00 AM">7:00 AM</option>
            <option value="7:30 AM">7:30 AM</option>
            <option value="8:00 AM">8:00 AM</option>
            <option value="8:30 AM">8:30 AM</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="9:30 AM">9:30 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="12:30 PM">12:30 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="1:30 PM">1:30 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="2:30 PM">2:30 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="3:30 PM">3:30 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="4:30 PM">4:30 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="5:30 PM">5:30 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="6:30 PM">6:30 PM</option>
            <option value="7:00 PM">7:00 PM</option>
            <option value="7:30 PM">7:30 PM</option>
            <option value="8:00 PM">8:00 PM</option>
            <option value="8:30 PM">8:30 PM</option>
            <option value="9:00 PM">9:00 PM</option>
            <option value="9:30 PM">9:30 PM</option>
            <option value="10:00 PM">10:00 PM</option>
            <option value="10:30 PM">10:30 PM</option>
            <option value="11:00 PM">11:00 PM</option>
            <option value="11:30 PM">11:30 PM</option>
            <option value="12:00 AM">12:00 AM</option>
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

        {/* Closing Time */}
        <div className="wrapper">
          <select
            name=""
            className="placeholder"
            onChange={(e) => {
              setAvailableHours({
                ...availableHours,
                closingHours: e.target.value,
              });
              console.log(availableHours);
            }}
            required
            id="closingHours"
          >
            <option value>Closing time</option>
            <option value="12:30 AM">12:30 AM</option>
            <option value="1:00 AM">1:00 AM</option>
            <option value="1:30 AM">1:30 AM</option>
            <option value="2:00 AM">1:30 AM</option>
            <option value="2:30 AM">2:30 AM</option>
            <option value="3:00 AM">3:00 AM</option>
            <option value="3:30 AM">3:30 AM</option>
            <option value="4:00 AM">4:00 AM</option>
            <option value="4:30 AM">4:30 AM</option>
            <option value="5:00 AM9">5:00 AM</option>
            <option value="5:30 AM">5:30 AM</option>
            <option value="6:00 AM">6:00 AM</option>
            <option value="6:30 AM">6:30 AM</option>
            <option value="7:00 AM">7:00 AM</option>
            <option value="7:30 AM">7:30 AM</option>
            <option value="8:00 AM">8:00 AM</option>
            <option value="8:30 AM">8:30 AM</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="9:30 AM">9:30 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="12:30 PM">12:30 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="1:30 PM">1:30 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="2:30 PM">2:30 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="3:30 PM">3:30 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="4:30 PM">4:30 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="5:30 PM">5:30 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="6:30 PM">6:30 PM</option>
            <option value="7:00 PM">7:00 PM</option>
            <option value="7:30 PM">7:30 PM</option>
            <option value="8:00 PM">8:00 PM</option>
            <option value="8:30 PM">8:30 PM</option>
            <option value="9:00 PM">9:00 PM</option>
            <option value="9:30 PM">9:30 PM</option>
            <option value="10:00 PM">10:00 PM</option>
            <option value="10:30 PM">10:30 PM</option>
            <option value="11:00 PM">11:00 PM</option>
            <option value="11:30 PM">11:30 PM</option>
            <option value="12:00 AM">12:00 AM</option>
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

        {/* Nav */}

        <div id="nav">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
              fill="#5F6368"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hours;
