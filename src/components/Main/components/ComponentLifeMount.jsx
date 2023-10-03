import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor");

        this.state = {
            counter: 0,
        };
    }
    componentDidMount() {
        console.log("Component did mount");
    }
    componentDidUpdate() {
        console.log("Component did update");
    }
    componentWillUnmount() {
        console.log("Component did unmount");
    }

    render() {
        console.log("render");
        const clickHandler = () => {
            this.setState({ counter: this.state.counter + 1 });
        };

        return (
            <div className="App">
                <h1>Lifecycle sample</h1>
                <button onClick={clickHandler}>{this.state.counter}</button>
            </div>
        );
    }
}
