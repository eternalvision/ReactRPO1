import PropTypes from "prop-types";

const Hello = (props) => {
    return (
        <h1>
            Hello, {props.name} {props.surname}
        </h1>
    );
};

Hello.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
};

const withLogging = (WrappedComponent) => {
    return function EnhancedComponent(props) {
        console.log("Props:", props);
        return <WrappedComponent {...props} />;
    };
};

const HelloWithLogging = withLogging(Hello);

export const App = () => {
    return <HelloWithLogging name="John" surname="Snow" />;
};
