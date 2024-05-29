const { uploadImages } = require('../libs/cloudinary');
const Product = require('../models/product');

// Add a new product
const addProduct = async (req, res) => {
    try {
        const { images, ...rest } = req.body;

        const productImages = await uploadImages(images.map((img) => img), `charich/${rest.name}`);

        const newProduct = new Product({
            ...rest,
            image: productImages,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json({ message: 'Product added successfully', data: savedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get a product by custom ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id });
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Update other fields based on the request body
        Object.assign(product, req.body);

        const updatedProduct = await product.save();
        res.json({ message: 'Product updated successfully', data: updatedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id });
        if (product) {
            await product.deleteOne();
            res.json({ message: 'Product deleted successfully', data: product });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
