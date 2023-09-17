import { useState } from "react";

export const StateColorExampleComponent = () => {
    const [bgColor, setBgColor] = useState("yellow");
    const [text, setText] = useState("Click me");

    const btnClick = () => {
        bgColor === "yellow" ? setBgColor("red") : setBgColor("yellow");
        setText("You clicked button");
    };

    return (
        <button
            onClick={btnClick}
            style={{ backgroundColor: bgColor, height: "30px" }}>
            {text}
        </button>
    );
};
