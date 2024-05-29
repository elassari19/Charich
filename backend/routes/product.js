const express = require('express');
const productController = require('../controllers/productController');

const productRouter = express.Router();

productRouter.get('/', productController.getProducts);
productRouter.get('/:id', productController.getProductById);
productRouter.post('/', productController.addProduct);
productRouter.patch('/:id', productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

module.exports = productRouter;
