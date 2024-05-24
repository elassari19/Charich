const express = require('express');
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');

const productRouter = express.Router();

// Set storage engine for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathImage = path.join(__dirname, '../images');
        cb(null, pathImage); // Define the folder where images will be stored
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

productRouter.get('/', productController.getProducts);
productRouter.get('/:id', productController.getProductById);
productRouter.post('/', upload.array('images', 5), productController.addProduct);
productRouter.put('/:id', upload.array('images', 5), productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

module.exports = { productRouter };
