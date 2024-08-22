import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./src/App";
import Login from "./src/Login";
import Landing from "./src/Landing";

const rootElement = document.getElementById("app");

// New as of React v18.x
const root = createRoot(rootElement!);

const router = createHashRouter([
  {
    path: "*",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
