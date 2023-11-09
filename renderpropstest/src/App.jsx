import { useState, useEffect } from "react";
import { Counter } from "./Counter";

const List = ({ items, render }) => {
    return <div>{items.map(render)}</div>;
};

const MouseTracker = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div>{render(position)}</div>;
};

const CounterUI = ({ count, increment, decrement }) => {
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export const App = () => {
    const items = ["Apple", "Banana", "Cherry"];
    return (
        <>
            <MouseTracker
                render={({ x, y }) => (
                    <h1>
                        Позиция мыши: ({x},{y}) ({x + y})
                    </h1>
                )}
            />
            <List
                items={items}
                render={(item, index) => <div key={index}>{item}</div>}
            />
            <List
                items={items}
                render={(item, index) => (
                    <tr key={index}>
                        <td>{item}</td>
                    </tr>
                )}
            />
            <Counter
                render={(count, increment, decrement) => (
                    <div>
                        <button onClick={increment}>+</button>
                        <h1>{count}</h1>
                        <button onClick={decrement}>+</button>
                    </div>
                )}
            />
            <Counter
                render={(count, increment, decrement) => (
                    <CounterUI
                        count={count}
                        increment={increment}
                        decrement={decrement}
                    />
                )}
            />
        </>
    );
};
