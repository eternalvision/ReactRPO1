import PropTypes from "prop-types";

const Car = ({ details }) => {
    const { name, year } = details;
    return (
        <ul>
            <li>{name}</li>
            <li>{year}</li>
        </ul>
    );
};

Car.propTypes = {
    details: PropTypes.exact({
        name: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
    }).isRequired,
};

export const GetObject = () => {
    const details = {
        name: "Honda Accord",
        year: 2008,
    };
    return <Car details={details} />;
};
