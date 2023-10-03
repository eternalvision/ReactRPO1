import { createRef } from "react";

export const Form2ExampleRefComponent = () => {
    let nameRef = createRef();
    let lastNameRef = createRef();

    return (
        <form>
            <input type="text" id="userName" ref={nameRef} placeholder="Name" />
            <input
                type="text"
                id="userName"
                ref={lastNameRef}
                placeholder="Last name"
            />
            <input
                type="submit"
                value="Click me"
                onClick={(event) => {
                    event.preventDefault();
                    console.log(
                        `${nameRef.current.value} ${lastNameRef.current.value}`
                    );
                }}
            />
        </form>
    );
};
