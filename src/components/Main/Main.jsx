import { Routes, Route, Navigate } from "react-router-dom";

import { News } from "./components/News";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";

import { Languages } from "./Languages";
const { ProfileData, SettingsData, NewsData } = Languages;

export const Main = () => {
    return (
        <main className="Main">
            <Routes>
                <Route path="*" element={<Navigate to={"/news"} />} />
                <Route path="/" element={<Navigate to={"/news"} />} />
                <Route
                    path="/profile/:username/:isadmin"
                    element={<Profile data={ProfileData} />}
                />
                <Route
                    path="/settings"
                    element={<Settings data={SettingsData} />}
                />
                <Route path="/news" element={<News data={NewsData} />} />
            </Routes>
        </main>
    );
};
