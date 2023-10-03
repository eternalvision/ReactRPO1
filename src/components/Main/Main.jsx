import {
    Route,
    Routes,
    Navigate,
    Link,
    useParams,
    useLocation,
} from "react-router-dom";
import { User } from "./components/User";
import { ToDoApp } from "./components/ToDo";

// const Car = () => {
//     const { id } = useParams();
//     const location = useLocation();

//     const urlSearchParams = new URLSearchParams(location.search);

//     return (
//         <div>
//             <h2>ID = {id}</h2>
//             <h2>Color = {urlSearchParams.get("color")}</h2>
//             <h2>Year = {urlSearchParams.get("year")}</h2>
//         </div>
//     );
// };

// const MainComponent = () => {
//     return <div>Main Component</div>;
// };

// const RouteComponents = () => {
//     const data = [{ name: "Name", surname: "Surname" }];
//     return (
//         <Routes>
//             <Route path="/" element={<MainComponent />} />
//             <Route path="/:id" element={<Car />} />
//             <Route path="/profile" element={<User data={data} />} />
//             <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//     );
// };

export const Main = () => {
    return (
        <main className="Main">
            {/* <nav>
                <Link to="/12?color=red&year=2010">Toyota Camry</Link>
                <Link to="/27?color=black&year=2015">Honda Accord</Link>
                <Link to="/27?color=yellow&year=2018">Nissan Juke</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <RouteComponents /> */}
            <ToDoApp />
        </main>
    );
};
