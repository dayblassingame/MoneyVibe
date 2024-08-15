import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";

const rootElement = document.getElementById("app");

// New as of React v18.x
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
