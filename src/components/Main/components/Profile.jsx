import { useParams } from "react-router-dom";
import { useState } from "react";

export const Profile = ({ data }) => {
    const { username, isadmin } = useParams();
    const [value, setValue] = useState("");

    return (
        <section className="Profile">
            <ul>
                {data.map(({ id, name, surname, userImg, userNameProfile }) => {
                    if (username === userNameProfile) {
                        return (
                            <li key={id}>
                                <img src={userImg} alt="" />
                                {name} {surname}
                                {isadmin === "admin" ? (
                                    <form
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}>
                                        <input
                                            type="text"
                                            onChange={(event) => {
                                                setValue(event.target.value);
                                                console.log(value);
                                            }}
                                            value={value}
                                        />
                                        <input type="submit" value="Click" />
                                    </form>
                                ) : (
                                    ""
                                )}
                            </li>
                        );
                    } else return "";
                })}
            </ul>
        </section>
    );
};
