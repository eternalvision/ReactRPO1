import { GetPhotos } from "./components/GetPhotos";
import { GetPosts } from "./components/GetPosts";
import { CreatePost } from "./components/CreatePost";
import PropTypes from "prop-types";

export const App = ({ ApiRequests }) => {
    const { getPhotos, getPosts, createPost } = ApiRequests;

    return (
        <ul>
            <li>
                <CreatePost createPost={createPost} getPosts={getPosts} />
            </li>
            {/* <li>
                <GetPhotos getPhotos={getPhotos} />;
            </li> */}
            {/* <li>
                <GetPosts getPosts={getPosts} />
            </li> */}
        </ul>
    );
};

App.propTypes = {
    ApiRequests: PropTypes.object.isRequired,
};
