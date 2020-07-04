const express = require('express');
const router = express.Router();

//Require controller of product
const product_controller = require('../controllers/product.controller');

//Add product
router.post('/create', product_controller.product_create);
//Get products
router.get('/get', product_controller.products_get);
//Get product by id
router.get('/get/:id', product_controller.product_get)
//Update product by id
router.put('/update/:id', product_controller.product_update);
//Delete product by id
router.delete('/delete/:id', product_controller.product_delete);

module.exports = router;
