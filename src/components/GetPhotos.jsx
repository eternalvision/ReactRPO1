import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const GetPhotos = ({ getPhotos }) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getPhotos().then((response) => {
            setPhotos(response.data);
        });
    }, [getPhotos]);

    return photos.map(({ title, url, id }) => (
        <figure key={id}>
            <img src={url} alt="" />
            <figcaption>{title}</figcaption>
        </figure>
    ));
};

GetPhotos.propTypes = {
    getPhotos: PropTypes.func.isRequired,
};
