const express = require('express');
const {
  fetchAllStocks,
  fetchProductStock,
  addProductStock,
} = require('../controllers/stockController');

const { protected } = require('../middleware/authmiddleware');

const router = express.Router();

router.post('/stocks', addProductStock);

router.get('/stocks', protected, fetchAllStocks);

router.get('/stocks/:batchId', protected, fetchProductStock);

module.exports = router;
