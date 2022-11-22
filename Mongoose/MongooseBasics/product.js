const mongoose = require('mongoose');

// Connection
mongoose.connect('mongodb://localhost:27017/shopApp').then(()=>{
    console.log('Connection Established!');
}).catch(e => console.log(e));


// Schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String]
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})


// Model
const Product = mongoose.model('Product', productSchema);


// Creating a Product
// const bike = new Product({name: 'Bike Helmet', price: 29.99, categories: ['Safety', 'Cycling']});
// bike.save()
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

// const bike = new Product({ price: 599.99});
// bike.save()
//     .then(data => console.log(data))
//     .catch(e => console.log(e.errors.name.properties.message))

const bike = new Product({name: 'Bike Helmet', price: 29.99, categories: ['Safety', 'Cycling']});
Product.findOneAndUpdate({name: 'Bike Helmet'}, {price: -10.99}, {new: true, runValidators: true})
    .then(data => console.log(data))
    .catch(e => console.log(e))