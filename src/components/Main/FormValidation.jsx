import { useState } from "react";

export const FormValidationComponent = () => {
    const [name, setName] = useState("");
    const [inputBorderColor, setInputBorderColor] = useState("black");

    const handlerNameChanged = (event) => {
        let value = event.target.value;

        if (value.trim().toUpperCase() === "TEST") {
            setInputBorderColor("red");
            setName("");
        } else {
            if (name === "") {
                setInputBorderColor("black");
            }
            setName(value);
        }
    };

    return (
        <form>
            <input
                type="text"
                onChange={handlerNameChanged}
                style={{ border: `1px solid ${inputBorderColor}` }}
                value={name}
            />
            <input
                type="submit"
                value="Submit"
                onClick={(event) => {
                    event.preventDefault();
                    console.log(name);
                }}
            />
        </form>
    );
};
