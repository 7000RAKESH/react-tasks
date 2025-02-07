import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Calculator from "./components/Calculator.jsx";
import Todolist from "./components/Todolist.jsx";
import Fetch from "./components/Fetch.jsx";
import Fetch2 from "./components/Fetch2.jsx";
import Stopwatch from "./components/Stopwatch.jsx";
import Toggle from "./components/Toggle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toggle />
    <br />
    <br />
    <Stopwatch />
    <br />
    <br />
    <Calculator />
    <br />
    <br />
    <Todolist />
    <br />
    <br />
    <Fetch />
    <br />
    <br />
    <Fetch2 />
    <br />
    <br />
    <br />

    {/* <App /> */}
  </StrictMode>
);
