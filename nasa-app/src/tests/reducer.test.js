import { reducer } from "../redux/reducer";
import {
    FETCH_PHOTO_START,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILURE,
} from "../redux/actions";

describe("nasa reducer", () => {
    it("initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            loading: false,
            photo: null,
            error: null,
        });
    });
    it("handle FETCH_PHOTO_START", () => {
        expect(reducer({}, { type: FETCH_PHOTO_START })).toEqual({
            loading: true,
        });
    });
    it("handle FETCH_PHOTO_SUCCESS", () => {
        const mockPhotoData = { url: "some_url", title: "some_title" };
        expect(
            reducer(
                {},
                {
                    type: FETCH_PHOTO_SUCCESS,
                    payload: mockPhotoData,
                }
            )
        ).toEqual({
            loading: false,
            photo: mockPhotoData,
        });
    });
    it("handle FETCH_PHOTO_FAILURE", () => {
        const mockError = "Some error";
        expect(
            reducer(
                {},
                {
                    type: FETCH_PHOTO_FAILURE,
                    payload: mockError,
                }
            )
        ).toEqual({
            loading: false,
            error: mockError,
        });
    });
});
