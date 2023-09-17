import Data from "./data.json";

export const ObjDestructarizationExampleComponent = () => {
    const { name, surname, age } = Data;

    return (
        <ul
            style={{
                display: "flex",
                padding: "10px",
                margin: "10px",
                listStyle: "none",
            }}>
            <li
                style={{
                    margin: "5px",
                    backgroundColor: "#000",
                    padding: "5px",
                    borderRadius: "10px",
                    color: "#fff",
                }}>
                {name}
            </li>
            <li
                style={{
                    margin: "5px",
                    backgroundColor: "#000",
                    padding: "5px",
                    borderRadius: "10px",
                    color: "#fff",
                }}>
                {surname}
            </li>
            <li
                style={{
                    margin: "5px",
                    backgroundColor: "#000",
                    padding: "5px",
                    borderRadius: "10px",
                    color: "#fff",
                }}>
                {age}
            </li>
        </ul>
    );
};
