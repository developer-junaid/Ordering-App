import React from "react";
import "../../App.css";
import "./FourthStep.css";

const Hours = () => {
  return (
    <div>
      <div>
        {/* Opening Time */}
        <div className="wrapper">
          <select name="" className="placeholder" required id="select">
            <option value>Opening time</option>
            <option value="0">12:30 AM</option>
            <option value="1">1:00 AM</option>
            <option value="2">1:30 AM</option>
            <option value="3">2:00 AM</option>
            <option value="4">2:30 AM</option>
            <option value="5">3:00 AM</option>
            <option value="6">3:30 AM</option>
            <option value="7">4:00 AM</option>
            <option value="8">4:30 AM</option>
            <option value="9">5:00 AM</option>
            <option value="10">5:30 AM</option>
            <option value="11">6:00 AM</option>
            <option value="12">6:30 AM</option>
            <option value="13">7:00 AM</option>
            <option value="14">7:30 AM</option>
            <option value="15">8:00 AM</option>
            <option value="16">8:30 AM</option>
            <option value="17">9:00 AM</option>
            <option value="18">9:30 AM</option>
            <option value="19">10:00 AM</option>
            <option value="20">10:30 AM</option>
            <option value="21">11:00 AM</option>
            <option value="22">11:30 AM</option>
            <option value="23">12:00 PM</option>
            <option value="24">12:30 PM</option>
            <option value="25">1:00 PM</option>
            <option value="26">1:30 PM</option>
            <option value="27">2:00 PM</option>
            <option value="28">2:30 PM</option>
            <option value="29">3:00 PM</option>
            <option value="30">3:30 PM</option>
            <option value="31">4:00 PM</option>
            <option value="32">4:30 PM</option>
            <option value="33">5:00 PM</option>
            <option value="34">5:30 PM</option>
            <option value="35">6:00 PM</option>
            <option value="36">6:30 PM</option>
            <option value="37">7:00 PM</option>
            <option value="38">7:30 PM</option>
            <option value="39">8:00 PM</option>
            <option value="40">8:30 PM</option>
            <option value="41">9:00 PM</option>
            <option value="42">9:30 PM</option>
            <option value="43">10:00 PM</option>
            <option value="44">10:30 PM</option>
            <option value="45">11:00 PM</option>
            <option value="46">11:30 PM</option>
            <option value="47">12:00 AM</option>
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
          <select name="" className="placeholder" required id="select">
            <option value>Closing time</option>
            <option value="0">12:30 AM</option>
            <option value="1">1:00 AM</option>
            <option value="2">1:30 AM</option>
            <option value="3">2:00 AM</option>
            <option value="4">2:30 AM</option>
            <option value="5">3:00 AM</option>
            <option value="6">3:30 AM</option>
            <option value="7">4:00 AM</option>
            <option value="8">4:30 AM</option>
            <option value="9">5:00 AM</option>
            <option value="10">5:30 AM</option>
            <option value="11">6:00 AM</option>
            <option value="12">6:30 AM</option>
            <option value="13">7:00 AM</option>
            <option value="14">7:30 AM</option>
            <option value="15">8:00 AM</option>
            <option value="16">8:30 AM</option>
            <option value="17">9:00 AM</option>
            <option value="18">9:30 AM</option>
            <option value="19">10:00 AM</option>
            <option value="20">10:30 AM</option>
            <option value="21">11:00 AM</option>
            <option value="22">11:30 AM</option>
            <option value="23">12:00 PM</option>
            <option value="24">12:30 PM</option>
            <option value="25">1:00 PM</option>
            <option value="26">1:30 PM</option>
            <option value="27">2:00 PM</option>
            <option value="28">2:30 PM</option>
            <option value="29">3:00 PM</option>
            <option value="30">3:30 PM</option>
            <option value="31">4:00 PM</option>
            <option value="32">4:30 PM</option>
            <option value="33">5:00 PM</option>
            <option value="34">5:30 PM</option>
            <option value="35">6:00 PM</option>
            <option value="36">6:30 PM</option>
            <option value="37">7:00 PM</option>
            <option value="38">7:30 PM</option>
            <option value="39">8:00 PM</option>
            <option value="40">8:30 PM</option>
            <option value="41">9:00 PM</option>
            <option value="42">9:30 PM</option>
            <option value="43">10:00 PM</option>
            <option value="44">10:30 PM</option>
            <option value="45">11:00 PM</option>
            <option value="46">11:30 PM</option>
            <option value="47">12:00 AM</option>
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
