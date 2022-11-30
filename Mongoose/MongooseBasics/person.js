// Require
const mongoose = require('mongoose');

// Connect
mongoose.connect('mongodb://localhost:27017/shopApp').then(() => {
    console.log('Connection Established!');
}).catch(e => console.log(e));

// Schema
const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

// Static/Instance Methods & Virtuals
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`;
})

// Model
const Person = mongoose.model('Person', personSchema);