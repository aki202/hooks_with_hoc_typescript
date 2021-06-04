import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FunctionCounter from "./components/FunctionalCounter";
import ClassCounter from "./components/ClassCounter";

ReactDOM.render(
  <React.StrictMode>
    <ClassCounter />
    <FunctionCounter />
  </React.StrictMode>,
  document.getElementById("root")
);
