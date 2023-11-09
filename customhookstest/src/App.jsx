import { Count } from "./components";
import PropTypes from "prop-types";

export const App = ({ Hooks }) => {
    return (
        <>
            <Count {...Hooks} />
        </>
    );
};

App.propTypes = {
    Hooks: PropTypes.object.isRequired,
};
