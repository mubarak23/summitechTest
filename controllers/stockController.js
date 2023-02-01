const { v4: uuidv4 } = require('uuid');
const sequelize = require('../database/Pgconfig.js');
const Product = require('../models/Product.js');
const Stock = require('../models/Stock');

// @Desc Add a new stock
// @Route /stocks - POST
// @Access Private

exports.addProductStock = async (req, res, next) => {
  return sequelize.transaction(async (t) => {
    try {
      const { productId, quantity } = req.body;
      const batchId = uuidv4();
      console.log(batchId);
      if (!productId || !quantity) {
        return res.status(400).json({ message: 'All Field Are Required' });
      }

      // find if product already exist
      const product = await Product.findOne({
        where: { id: productId },
      });

      if (!product) {
        return res.status(400).json({
          message: 'Product with the provided ID Does Not Exist',
        });
      }
      const productStocks = await Stock.findOne({ productId: productId });
      if (productStocks) {
        await productStocks.update(
          { quantity: productStocks.quantity + quantity },
          { transaction: t }
        );
        return res.status(200).json({
          message: 'Product Stocks Added Successfully',
        });
      }

      // create new stock
      const newStock = await Stock.create(
        {
          batchId,
          productId,
          quantity,
          softDelete: false,
        },
        { transaction: t }
      );
      await t.commit();
      return res.status(201).send(newStock);
    } catch (error) {
      t.rollback();
      return next(error);
    }
  });
};

// @Desc Fetch stock
// @Route /stocks - GET
// @Access Private

exports.fetchProductStock = async (req, res, next) => {
  try {
    const batchId = req.params.batchId;

    const stock = await Stock.findOne({
      where: { batchId },
    });

    if (!stock) {
      return res.status(404).json({
        message: 'Stock does not exist',
      });
    }

    return res.status(200).send(stock);
  } catch (error) {
    return next(error);
  }
};

// @Desc Fetch stock
// @Route /stocks - GET
// @Access Private

exports.fetchAllStocks = async (req, res, next) => {
  try {
    const stocks = await Stock.findAll();

    return res.status(200).send(stocks);
  } catch (error) {
    return next(error);
  }
};
