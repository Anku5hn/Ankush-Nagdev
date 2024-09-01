import React from "react";
import ProfilePic from '../styles/images/Profile-Pic.png'
const Question = () => {
  return (
    <>
      <div className="question-container">
        <div className="question-header">
        <h2>
          THE <span style={{backgroundColor: "white", color: "black"}}>PRODUCT</span> PLATFORM
        </h2>
        <img className="question--profile-pic" src={ProfilePic} alt="Profile Picture"/>
        </div>
      </div>
    </>
  );
};
export default Question;
