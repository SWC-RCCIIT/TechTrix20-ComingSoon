import React, { Component } from 'react'
import './Screen.css'
import Button from './Buttons/Button';
import Footer from './Footer/Footer';
export class Screen extends Component {
    render() {
        return (
            <div>
   
  <div className="container mt-5">
    <div className="row">
      <div className="col-12">
        <center>
          <img src="./img/logo-2.png" alt="img" className="mr-3" width="250px" height="250px"/>
        </center>
      </div>
    </div>
  </div>
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-2 col-lg-1 col-4 mb-2 mb-md-0 timer-box pt-4 pb-4 mr-2">
        <div className="row">
          <div className="col-12">
            <div className="timer-box-num" name="days">00</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="timer-box-text"><h5>Days</h5></div>
          </div>
        </div>
      </div>
      <div className="col-md-2 col-lg-1 col-4 mb-2 mb-md-0 timer-box pt-4 pb-4 mr-2">
        <div className="row">
          <div className="col-12">
            <div className="timer-box-num" name="hours">06</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="timer-box-text"><h5>Hours</h5></div>
          </div>
        </div>
      </div>
      <div className="col-md-2 col-lg-1 col-4 timer-box pt-4 pb-4 mr-2">
        <div className="row">
          <div className="col-12">
            <div className="timer-box-num" name="minutes">09</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="timer-box-text"><h5>Minutes</h5></div>
          </div>
        </div>
      </div>
      <div className="col-md-2 col-lg-1 col-4 timer-box pt-4 pb-4 mr-2">
        <div className="row">
          <div className="col-12">
            <div className="timer-box-num" name="seconds">25</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="timer-box-text"><h5>Seconds</h5></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br/>
  <div className="container mt-5">
   
    <Button/>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
<Footer/>
  
 </div>
        )
    }
}

export default Screen
