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
    image: [
        { 
            secure_url: { type: String },
            public_id: { type: String }
        }
    ],
    colors: {
        type: [String], // Array of strings for multiple colors
        required: false
    },
    sizes: {
        type: [String], // Array of strings for multiple sizes
        required: false
    },
    description: {
        type: String,
        default: null
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: false
    }
});

productSchema.plugin(AutoIncrement, { inc_field: 'id' });
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
