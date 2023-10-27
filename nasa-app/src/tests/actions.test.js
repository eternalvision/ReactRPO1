import * as actions from "../redux/actions";
import {
    FETCH_PHOTO_START,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILURE,
} from "../redux/actions";

describe("nasa actions", () => {
    it("start fetching photo", () => {
        const expectedAction = {
            type: FETCH_PHOTO_START,
        };
        expect(actions.fetchPhotoStart()).toEqual(expectedAction);
    });
    it("successful photo fetch", () => {
        const photoData = { url: "some_url", title: "some_title" };
        const expectedAction = {
            type: FETCH_PHOTO_SUCCESS,
            payload: photoData,
        };
        expect(actions.fetchPhotoSuccess(photoData)).toEqual(expectedAction);
    });
    it("failed photo fetch", () => {
        const error = "Failed to fetch";
        const expectedAction = {
            type: FETCH_PHOTO_FAILURE,
            payload: error,
        };
        expect(actions.fetchPhotoFailure(error)).toEqual(expectedAction);
    });
});
