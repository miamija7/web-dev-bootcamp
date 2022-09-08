// axios.get("https://swapi.dev/api/people/1")
// .then(res => {
//     console.log("RESPONSE: ", res);
// })
// .catch (e => {
//     console.log("ERROR:", e);
// })


// // REFACTOR TO ASYNC FUNCTION
// const loadStarWarsPerson = async () => {
//     const res = await axios.get("https://swapi.dev/api/people/1");
//     console.log(res.data);
// }
// loadStarWarsPerson();


// // REFACTOR TO ACCEPT AN :ID
// const loadStarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//         console.log(res.data);
//     } catch (e) {
//         console.log("ERROR: ", e);
//     }
// }
// loadStarWarsPerson(7);


// // DAD JOKES: HEADER IN HTTP REQUEST
// const getDadJoke = async () => {
//     try {
//         const config = { headers : { Accept: "application/json"} }
//         const res = await axios.get('https://icanhazdadjoke.com/', config);
//         console.log(res.data.joke);
//     } catch (e) {
//         console.log("ERROR:", e);
//     }
// }
// // getDadJoke();


// DAD JOKES ON PAGE GENERATOR
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    try {
        const jokeText = await getDadJoke()
        const newLI = document.createElement('li');
        newLI.append(jokeText);
        jokes.append(newLI);
    } catch (e) {
        console.log("ERROR:", e);
    }

}
const getDadJoke = async () => {
    try {
        const config = { headers : { Accept: "application/json"} }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }
}

button.addEventListener('click', addNewJoke);


