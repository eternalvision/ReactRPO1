import { useDispatch, useSelector } from "react-redux";
import { fetchNasaPhoto } from "./redux/actions";

export const App = () => {
    const dispatch = useDispatch();
    const { photo, loading, error } = useSelector((state) => state.nasa);
    return (
        <>
            <button
                onClick={() => {
                    dispatch(fetchNasaPhoto());
                }}>
                Fetch NASA Photo
            </button>
            {loading && <p>Loading...</p>}
            {photo && (
                <img
                    width={600}
                    height={600}
                    src={photo.url}
                    alt={photo.title}
                />
            )}
            {error && <p>Error: {error.message}</p>}
        </>
    );
};
