export const Settings = ({ data }) => {
    return (
        <ul>
            {data.map(({ id, settingParams }) => {
                return <li key={id}>{settingParams}</li>;
            })}
        </ul>
    );
};
