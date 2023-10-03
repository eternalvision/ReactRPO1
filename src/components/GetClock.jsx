import { useState, useEffect } from "react";

export const GetClock = () => {
    const [currentTime, setCurrentTime] = useState("");

    const timerAction = () => {
        setCurrentTime(new Date().toLocaleTimeString());
    };

    useEffect(() => {
        let timeHandler = setInterval(timerAction, 1000);
        return () => clearInterval(timeHandler);
    }, []);

    return (
        <div>
            <h1>{currentTime}</h1>
        </div>
    );
};
