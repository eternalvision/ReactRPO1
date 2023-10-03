import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Assets } from "./assets/Images";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App Assets={Assets} />
    </React.StrictMode>
);
