const Sequelize = require('sequelize');
const postgresDb = require('../database/Pgconfig');

const Product = postgresDb.define(
  'products',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: new Sequelize.UUIDV4(),
      unique: true,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    softDelete: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      default: false,
    },
  },
  {
    paranoid: true,
  }
);

module.exports = Product;
