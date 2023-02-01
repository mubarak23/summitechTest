const express = require('express');
const {
  fetchProduct,
  addNewProduct,
} = require('../controllers/productController');
const { protected } = require('../middleware/authmiddleware');
const upload = require('../service/uploadImage.js');
const router = express.Router();

router.post('/products', protected, upload.single('image'), addNewProduct);

router.get('/products', protected, fetchProduct);

module.exports = router;
