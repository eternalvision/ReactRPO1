import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { CounterWithControls } from "./Counter";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
        <CounterWithControls />
    </React.StrictMode>
);
