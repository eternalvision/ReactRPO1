import { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const ToggleContext = createContext();

const Toggle = ({ children }) => {
    const [on, setOn] = useState(false);
    const toggle = () => setOn(!on);

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            <div>{children}</div>
        </ToggleContext.Provider>
    );
};

Toggle.propTypes = {
    children: PropTypes.node.isRequired,
};

const ToggleOn = ({ children }) => {
    const { on } = useContext(ToggleContext);
    return on ? null : children;
};

ToggleOn.propTypes = {
    children: PropTypes.node.isRequired,
};

const ToggleOff = ({ children }) => {
    const { on } = useContext(ToggleContext);
    return on ? children : null;
};

ToggleOff.propTypes = {
    children: PropTypes.node.isRequired,
};

const ToggleButton = () => {
    const { toggle } = useContext(ToggleContext);
    return <button onClick={toggle}>Toggle</button>;
};

export const ToggleComponent = () => {
    return (
        <Toggle>
            <ToggleOn>On</ToggleOn>
            <ToggleOff>Off</ToggleOff>
            <ToggleButton />
        </Toggle>
    );
};
