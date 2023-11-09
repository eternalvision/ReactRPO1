import { useState } from "react";
import PropTypes from "prop-types";

const CounterDisplay = (props) => {
    return <div>{props.count}</div>;
};

CounterDisplay.propTypes = {
    count: PropTypes.number.isRequired,
};

const withCounter = (WrappedComponent) => {
    return function EnhancedComponent(props) {
        const [count, setCount] = useState(0);

        return (
            <div>
                <button onClick={() => setCount(count - 1)}>-</button>
                <WrappedComponent count={count} {...props} />
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        );
    };
};

export const CounterWithControls = withCounter(CounterDisplay);
