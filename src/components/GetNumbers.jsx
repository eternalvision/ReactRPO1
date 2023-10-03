import PropTypes from "prop-types";

const NumberList = ({ values }) => {
    return (
        <ul>
            {values.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

NumberList.propTypes = {
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
};

NumberList.defaultProps = {
    values: [0, 0, 0],
};

export const GetNumber = () => {
    const values = [7, 11, -3];

    return <NumberList values={values} />;
};
