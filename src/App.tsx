import { Outlet } from "react-router-dom";
import "./global.scss";
import Landing from "./Landing";
import Login from "./Login";
import React from "react";

export default function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
