import { useContext } from "react";
import PropTypes from "prop-types";

export const ButtonMinus = ({ CounterContext }) => {
    const { minusButton } = useContext(CounterContext);
    return (
        <button onClick={minusButton} className="minus">
            -
        </button>
    );
};

ButtonMinus.propTypes = {
    CounterContext: PropTypes.object.isRequired,
};
