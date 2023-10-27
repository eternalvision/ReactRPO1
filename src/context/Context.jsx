import { createContext } from "react";
import { useState } from "react";

export const CounterContext = createContext();

export const Context = (props) => {
    const [count, setCount] = useState(0);

    const minusButton = () => {
        setCount(count - 1);
        if (count === -10) {
            setCount(-10);
        }
    };

    const plusButton = () => {
        setCount(count + 1);
        if (count === 15) {
            setCount(15);
        }
    };

    const value = { minusButton, plusButton, count };

    return (
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    );
};
