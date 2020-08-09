import React, { useContext } from "react";
import { StepContext } from "../../StepContext";
import "./FirstStep.css";
import '../../App.css';

const FirstStep = () => {
  // Using Context
  const { setStep } = useContext(StepContext);

  // Handle Clover
  const handleClover = () => {
    alert('You are being redirected to Clover')
    window.open('https://www.clover.com/dashboard/login?webRedirectUrl=https://www.clover.com/setupapp/online-ordering');
  }

  // Handle Square
  const handleSquare = () => {
    alert('You are being redirected to Square')
    window.open('https://squareup.com/login?return_to=%2Foauth2%2Fauthorize%3Fclient_id%3Dsq0idp-CigLSBENBsZhYgCENuepaA%26response_type%3Dcode%26scope%3DMERCHANT_PROFILE_READ%2BPAYMENTS_WRITE%2BCUSTOMERS_READ%2BCUSTOMERS_WRITE%2BORDERS_READ%2BORDERS_WRITE%2BITEMS_READ%2BITEMS_WRITE%2BPAYMENTS_WRITE_ADDITIONAL_RECIPIENTS%26state%3Dab9a0253-718d-40c2-9b63-eccb5f87fd62');
  }

  return (
    <div className="card">
      <div className="header">
        <div className="header-big">Point of sale integration</div>
        <div className="header-small">
          Connect your point of sale (POS) system to import menu , including
          item descriptions and prices. If you don’t currently use a POS system
          choose the fourth option.
        </div>
      </div>
      <div className="card-content">
        {/* Box 1 */}
        <div className="small-container">
          <img src="https://d1j5yzf6fkxjod.cloudfront.net/images/clover-logo.svg" className='icon' alt="" />
          <div className="content-wrapper">
            <div className="label-wrapper">
              <div className="label">Clover</div>
              <div className="description">Connect and import your Clover menu data</div>
            </div>
            <div className="button" onClick={handleClover}>Connect</div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="small-container">
          <img src="https://d1j5yzf6fkxjod.cloudfront.net/images/square-logo.svg" className='icon' alt="" />
          <div className="content-wrapper">
            <div className="label-wrapper">
              <div className="label">Square</div>
              <div className="description">Connect and import your Square merchant data</div>
            </div>
            <div className="button" onClick={handleSquare}>Connect</div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="small-container">
          <div className="content-wrapper">
            <div className="label-wrapper">
              <div className="label">Another POS system</div>
              <div className="description">Select your POS system from the following options</div>
            </div>
            <div className="select-wrapper">
              <div className="wrapper">
                <select required name id="select" onChange={() => setStep(2)} className='placeholder'>
                  <option value>Choose one</option>
                  <option value="0">AccuPOS</option>
                  <option value="1">Aldelo POS</option>
                  <option value="2">Aloha POS</option>
                  <option value="3">BrewPOS</option>
                  <option value="4">Cake POS</option>
                  <option value="5">EPOS Now</option>
                  <option value="6">EZee BurrP!</option>
                  <option value="7">Future POS</option>
                  <option value="8">Harbortouch</option>
                  <option value="9">Lavu POS</option>
                  <option value="10">Lightspeed Restaurant</option>
                  <option value="11">Loyverse</option>
                  <option value="12">Maitre'D</option>
                  <option value="13">Micros POS by Oracle</option>
                  <option value="14">NCR Silver</option>
                  <option value="15">Nobly POS</option>
                  <option value="16">Positouch</option>
                  <option value="17">Restaurant Manager POS</option>
                  <option value="18">Revel Systems</option>
                  <option value="19">Rezku POS</option>
                  <option value="20">ShopKeep</option>
                  <option value="21">SpotOn</option>
                  <option value="22">Toast</option>
                  <option value="23">TouchBistro</option>
                  <option value="24">Upserve</option>
                  <option value="25">Other</option>
                </select>
                <div className="svg-append">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10H7Z" fill="#5F6368"></path>
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Box 4 */}
        <div className="small-container">
          <div className="content-wrapper">
            <div className="label-wrapper">
              <div className="label">No POS system</div>
              <div className="description">View other ways of processing orders</div>
            </div>
            <div className="button" onClick={() => setStep(2)}>Next</div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="terms">
          <span>
            <span className="bold">
              Please read:
            </span> By clicking “Next”, you are agreeing to
            <a class="link" href="https://the.ordering.app/merchant-terms/">
              The Ordering.app’s Merchant Terms of Service</a>
              . In addition,
             for the purpose of enabling The Ordering.App to receive and send
             you orders originating from certain Google services, you agree to
             <a class="link" href="https://the.ordering.app/google-terms/">
              Google’s Food Ordering Terms of Service</a>
              . In particular, you
             agree to handle user data with care and solely in accordance with
             the terms of these agreements.

          </span>
        </div>


      </div>

    </div>
  );
};

export default FirstStep;
