import { ButtonMinus } from "./ButtonMinus";
import { ButtonPlus } from "./ButtonPlus";
import { Field } from "./Field";
import PropTypes from "prop-types";

export const Clicker = ({ CounterContext }) => {
    return (
        <div className="Clicker">
            <div className="counter">
                <ButtonMinus CounterContext={CounterContext} />
                <Field CounterContext={CounterContext} />
                <ButtonPlus CounterContext={CounterContext} />
            </div>
        </div>
    );
};

Clicker.propTypes = {
    CounterContext: PropTypes.object.isRequired,
};
