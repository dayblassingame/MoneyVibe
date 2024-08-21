import React from "react";
import "./stylesheets/pages/Landing.scss";

export default function Landing() {
  const heading = "Manage your finances easily";
  const text =
    "Start monitoring your personal finances and set personalized goals";
  return (
    <div id="landing">
      <div id="background">
        <div className="circle one">
          <svg viewBox="0 0 100 100">
            <circle
              r="45"
              cx="50"
              cy="50"
              fill="transparent"
              stroke="white"
              stroke-width="1"
            />
          </svg>
        </div>
        <div className="circle two">
          <svg viewBox="0 0 100 100">
            <circle r="45" cx="50" cy="50" fill="green" />
          </svg>
        </div>
        <div className="circle three">
          <svg viewBox="0 0 100 100">
            <circle
              r="45"
              cx="50"
              cy="50"
              fill="black"
              stroke="white"
              stroke-width="1"
            />
          </svg>
        </div>
        <div className="circle four">
          <svg viewBox="0 0 100 100">
            <circle r="45" cx="50" cy="50" fill="blue" />
          </svg>
        </div>
        <div className="circle five">
          <svg viewBox="0 0 50 100">
            <circle r="45" cx="50" cy="50" fill="red" />
          </svg>
        </div>
        <div className="circle six">
          <svg viewBox="0 0 55 100">
            <circle
              r="45"
              cx="50"
              cy="50"
              fill="black"
              stroke="white"
              stroke-width="1"
            />
          </svg>
        </div>
        <div className="circle seven">
          <svg viewBox="0 0 100 100">
            <circle r="45" cx="50" cy="50" fill="orange" />
          </svg>
        </div>
        <div className="circle eight">
          <svg viewBox="0 0 100 100">
            <circle
              r="45"
              cx="50"
              cy="50"
              fill="black"
              stroke="white"
              stroke-width="1"
            />
          </svg>
        </div>
      </div>
      <div className="text">
        <h1>{heading}</h1>
        <h4>{text}</h4>
        <button>Start</button>
      </div>
    </div>
  );
}
