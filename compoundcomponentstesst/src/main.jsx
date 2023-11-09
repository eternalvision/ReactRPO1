import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { ToggleComponent } from "./Toggle";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
        <ToggleComponent />
    </React.StrictMode>
);
