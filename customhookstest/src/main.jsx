import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Hooks } from "./hooks/index";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App Hooks={Hooks} />
    </React.StrictMode>
);
