import { combineReducers } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

export const rootReducer = combineReducers({
    nasa: reducer,
});
