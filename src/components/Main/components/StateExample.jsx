import { useState } from "react";

export const StateExample = () => {
    const [value, setValue] = useState("");

    const handlerSubmit = (event) => {
        event.preventDefault();
        console.log(value);
    };

    const handlerChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    };

    return (
        <form onSubmit={handlerSubmit}>
            <input type="text" value={value} onChange={handlerChange} />
            <input type="submit" value="Submit" />
        </form>
    );
};
