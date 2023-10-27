import { useDispatch } from "react-redux";

export const ButtonMinus = () => {
    const dispatch = useDispatch();

    const buttonClick = () => {
        dispatch({ type: "REMOVE_COUNT", payload: 1 });
    };

    return (
        <button onClick={buttonClick} className="minus">
            -
        </button>
    );
};
