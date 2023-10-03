import PropTypes from "prop-types";

const Author = (props) => {
    const { image, quote, authorName } = props;
    return (
        <ul>
            <li>
                <img src={image} alt={authorName} />
            </li>
            <li>{quote}</li>
            <li>{authorName}</li>
        </ul>
    );
};

Author.propTypes = {
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
};

Author.defpaultProps = {
    image: "",
    quote: "A horse! a horse!",
    authorName: "William",
};

export const GetCard = () => {
    const data = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/187px-Shakespeare.jpg",
            quote: "A horse! a horse! my kingdom for a horse!",
            authorName: "William Shakespeare",
        },
    ];

    return data.map(({ image, quote, authorName }) => (
        <Author
            key={quote}
            image={image}
            quote={quote}
            authorName={authorName}
        />
    ));
};
