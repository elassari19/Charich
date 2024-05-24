const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: [String], // Array of strings for multiple images
        required: true
    },
    colors: {
        type: [String], // Array of strings for multiple images
        required: false
    },
    sizes: {
        type: [String], // Array of strings for multiple images
        required: false
    },
    description: {
        type: String,
        default: null
    }
});

productSchema.plugin(AutoIncrement, { inc_field: 'id' });
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
