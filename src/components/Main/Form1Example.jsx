import { useState } from "react";

export const Form1Example = () => {
    const [value, setValue] = useState("");

    const handleInputChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    };

    return (
        <form>
            <input type="text" onChange={handleInputChange} value={value} />
            <input
                type="submit"
                value="Click me"
                onClick={(event) => {
                    event.preventDefault();
                }}
            />
        </form>
    );
};
