import PropTypes from "prop-types";
import { useContext } from "react";

export const ButtonMinus = ({ CounterContext }) => {
    const { decrementCounter } = useContext(CounterContext);
    return (
        <button onClick={decrementCounter} className="minus">
            -
        </button>
    );
};

ButtonMinus.propTypes = {
    CounterContext: PropTypes.object.isRequired,
};
