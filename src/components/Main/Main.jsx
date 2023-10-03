// import Users from "./data.json";
// import { Writer } from "./MassExample";
// import { Form1Example } from "./Form1Example";
// import { Form2ExampleRefComponent } from "./Form2ExampleRef";
import { FormValidationComponent } from "./FormValidation";
import { GetCityComponent } from "./GetCitys";
// const mass = [9, 4, 16];

export const Main = () => {
    return (
        <main className="Main">
            {/* {mass.map((e) => {
                return <p key={e}>{Math.sqrt(e)}</p>;
            })} */}
            {/* {mass.map(function (e) {
                return <p key={e}>{Math.pow(e, 2)}</p>;
            })} */}
            {/* {Users.map(({ lastName, age }) => {
                age += 10;
                return (
                    <ul key={`${lastName}${age}`}>
                        <li>{lastName}</li>
                        <li>{age}</li>
                    </ul>
                );
            })} */}
            {/* <Writer /> */}
            {/* <Form1Example /> */}
            {/* <Form2ExampleRefComponent /> */}
            <FormValidationComponent />
            <GetCityComponent />
        </main>
    );
};
