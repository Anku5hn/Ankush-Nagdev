import React, { useState, useEffect } from "react";
import Blob from "../components/Blob.jsx";
import Header from "../components/layout/Header.jsx";
import Timer from "../components/Timer.jsx";
const Home = () => {
  const [inputText, setInputText] = useState("Please enter your email id");
  const [notifyColor, setNotifyColor] = useState("gray");
  const [timerSeconds, setSeconds] = useState(60);
  const [viewHome, setViewHome] = useState('block');
  const [liveView, setLiveView] = useState('none');
  const handleEmailFocus = () => {
    setInputText("");
    setNotifyColor("white");
  };
  const handleEmailBlur = () => {
    setInputText("Please enter your email id");
    setNotifyColor("gray");
  };

useEffect(()=>{
 timerSeconds > 0 && setTimeout(()=>(setSeconds(timerSeconds - 1)),1000);
 const viewLive = () =>{
  setViewHome('none');
  setLiveView('flex');
 }
 timerSeconds == 0 && viewLive();
},[timerSeconds]);
  return (
    <>
      <Blob />
      <Header />
      <div className="home-wrapper" style={{display:viewHome}}>
        <div className="home--text-container">
          <div className="home--title-wrapper">
            <h1>Launching New Module Soon! </h1>
            <div className="home--paragraph-wrapper">
              <p>
                We are <strong>Crafting a new feature</strong> for you.
              </p>
              <p>Keep an eye out for updates - We're </p>
              <p>working to make it available soon!</p>
            </div>
            <div className="home--get-ready-wrapper">
              <h2>GET READY FOR THE REVEAL!</h2>
            </div>
          </div>
        </div>
        <div className="home--timer-container">
          <Timer minutes={"00"} seconds={timerSeconds} />
          <div className="timer--email-container">
            <p>
              Be the first to know! Share your email and We'll notify you when
              it's live.
            </p>
            <div className="home--email-wrapper">
              <input
                name="Email"
                placeholder={`${inputText}`}
                className="home--email-field"
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
              />
              <button className="notify-button" style={{ color: notifyColor }}>
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='live-container' style={{display:liveView, flexDirection:"column", alignItems:"center",}}>
        <h1>We are Live Now!</h1>
        <div className='live--text'>
        <p>Our new feature is now <strong>Live and ready</strong> for you to explore.</p>
        <p>Go ahead and give it a try</p>
        </div>
        <button>Get Started</button>
      </div>
    </>
  );
};
export default Home;
