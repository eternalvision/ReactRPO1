import UserData from "./userData.json";

// console.log(...UserData);
// console.log(...UserData[0]);

const WriterComponent = ({ name, lastName }) => {
    return (
        <ul>
            <li>{name}</li>
            <li>{lastName}</li>
        </ul>
    );
};

export const Writer = () => {
    return (
        <div>
            {UserData.map((item) =>
                item ? <WriterComponent key={item.name} {...item} /> : ""
            )}
        </div>
    );
};
