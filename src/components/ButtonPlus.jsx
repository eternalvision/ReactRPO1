import PropTypes from "prop-types";
import { useContext } from "react";

export const ButtonPlus = ({ CounterContext }) => {
    const { incrementCounter } = useContext(CounterContext);

    return (
        <button onClick={incrementCounter} className="minus">
            +
        </button>
    );
};

ButtonPlus.propTypes = {
    CounterContext: PropTypes.object.isRequired,
};
