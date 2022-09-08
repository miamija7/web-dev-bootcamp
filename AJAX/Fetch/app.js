// fetch("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log("1ST RESOLVED:", res);
//         // res.json().then(data => { console.log("JSON DATA:", data); })
//         return res.json();
//     })
//     .then (data => {
//         console.log("1ST JSON DATA:", data);
//     })
//     .catch (e => {
//         console.log("ERROR:", e);
//     })


// fetch("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log("1ST RESOLVED:", res);
//         // res.json().then(data => { console.log("JSON DATA:", data); })
//         return res.json();
//     })
//     .then (data => {
//         console.log("1ST JSON DATA:", data);
//         return fetch("https://swapi.dev/api/people/3");
//     })
//     .then (res => {
//         console.log("2ND RESOLVED:", res);
//         return res.json();
//     })
//     .then (data => {
//         console.log("2ND JSON DATA:", data);
//     })
//     .catch (e => {
//         console.log("ERROR:", e);
//     })


// // REFACTOR TO ASYNC FUNCTION
// const loadStarWarsPeople = async () => {
//     try {
//         const res = await fetch("https://swapi.dev/api/people/1");
//         const data = await res.json();
//         console.log(data);
//         const res2 = await fetch("https://swapi.dev/api/people/2");
//         const data2 = await res2.json();
//         console.log(data2);
//     } catch (e) {
//         console.log("ERROR:", e);
//     }
// }
// loadStarWarsPeople();


// REFACTOR TO ACCEPT AN :ID
const loadStarWarsPeople = async (id) => {
    try {
        const res = await fetch(`https://swapi.dev/api/people/${id}`);
        const data = await res.json();
        console.log(data);

    } catch (e) {
        console.log("ERROR:", e);
    }
}

loadStarWarsPeople(11);
loadStarWarsPeople(21);

