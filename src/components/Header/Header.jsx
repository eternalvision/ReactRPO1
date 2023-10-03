import { Link } from "react-router-dom";
import MenuItems from "./data.json";

export const Header = () => {
    return (
        <header className="Header">
            <nav>
                <ul>
                    {MenuItems.map(
                        ({ id, linkTo, title, userNameProfile, userType }) => {
                            return (
                                <li key={id}>
                                    <Link
                                        to={
                                            userNameProfile
                                                ? `${linkTo}/${userNameProfile}/${userType}`
                                                : `${linkTo}`
                                        }>
                                        {title}
                                    </Link>
                                </li>
                            );
                        }
                    )}
                </ul>
            </nav>
        </header>
    );
};
