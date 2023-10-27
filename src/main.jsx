import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Context, CounterContext } from "./context/Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Context>
            <App CounterContext={CounterContext} />
        </Context>
    </React.StrictMode>
);
