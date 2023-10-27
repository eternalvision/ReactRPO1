import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { ApiRequests } from "./apiClient/apiClient.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App ApiRequests={ApiRequests} />
    </React.StrictMode>
);
