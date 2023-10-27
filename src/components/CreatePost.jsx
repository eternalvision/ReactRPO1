import { useState } from "react";
import PropTypes from "prop-types";

export const CreatePost = ({ createPost, getPosts }) => {
    const [newPost, setNewPost] = useState({
        title: "",
        body: "",
        userId: 1,
    });
    const [posts, setPosts] = useState([]);
    const [addedPost, setAddedPost] = useState(null);

    const loadPosts = () => {
        getPosts().then((response) => {
            setPosts(response.data);
        });
    };

    const handleAddPost = () => {
        createPost(newPost).then((response) => {
            console.log("Post Crreated", response.data);

            loadPosts();

            setNewPost({
                title: "",
                body: "",
                userId: 1,
            });

            setAddedPost(response.data);
        });
    };

    return (
        <div>
            <h1>Create Posts Manager</h1>
            <input
                type="text"
                placeholder="Title"
                value={newPost.title}
                onChange={(e) =>
                    setNewPost({ ...newPost, title: e.target.value })
                }
            />
            <textarea
                placeholder="Body"
                value={newPost.body}
                onChange={(e) =>
                    setNewPost({ ...newPost, body: e.target.value })
                }></textarea>
            <button onClick={handleAddPost}>Add Post</button>
            <br />
            <br />
            {addedPost && (
                <div>
                    <h2>Created Post</h2>
                    <p>Title: {addedPost.title}</p>
                    <p>Body: {addedPost.body}</p>
                </div>
            )}
            <ul>
                {posts &&
                    posts.map(({ id, title, body }) => {
                        return (
                            <li key={id}>
                                <b>{title}</b>
                                <br />
                                <br />
                                <p>{body}</p>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

CreatePost.propTypes = {
    createPost: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired,
};
