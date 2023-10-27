import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./api/ApiClient";

export const App = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <>
            {loading && <p>Loading...</p>}
            {data.length > 0 &&
                data.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <h2>{post.body}</h2>
                    </div>
                ))}
            {error && <p>{error}</p>}
        </>
    );
};
