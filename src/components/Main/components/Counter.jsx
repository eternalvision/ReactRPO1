import { useState } from "react";

export const Counter = () => {
    const [currentValue, setCurrentValue] = useState(0);

    const handlerPlusClick = () => {
        setCurrentValue(currentValue + 1);
        //! до + 50
    };

    const handlerMinusClick = () => {
        setCurrentValue(currentValue - 1);
        //! до - 60
    };

    return (
        <>
            <button onClick={handlerPlusClick}>-</button>
            <p>{currentValue}</p>
            <button onClick={handlerMinusClick}>+</button>
        </>
    );
};
