import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { add, remove } from "./actions";

export const CounterContext = createContext();

export const Context = (props) => {
    const [state, dispath] = useReducer(reducer, 1);

    const decrementCounter = () => {
        dispath(remove(1));
    };

    const incrementCounter = () => {
        dispath(add(1));
    };

    const value = { decrementCounter, incrementCounter, state };

    return (
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    );
};
