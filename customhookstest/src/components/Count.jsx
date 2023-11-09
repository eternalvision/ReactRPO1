import PropTypes from "prop-types";

export const Count = ({ useCounter, useMousePosition }) => {
    const [count, increment, decrement] = useCounter();
    const [position] = useMousePosition();

    return (
        <div>
            <button onClick={decrement}>-</button>
            <br />
            <span>{count}</span>
            <br />
            <button onClick={increment}>+</button>
            <br />
            <br />
            <br />
            x: {position.x} <br />
            y: {position.y}
        </div>
    );
};

Count.propTypes = {
    useCounter: PropTypes.func.isRequired,
    useMousePosition: PropTypes.func.isRequired,
};
