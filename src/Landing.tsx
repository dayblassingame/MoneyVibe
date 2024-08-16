import React from "react";

export default function Landing() {
  const heading = "Manage your finances easily";
  const text =
    "Start monitoring your personal finances and set personalized goals";
  return (
    <div>
      <h1>{heading}</h1>
      <p>{text}</p>
      <button>Start</button>
    </div>
  );
}
