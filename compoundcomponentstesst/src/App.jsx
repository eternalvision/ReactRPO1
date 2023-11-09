import { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const AccordionContext = createContext();

const Accordion = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
            <div>{children}</div>
        </AccordionContext.Provider>
    );
};

Accordion.propTypes = {
    children: PropTypes.node.isRequired,
};

const AccordionItem = ({ children, index }) => {
    const { activeIndex, setActiveIndex } = useContext(AccordionContext);

    const isActive = index === activeIndex;

    return (
        <div>
            <button onClick={() => setActiveIndex(isActive ? null : index)}>
                Toggle
            </button>
            {isActive && children}
        </div>
    );
};

AccordionItem.propTypes = {
    children: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
};

export const App = () => {
    return (
        <Accordion>
            <AccordionItem index={0}>Content 1</AccordionItem>
            <AccordionItem index={1}>Content 2</AccordionItem>
            <AccordionItem index={2}>Content 3</AccordionItem>
        </Accordion>
    );
};
