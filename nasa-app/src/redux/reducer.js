import {
    FETCH_PHOTO_START,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILURE,
} from "./actions";

const initialState = {
    loading: false,
    photo: null,
    error: null,
};

export const reducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case FETCH_PHOTO_START:
            return { ...state, loading: true };
        case FETCH_PHOTO_SUCCESS:
            return { ...state, loading: false, photo: payload };
        case FETCH_PHOTO_FAILURE:
            return { ...state, loading: false, error: payload };
        default:
            return state;
    }
};
