import { useState } from "react";

const Button = ({ bgColor, onClickAct, text }) => {
    const handlerClick = () => {
        onClickAct(bgColor);
    };

    return (
        <button
            className="Button"
            onClick={handlerClick}
            style={{ backgroundColor: bgColor }}>
            {text}
        </button>
    );
};

const DisplayBlock = ({ bgColor }) => {
    return (
        <div className="DisplayBlock" style={{ backgroundColor: bgColor }}>
            Some text
        </div>
    );
};

export const ChangeColorExampleComponent = () => {
    const [displayBgColor, setDisplayBgColor] = useState("white");

    const stateFunc = (newBgColor) => {
        setDisplayBgColor(newBgColor);
    };

    return (
        <>
            <Button bgColor="red" text="red" onClickAct={stateFunc} />
            <Button bgColor="green" text="red" onClickAct={stateFunc} />
            <Button bgColor="yellow" text="red" onClickAct={stateFunc} />
            <DisplayBlock bgColor={displayBgColor} />
        </>
    );
};
