import React from "react";
const Timer = (props) => {
  return (
    <>
      <div className="timer-container">
        <div className="timer--wrapper">
          <div className="timer---hours">
            <h3>{props.hours}</h3>
            <p>Hours</p>
          </div>
          <div className="timer---colon timer---hours">
            <h3>:</h3>
          </div>
          <div className="timer---minutes">
            <h3>{props.minutes}</h3>
            <p>Minutes</p>
          </div>
          <div className="timer---colon">
            <h3>:</h3>
          </div>
          <div className="timer---seconds">
            <h3>{props.seconds}</h3>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
