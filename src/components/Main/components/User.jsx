import { Navigate } from "react-router-dom";
import Counter from "./ComponentLifeMount";
import { CounterFunction } from "./ComponentLifeMountFunction";

export const User = ({ data }) => {
    if (!data) {
        return <Navigate to="/" />;
    } else {
        return data.map(({ name, surname }) => {
            return (
                <div key={`${name}${surname}`}>
                    {name} {surname}
                    {/* <Counter /> */}
                    <CounterFunction />
                </div>
            );
        });
    }
};
