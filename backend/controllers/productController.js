const { uploadImages } = require('../libs/cloudinary');
const Product = require('../models/product');

// Add a new product
const addProduct = async (req, res) => {
    const { products } = req.body;

    for(pro of products) {
        try {
            const { image, ...rest } = pro;
            console.log("product", pro)
    
            const productImages = await uploadImages(image.map((img) => img), `charich/${rest.name.trim()}`);
    
            const newProduct = new Product({
                ...rest,
                image: productImages,
            });
    
            const savedProduct = await newProduct.save();
            // res.status(201).json({ message: 'Product added successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    res.status(201).json({ message: 'Product added successfully' });
};

// Get all products
const getProducts = async (req, res) => {
    console.log("getProducts", req.query)
    try {
        if (req.query.c !== undefined) {
        const products = await Product.find({ category: req.query.c }, null, { limit: 10 });
        return res.status(200).json(products);
        } else {
        const products = await Product.find({}, null, { limit: 10 });
        return res.status(200).json(products);
        }
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
