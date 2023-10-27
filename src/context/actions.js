import { REMOVE_COUNTER, ADD_COUNTER } from "./boilerplate";

export const remove = (payload) => {
    return {
        type: REMOVE_COUNTER,
        payload,
    };
};

export const add = (payload) => {
    return {
        type: ADD_COUNTER,
        payload,
    };
};
