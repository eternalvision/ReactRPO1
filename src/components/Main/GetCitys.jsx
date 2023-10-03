import { useState } from "react";
import Citys from "./citys.json";

const CityCard = (props) => {
    const { citiName, citiCharakteristik, citizienceNumber, square } = props;
    return (
        <ul>
            <li>{citiName}</li>
            <li>{citiCharakteristik}</li>
            <li>{citizienceNumber}</li>
            <li>{square}</li>
        </ul>
    );
};

export const GetCityComponent = () => {
    const [getComponent, setGetComponent] = useState("");

    const handlerButtonClick = () => {
        setGetComponent(
            getComponent
                ? ""
                : Citys.map((element) => (
                      <CityCard key={element.citiName} {...element} />
                  ))
        );
    };

    return (
        <>
            <button onClick={handlerButtonClick}>Get City</button>
            {getComponent}
        </>
    );
};
