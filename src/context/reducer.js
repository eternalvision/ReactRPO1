import { REMOVE_COUNTER, ADD_COUNTER } from "./boilerplate";

export const reducer = (state, { type }) => {
    switch (type) {
        case ADD_COUNTER:
            if (state === 10) return (state = 10);
            else return state + 1;
        case REMOVE_COUNTER:
            if (state === -15) return (state = -15);
            else return state - 1;
        default:
            return state;
    }
};
