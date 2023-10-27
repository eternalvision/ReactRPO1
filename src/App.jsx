// import { useState } from "react";

export const App = () => {
    // const [data, setData] = useState([]);
    //! 1
    // setTimeout(() => {
    //     console.log("Hello");
    // }, 5000);
    // console.log("I'm being called before greet function.");
    //! 2
    // const outer = () => {
    //     console.log("outer");
    //     const inner = () => {
    //         console.log("inner!");
    //     };
    //     inner();
    // };
    // outer();
    //! 3
    // setTimeout(function greet (){
    //     console.log("Hello");
    // }, 2000);
    // return (
    //     <button
    //         onClick={() =>
    //             setTimeout(() => {
    //                 console.log("Button Click - (2s)");
    //             }, 2000)
    //         }>
    //         Click
    //     </button>
    // );
    //! 4
    // const a = 6;
    // if (a > 10) {
    //     console.log("ok");
    // } else throw new Error("num a < 10!");
    //! 5
    // const getResult = async () => {
    //     const a = 15;
    //     const b = 36;
    //     if (a === b) {
    //         return true;
    //     } else throw new Error("error");
    // };
    // getResult().then(
    //     (result) => {
    //         console.log(`OK, ${result}`);
    //     },
    //     (error) => {
    //         console.log(error);
    //     }
    // );
    //! 6
    // const getData = async () => {
    //     return fetch("https://www.anapioficeandfire.com/api/houses");
    // };
    // getData()
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((houses) => {
    //         setData(houses);
    //         return fetch(houses[0].overlord);
    //     })
    //     .then((response) => {
    //         return response.json();
    //     });
    // return (
    //     <ul>
    //         {data.length > 0 &&
    //             data.map((element, index) => {
    //                 const { coatOfArms, currentLord, name, words } = element;
    //                 return (
    //                     <li key={index}>
    //                         <ul>
    //                             <li>{coatOfArms}</li>
    //                             <li>{currentLord}</li>
    //                             <li>{name}</li>
    //                             <li>{words}</li>
    //                         </ul>
    //                         <br />
    //                     </li>
    //                 );
    //             })}
    //     </ul>
    // );
    //! 7
    // try {
    //     let data = fetch(`https://swapi.dev/api/films/345/`);
    //     console.log(data);
    // } catch (error) {
    //     console.error(error);
    // }
    //! 8
    // const GetData = () => {
    //     fetch("http://jsonplaceholder.typicode.com/posts")
    //         .then((response) => response.json())
    //         .then((data) => console.log(data));
    // };
    // GetData();
    //! 9
    // const newPost = {
    //     title: prompt("Write title"),
    //     body: prompt("Write body text"),
    //     userId: prompt("Write id"),
    // };
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: "POST",
    //     body: JSON.stringify(newPost),
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //     });
    //! 9
    // const getStarWarsMovie = async () => {
    //     const response = await fetch(
    //         `https://jsonplaceholder.typicode.com/posts`
    //     );
    //     return response.json().then((data) => console.log(data));
    // };
    // getStarWarsMovie();
    //! 10
    // function getMainActorProfileFromMovie(id) {
    //     return fetch(`https://swapi.dev/api/films/${id}/`)
    //         .then((movieResponse) => {
    //             return movieResponse.json();
    //         })
    //         .then((movie) => {
    //             const characterUrl = movie.characters[0].split("//")[1];
    //             return fetch(`https://${characterUrl}`);
    //         })
    //         .then((characterResponse) => {
    //             return characterResponse.json();
    //         })
    //         .catch((err) => {
    //             console.error("Произошла ошибка!", err);
    //         });
    // }
    // getMainActorProfileFromMovie(1).then((profile) => {
    //     console.log(profile);
    // });
};
