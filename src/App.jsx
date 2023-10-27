import { Clicker } from "./components/Clicker";
import PropTypes from "prop-types";

export const App = ({ CounterContext }) => {
    return <Clicker CounterContext={CounterContext} />;
};

App.propTypes = {
    CounterContext: PropTypes.object.isRequired,
};
