import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Clicker } from "./components/Clicker";

export const App = () => {
    const defaultStateValue = 0;

    const countReducer = (state = defaultStateValue, { type, payload }) => {
        switch (type) {
            case "ADD_COUNT":
                return state + payload;
            case "REMOVE_COUNT":
                return state - payload;
            default:
                return state;
        }
    };

    const rootReducer = {
        count: countReducer,
    };

    const store = configureStore({ reducer: rootReducer });

    return (
        <Provider store={store}>
            <Clicker />
        </Provider>
    );
};
