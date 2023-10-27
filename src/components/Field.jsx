import PropTypes from "prop-types";
import { useContext } from "react";

export const Field = ({ CounterContext }) => {
    const { state } = useContext(CounterContext);

    return <div className="field">{state}</div>;
};

Field.propTypes = {
    CounterContext: PropTypes.object.isRequired,
};
