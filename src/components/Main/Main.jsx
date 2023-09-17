import { MainComponents } from "./components/Components";

const {
    ObjDestructarizationExampleComponent,
    StateExample,
    Counter,
    StateColorExampleComponent,
    ChangeColorExampleComponent,
} = MainComponents;

export const Main = () => {
    // let arr = [7, 88, -3];
    // let [f, ...arr2] = arr;
    return (
        <main>
            {/* {f},
            {arr2.map((e) => (
                <p>{e}</p>
            ))}
             */}

            <ObjDestructarizationExampleComponent />
            <StateExample />
            <Counter />
            <StateColorExampleComponent />
            <ChangeColorExampleComponent />
        </main>
    );
};
