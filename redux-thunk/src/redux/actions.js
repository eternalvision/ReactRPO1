import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "FETCH_DATA_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                data: payload,
            };
        case "FETCH_DATA_FAILURE":
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};

export const store = configureStore(
    { reducer: reducer },
    applyMiddleware(thunk)
);
