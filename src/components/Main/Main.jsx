import shortUUID from "short-uuid";

//! props using destructarizations
export const Main = ({ Number, Data }) => {
    const obj = {
        name: "Ira",
        surname: "Irinovna",
    };

    const { name, surname } = obj;
    console.log(name, surname);

    return (
        <main className="Main">
            <p>Number: {Number()}</p>
            {Data.map(({ name, age, company }) => {
                return (
                    <ul key={shortUUID.generate()}>
                        <li>{name}</li>
                        <li>{age}</li>
                        <li>{company}</li>
                    </ul>
                );
            })}
        </main>
    );
};

//! props default using
// export const Main = (props) => {
//     const { Data, Number } = props;
//     return (
//         <main className="Main">
//             <p>Number: {Number()}</p>
//             {Data.map(({ name, age, company }) => {
//                 return (
//                     <ul key={shortUUID.generate()}>
//                         <li>{name}</li>
//                         <li>{age}</li>
//                         <li>{company}</li>
//                     </ul>
//                 );
//             })}
//         </main>
//     );
// };
