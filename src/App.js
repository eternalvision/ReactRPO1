import { Components } from "./components/Components";
import Data from "./data.json";
const { Header, Main, Footer } = Components;

const getNumber = () => {
    return 350 * 2;
};

export const App = () => {
    return (
        <>
            <Header />
            <Main Data={Data} Number={getNumber} />
            <Footer />
        </>
    );
};
