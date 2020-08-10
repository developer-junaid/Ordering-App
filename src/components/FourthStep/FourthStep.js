import React, { useContext, useEffect } from 'react';
import '../../App.css';
import { StepContext } from '../../StepContext.js';
import './FourthStep.css';

const FourthStep = () => {

  // Use context 
  const { circleState, setCircleState } = useContext(StepContext);

  useEffect(() => {
    setTimeout(() => {
      console.log(circleState);

    }, 0)
  }, [circleState])



  return (
    <div className="card">
      <div className="header">
        <div className="header-big">Hours of operation</div>
        <div className="header-small">Specify your restaurant's hours of operation below</div>
      </div>

      <div className="card-content">
        <div className="edit button">Edit hours</div>
        <div id="scrim" className='block'></div>
        <div id="overlay" className='block'>
          <div id="overlay-inner">
            <div className="close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#5F6368"></path>
              </svg>
            </div>
            <div className="directions">
              Select days you'd like to edit
            </div>
            <div id="circles">
              <div id='circle7' className='circle unselected' onClick={() => setCircleState({ 'circle7': !circleState['circle7'] })} >S</div>
              <div id='circle1' className='circle unselected' onClick={() => setCircleState({ 'circle1': !circleState['circle1'] })} >M</div>
              <div id='circle2' className='circle unselected' onClick={() => setCircleState({ 'circle2': !circleState['circle2'] })} >T</div>
              <div id='circle3' className='circle unselected' onClick={() => setCircleState({ 'circle3': !circleState['circle3'] })} >W</div>
              <div id='circle4' className='circle unselected' onClick={() => setCircleState({ 'circle4': !circleState['circle4'] })} >T</div>
              <div id='circle5' className='circle unselected' onClick={() => setCircleState({ 'circle5': !circleState['circle5'] })} >F</div>
              <div id='circle6' className='circle unselected' onClick={() => setCircleState({ 'circle6': !circleState['circle6'] })} >S</div>


            </div>
          </div>
        </div>



        {/* Rows */}

        <div className="row">
          <div className="dow element">Monday</div>
          <div className="status element">
            <span className='closed'>Closed</span>
          </div>
        </div>

        <div className="row">
          <div className="dow element">Tuesday</div>
          <div className="status element">
            <span className='closed'>Closed</span>
          </div>
        </div>

        <div className="row">
          <div className="dow element">Wednesday</div>
          <div className="status element">
            <span className='closed'>Closed</span>
          </div>
        </div>

        <div className="row">
          <div className="dow element">Thursday</div>
          <div className="status element">
            <span className='closed'>Closed</span>
          </div>
        </div>

        <div className="row">
          <div className="dow element">Friday</div>
          <div className="status element">
            <span className='closed'>Closed</span>
          </div>
        </div>

        <div className="row">
          <div className="dow element">Saturday</div>
          <div className="status element">
            <span className='closed'>Closed</span>
          </div>
        </div>

        <div className="row">
          <div className="dow element">Sunday </div>
          <div className="status element">
            <span className='closed'>Closed</span>
          </div>
        </div>


      </div>

    </div>
  )
}

export default FourthStep;