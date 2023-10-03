import { useState } from "react";
import axios from "axios";

export const UserInfo = () => {
    const [userName, setUserName] = useState("");
    const [userData, setUserData] = useState([]);

    const handlerChange = (event) => {
        setUserName(event.target.value);
    };

    const handlerSubmit = async (event) => {
        event.preventDefault();
        try {
            const query = `https://api.github.com/users/${userName}`;
            let response = await axios.get(query);
            setUserData([...userData, response.data]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input
                    type="text"
                    required
                    placeholder="Input name to search"
                    value={userName}
                    onChange={handlerChange}
                />
                <input type="submit" value="Search GitHub Users" />
            </form>
            {userData.map(({ login, name, followers, avatar_url }) => {
                return (
                    <div key={login}>
                        <h2>Username: {login}</h2>
                        <h2>Name: {name}</h2>
                        <h2>Followers: {followers}</h2>
                        <img src={avatar_url} alt={name} width={200} />
                    </div>
                );
            })}
        </>
    );
};
