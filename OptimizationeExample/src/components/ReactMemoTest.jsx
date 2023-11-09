import React, { useState } from "react";

const Component = React.memo(function MyComponent({ value }) {
    console.log("Rendered!");

    return <div>{value}</div>;
});

export const ReactMemoTest = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <Component value={value} />
            <button onClick={() => setValue(value + 1)}>Increment</button>
        </div>
    );
};
