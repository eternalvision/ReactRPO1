import { useDispatch } from "react-redux";

export const ButtonPlus = () => {
    const dispatch = useDispatch();

    const buttonClick = () => {
        dispatch({ type: "ADD_COUNT", payload: 1 });
    };

    return (
        <button onClick={buttonClick} className="minus">
            +
        </button>
    );
};
