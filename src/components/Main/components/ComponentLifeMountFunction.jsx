import { useState, useEffect } from "react";

export const CounterFunction = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${counter} times`;
    }, [counter]);

    return (
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Click</button>
        </div>
    );
};
