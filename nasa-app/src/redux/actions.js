import axios from "axios";
export const FETCH_PHOTO_START = "FETCH_PHOTO_START";
export const FETCH_PHOTO_SUCCESS = "FETCH_PHOTO_SUCCESS";
export const FETCH_PHOTO_FAILURE = "FETCH_PHOTO_FAILURE";

export const fetchPhotoStart = () => ({
    type: FETCH_PHOTO_START,
});

export const fetchPhotoSuccess = (photoData) => ({
    type: FETCH_PHOTO_SUCCESS,
    payload: photoData,
});

export const fetchPhotoFailure = (error) => ({
    type: FETCH_PHOTO_FAILURE,
    payload: error,
});

export const fetchNasaPhoto = () => {
    return async (dispatch) => {
        dispatch(fetchPhotoStart());
        try {
            const { data } = await axios.get(
                "https://api.nasa.gov/planetary/apod?api_key=4yknZoCPAqHXOFHCP3jE7RPejghTld9hsJJ0RIWx"
            );
            dispatch(fetchPhotoSuccess(data));
        } catch (error) {
            dispatch(fetchPhotoFailure(error));
        }
    };
};
