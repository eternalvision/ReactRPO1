import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const GetPosts = ({ getPosts }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then((response) => setPosts(response.data));
    }, [getPosts]);

    return (
        <ul>
            {posts.map(({ id, title, body }) => {
                return (
                    <li key={id}>
                        <b>{title}</b>
                        <br />
                        {body}
                        <br />
                        <br />
                    </li>
                );
            })}
        </ul>
    );
};

GetPosts.propTypes = {
    getPosts: PropTypes.func.isRequired,
};
