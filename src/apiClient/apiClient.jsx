import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const handleError = (error) => {
    throw new Error(error);
};

const getPhotos = async () => {
    try {
        return await axios.get("/photos");
    } catch (error) {
        handleError(error);
    }
};

const getPosts = async () => {
    try {
        return await axios.get("/posts");
    } catch (error) {
        handleError(error);
    }
};

const getCurrentPost = async (id) => {
    try {
        return await axios.get(`/posts/${id}`);
    } catch (error) {
        handleError(error);
    }
};

const createPost = async (data) => {
    try {
        return await axios.post("/posts", data);
    } catch (error) {
        handleError(error);
    }
};

const editPost = async ({ id, data }) => {
    try {
        return await axios.put(`/posts/${id}`, data);
    } catch (error) {
        handleError(error);
    }
};

const deletePost = async (id) => {
    try {
        return await axios.delete(`/posts/${id}`);
    } catch (error) {
        handleError(error);
    }
};

export const ApiRequests = {
    getPhotos,
    getPosts,
    getCurrentPost,
    createPost,
    editPost,
    deletePost,
};
