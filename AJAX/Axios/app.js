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


// REFACTOR TO ACCEPT AN :ID
const loadStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    } catch (e) {
        console.log("ERROR: ", e);
    }
}
loadStarWarsPerson(1);
loadStarWarsPerson(5);
loadStarWarsPerson(7);