import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Landing from "./src/Landing";
import Login from "./src/Login";

const rootElement = document.getElementById("app");

// New as of React v18.x
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <Landing />
    <Login />
  </StrictMode>
);
