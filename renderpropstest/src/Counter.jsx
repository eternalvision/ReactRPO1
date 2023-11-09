import { useState } from "react";

const RenderCounter = ({ render }) => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return <div>{render(count, increment, decrement)}</div>;
};

export const Counter = ({ render }) => {
    return (
        <div>
            <h1>Text</h1>
            <RenderCounter render={render} />
        </div>
    );
};
