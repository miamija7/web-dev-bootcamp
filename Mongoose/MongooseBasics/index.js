//////// CONNECTION ////////
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp').then(()=>{
    console.log('Connection Established!')
}).catch(err => console.log(err));

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function() {
//     console.log("Connection Open!!")
// })

// main().catch(err => console.log(err));
// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/test');
//     // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
// }


//////// SCHEMA ////////
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});


//////// MODEL ////////
const Movie = mongoose.model('Movie', movieSchema);
// NOTE: making a model in mongoose automatically creates a collection [movies]
// const nemo = new Movie({title: 'Finding Nemo', year: 2010, score: 8.4, rating: 'G'})
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })

// TERMINAL: node index.js
