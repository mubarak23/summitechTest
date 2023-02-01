const sequelize = require('../database/Pgconfig.js');
const Product = require('../models/Product.js');

// @Desc Add a new product
// @Route /products - POST
// @Access Private

exports.addNewProduct = async (req, res, next) => {
  return sequelize.transaction(async (t) => {
    try {
      const { name, description } = req.body;
      const userId = req.user.id;
      console.log(userId);
      if (!name || !description) {
        return res.status(400).json({ message: 'All Field Are Required' });
      }

      // find if user already exist
      const product = await Product.findOne({
        where: { name },
      });

      if (product) {
        return res.status(400).json({
          message: 'Product with the provided Name already exist',
        });
      }
      // create user account
      const newProduct = await Product.create(
        {
          userId,
          name,
          description,
          image: req.file.path,
          softDelete: false,
        },
        { transaction: t }
      );
      await t.commit();
      return res.status(201).send(newProduct);
    } catch (error) {
      t.rollback();
      return next(error);
    }
  });
};

// @Desc Fetch Products
// @Route /products - GET
// @Access Private

exports.fetchProduct = async (req, res, next) => {
  try {
    const userId = req.user.id;

    console.log(userId);
    const products = await Product.findAll({
      where: { userId: userId },
    });

    if (!products) {
      return res.status(404).json({
        message: 'Login user does not have any Product',
      });
    }

    return res.status(200).send(products);
  } catch (error) {
    return next(error);
  }
};
