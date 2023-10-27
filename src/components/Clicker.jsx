import { ButtonMinus } from "./ButtonMinus";
import { ButtonPlus } from "./ButtonPlus";
import { Field } from "./Field";

export const Clicker = () => {
    return (
        <div className="Clicker">
            <div className="counter">
                <ButtonMinus />
                <Field />
                <ButtonPlus />
            </div>
        </div>
    );
};
