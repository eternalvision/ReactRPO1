const mass = [
    {
        name: "John",
        surname: "Wick",
        age: "52",
        email: "john.wick@gmail.com",
        username: "jickwo",
    },
    {
        name: "John",
        surname: "Snow",
        age: "30",
        email: "john.snow@gmail.com",
        username: "vanilla",
    },
    {
        name: "Jared",
        surname: "Leto",
        age: "58",
        email: "j.leto@gmail.com",
        username: "leto",
    },
];

const LazyComponent = () => {
    return (
        <ul>
            {mass.map(({ name, surname, age, email, username }, index, obj) => {
                console.log(obj);
                return (
                    <li key={index}>
                        {name}
                        <br />
                        {surname}
                        <br />
                        {username}
                        <br />
                        {age}
                        <br />
                        {email}
                    </li>
                );
            })}
        </ul>
    );
};

export default LazyComponent;
