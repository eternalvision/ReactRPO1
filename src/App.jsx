// import { GetClock } from "./components/GetClock";
// import { GetCard } from "./components/GetCard";
// import { GetNumber } from "./components/GetNumbers";
// import { GetObject } from "./components/GetObject";
// import { UserInfo } from "./components/UserInfo";

export const App = ({ Assets }) => {
    return (
        <div>
            {Assets.map(({ img }, index) => (
                <img key={index} src={img} alt="" />
            ))}
            {/* <GetClock /> */}
            {/* <GetCard /> */}
            {/* <GetNumber /> */}
            {/* <GetObject /> */}
            {/* <UserInfo /> */}
        </div>
    );
};
