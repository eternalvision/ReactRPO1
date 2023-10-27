import { useContext } from "react";
import PropTypes from "prop-types";

export const Field = ({ CounterContext }) => {
    const { count } = useContext(CounterContext);

    return <div className="field">{count}</div>;
};

Field.propTypes = {
    CounterContext: PropTypes.object.isRequired,
};
