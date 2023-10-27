import { useContext } from "react";
import PropTypes from "prop-types";

export const ButtonPlus = ({ CounterContext }) => {
    const { plusButton } = useContext(CounterContext);
    return (
        <button onClick={plusButton} className="minu">
            +
        </button>
    );
};

ButtonPlus.propTypes = {
    CounterContext: PropTypes.object.isRequired,
};
