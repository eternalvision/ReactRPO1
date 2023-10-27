import { useSelector } from "react-redux";

export const Field = () => {
    const state = useSelector((v) => v.count);

    return <div className="field">{state}</div>;
};
