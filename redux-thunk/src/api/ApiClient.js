import axios from "axios";

export const fetchData = () => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            dispatch(fetchDataSuccess(data));
        } catch ({ message }) {
            dispatch(fetchDataFailure(message));
        }
    };
};

export const fetchDataRequest = () => {
    return {
        type: "FETCH_DATA_REQUEST",
    };
};

export const fetchDataSuccess = (data) => {
    return {
        type: "FETCH_DATA_SUCCESS",
        payload: data,
    };
};

export const fetchDataFailure = (error) => {
    return {
        type: "FETCH_DATA_FAILURE",
        payload: error,
    };
};
